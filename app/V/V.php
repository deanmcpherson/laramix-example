<?php

namespace App\V;

use App\V\Types\VAny;
use App\V\Types\VArray;
use App\V\Types\VBigInt;
use App\V\Types\VBoolean;
use App\V\Types\VDTO;
use App\V\Types\VEnum;
use App\V\Types\VLiteral;
use App\V\Types\VNumber;
use App\V\Types\VObject;
use App\V\Types\VString;


class V {
    public function string() {
        return new VString();
    }

    public function literal() {
        return new VLiteral();
    }

    public function dto(string $className) {
        return new VDTO($className);
    }

    public function number() {
        return new VNumber();
    }

    public function boolean() {
        return new VBoolean();
    }

    public function bigInt() {
        return new VBigInt();
    }

    /**
     * @template T
     * @param $t extends array<string, BaseType>
     * @return VArray<T>
     */
    public function array($schema = new VAny()) {
        return new VArray($schema);
    }

    /**
     * @template T
     * @param $t extends array<string, BaseType>
     * @return VObject<T>
     */
    public function object(array $schema) {
        return new VObject($schema);
    }

    public function enum(...$args) {
        return new VEnum(...$args);
    }
}

