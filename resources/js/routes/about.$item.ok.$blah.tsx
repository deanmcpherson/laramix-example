/* php */`<?php

use Inertia\Inertia;
use function Laramix\Laramix\action;
use function Laramix\Laramix\v;

$props = action(
    responseType: v()->infer([
        'item' => v()->number(),
        'blah' => v()->number(),
    ]),
    handler: fn(int $item, int $blah) => [
        'item' => $item,
        'blah' => $blah * 5,
    ]
);

$goToHome = fn() => throw new \Exception("Hello I'm an exception");

?>`
//`/* tsx */`

import React from "react"


export default function Item({props, actions}: about.$item.ok.$blah.Props) {

    return <div style={{border: '1px solid #ddd', padding: '1rem'}}>
        <h3>about.$item.ok.$blah</h3>
        This is an item {props.item}, with blah * 5 {props.blah} ok? <button onClick={() => actions.goToHome()}>Go home (throw error)</button>
    </div>
}

