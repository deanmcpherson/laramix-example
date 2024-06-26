<?php

namespace App\Data;

use Spatie\LaravelData\Data;

class Another extends Data {
    public function __construct(
        public string $id,
        public int $increment,
    ) {}
}
