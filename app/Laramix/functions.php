<?php

namespace App\Laramix;

use App\V\Types\BaseType;
use Closure;


function action(Closure $handler, ?BaseType $requestValidation = null, ?BaseType $responseValidation = null) {
   return new Action($handler, $requestValidation, $responseValidation);
}



function props(Closure $handler) {

}
