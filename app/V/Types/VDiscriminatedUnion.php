<?php

namespace App\V\Types;

class VDiscriminatedUnion extends BaseType {
    public function toTypeScript(): string
    {
        return 'number';
    }

    public function parseValueForType($value, BaseType $context) {
        return $value;
    }
}
