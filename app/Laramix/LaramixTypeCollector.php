<?php

namespace App\Laramix;

use ReflectionClass;
use Spatie\TypeScriptTransformer\Collectors\Collector;
use Spatie\TypeScriptTransformer\Structures\TransformedType;

class LaramixTypeCollector extends Collector {
    public function getTransformedType(ReflectionClass $class): ?TransformedType
    {


        return null;
    }
}
