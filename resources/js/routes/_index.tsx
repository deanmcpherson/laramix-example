`<?php

use Inertia\Response;

$props = fn() => [
    'name' => 'Dean McPherson'
];

$alert = function(int $hello): int {
    return $hello * 4;
}

?>`


import React from "react"
export default function Home({props, actions}) {
    return <div>
        Welcome to my homepage!
    </div>

};
