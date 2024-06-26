<?php
namespace App\Data;

use Spatie\LaravelData\Data;

class ExampleDTO extends Data {
    public function __construct(
        public string $name,
        public int $age,
        public ?Another $another
    ) {}

    public static function fromArray(array $data) {
        return new self(
            name: $data['name'],
            age: $data['age'],
            another: ($data['another'] ?? null) ? Another::from($data['another']) : null
        );
    }
}
