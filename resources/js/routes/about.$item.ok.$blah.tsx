/* php */`<?php

use Inertia\Inertia;
use function Laramix\Laramix\action;
use function Laramix\Laramix\v;

$props = action(
    responseType: v()->infer([
        'item' => v()->number(),
        'blah' => v()->any(),
    ]),
    handler: fn(int $item, string $blah) => [
        'item' => $item,
        'blah' => $blah * 5,
    ]
);

$goToHome = fn() => throw new \Exception("Hello I'm an exception");

?>`
//`/* tsx */`

import React from "react"


export default function Item({props, actions}: about.$item.ok.$blah.Props) {

    return <div>
        <h3>about.$item.ok.$blah</h3>
        This is an item {props.item} ok? <button onClick={() => actions.goToHome()}>Go home (throw error)</button>
    </div>
}

