`<?php

use Illuminate\Http\Request;
use Inertia\Inertia;
use Spatie\LaravelData\Data;


class Response extends Data {
    public function __construct(public string $id, public string $hi) {}
};

$props = fn(Request $request): Response => Response::from([
    'id' => $request->route('item'),
    'hi' => 'dean'
]);

$goToHome = fn() => Inertia::location('/about');

?>`

import React from "react"

export default function Item({props, actions}) {
    console.log(actions)
    return <div>
        This is an item {props.id}

        Hi: {props.hi}
        <button onClick={() => actions.goToHome()}>Go home</button>
    </div>
}
