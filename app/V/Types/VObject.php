<?php

namespace App\V\Types;

/**
 * @extends BaseType<array<string, BaseType<mixed>>
 * */
class VObject extends BaseType {

    /**
     * @param array<string, BaseType<mixed>> $schema
     * */
    public function __construct(protected array $schema)
    {

    }

    public function toTypeScript(): string
    {
        $schema = [];
        foreach ($this->schema as $key => $type) {
            $part = "$key: {$type->toTypeScript()}";
            if ($type->isOptional()) {
             $part .= "|undefined|null";
            }
            $schema[] = $part;
        }
        return '{' . implode(', ', $schema) . '}';
    }

    public function parseValueForType($value, BaseType $context) {

        if (!is_array($value)) {
            $context->addIssue(0, $this, "Not an array");
            return;
        }

        foreach ($this->schema as $key => $type) {
           if (!is_string($key)) {
                throw new \Exception('Keys must be strings');
           }
           if (!($type instanceof BaseType)) {
                throw new \Exception('Schema values inherit from the BaseType');
           }
        }
        $parsedValue = [];
        foreach ($this->schema as $key => $type) {
            if (!array_key_exists($key, $value)) {
                if (!$type->isOptional()) {
                    $context->addIssue(0, $this, "Required object key  \"$key\" not found");
                }
                continue;
            }
            $parsedValue[$key] = $type->parseValueForType($value[$key], $context);
        }
        return $parsedValue;
    }
}
