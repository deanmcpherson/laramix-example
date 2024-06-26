<?php

namespace App\V\Types;

/**
 * @extends BaseType<int>
 * */
class VBigInt extends BaseType {
    public function parseValueForType($value, BaseType $context) {
        if (!is_int($value)) {
            throw new \Exception('Value is not an integer');
        }
        return $value;
    }

    public function toTypeScript(): string
    {
        return 'number';
    }
}
