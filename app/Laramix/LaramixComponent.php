<?php
namespace App\Laramix;

use Closure;
use Illuminate\Http\Request;
use Inertia\Inertia;
use Inertia\Response;
use ReflectionClass;
use ReflectionFunction;

class LaramixComponent {
    public function __construct
    (
        protected string $filePath,
        protected string $name,

    ) {

    }

    public static function nameToNamespace(string $name) {
        return str($name)->slug('_')->camel()->replace('_','')->__toString();
    }

    private function compile() {
        try {
            return $this->_compile();
        } catch (\Throwable $e) {
             $this->_compile(true);
             throw $e;
        }
    }

    private function _compile(bool $__debug = false) {
        $path = $this->filePath;
        $name = $this->name;
        $existingClasses = collect(get_declared_classes())->toArray();
        try {
            ob_start();


            $__path = $path;

            $items = (static function () use ($__path, $__debug, $name, $existingClasses) {
                $namespace ='LaramixRoute\\' . self::nameToNamespace($name);
                $contents = 'namespace ' . $namespace .'; ?>';
                $contents .= @file_get_contents($__path);
                if ($__debug) {
                    require $__path;
                } else {
                    eval($contents);
                }

                $variables = array_map(function (mixed $variable) {
                    return $variable;
                }, get_defined_vars());

                $classes = collect(get_declared_classes())
                ->filter(fn($class) => str($class)->startsWith($namespace))
                ->reduce(function($arr, $class) {
                    $arr[$class] = new ReflectionClass($class);
                    return $arr;
                }, []);

                return compact('variables',  'classes');

            })();


        }  finally {
            ob_get_clean();
        }

        $variables = $items['variables'];
        $classes = $items['classes'];

        $props = [
            'component' => $name,
            'props' => [],
            'actions' => [],
            '_actions' => [],
            '_classes' => $classes ?? [],
        ];
        if ($variables['props'] ?? null && $variables['props'] instanceof Closure) {
            $props['_props'] = $variables['props'];
        }
        foreach ($variables as $key => $value) {
            if ($value instanceof Closure && $key !== 'props') {
                $reflection = new ReflectionFunction($value);
                $returns = $reflection->getReturnType();
                //? Could make default not an inertia response? Perhaps configurable.
                $isInertia =  (is_null($returns) || is_a($returns->getName(), Response::class, true));

                $props['actions'][] =  $isInertia ? '$' . $key : $key;
                $props['_actions'][$key] = $value;

            }
        }
        return $props;
    }


    public function handleAction(Request $request, string $action) {
        $component = $this->compile();
        $args = $request->input('_args', []);


        if (in_array($action, $component['actions'])) {
            return app()->call($component['_actions'][$action], $args);
        }

        if (in_array('$'. $action, $component['actions'])) {
            return app()->call($component['_actions'][$action], $args);
        }
        abort(404);
    }

    public function classes() {
        return $this->compile()['_classes'];
    }

    public function props() {

        $component = $this->compile();

        unset($component['_actions']);
        unset($component['_classes']);
        if (isset($component['_props'])) {
            $component['props'] = app()->call($component['_props']);
            unset($component['_props']);
        }
        return $component;

    }
}
