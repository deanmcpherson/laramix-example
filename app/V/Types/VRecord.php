<?php

namespace App\V\Types;

class VRecord extends BaseType {
    public function toTypeScript(): string
    {
        return 'any';
    }

    public function parseValueForType($value, BaseType $context) {
        return $value;
    }
}
