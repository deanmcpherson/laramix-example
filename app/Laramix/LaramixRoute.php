<?php

namespace App\Laramix;

use Inertia\Inertia;

class LaramixRoute {
    public function __construct(
        protected string $path,
        protected string $name
    ) {
    }

    public function getPath() : string {
        return $this->path;
    }

    public function getName() : string {
        return $this->name;
    }

    public function render() {
        $componentNames = explode('|', $this->name);
        $components = collect($componentNames)->map(function($componentName) {
            return app(Laramix::class)->component($componentName)->props();
        });

        return Inertia::render('Laramix', [
            'components' => $components
        ]);

    }
}
