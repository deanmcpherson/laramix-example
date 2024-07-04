<?php

use function Laramix\Laramix\{action, v};

// $props is magical - the middleware affects all actions in this file.
$props = action(
    middleware: ['auth'],
);

$loadThings = action(
    responseType: v()->infer([
        'test' => 123
    ]),
    handler: function(): array {
    return [
        'test' =>123
    ];
});
?>
