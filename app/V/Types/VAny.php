<?php

namespace App\V\Types;

/**
 *  extends BaseType<mixed>
 */
class VAny extends BaseType {
    public function toTypeScript(): string
    {
        return 'any';
    }

    public function parseValueForType($value, BaseType $context) {
        return $value;
    }
}
