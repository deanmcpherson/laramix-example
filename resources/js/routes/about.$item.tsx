`<?php

use Illuminate\Http\Request;
use Inertia\Inertia;
use Spatie\LaravelData\Data;

class Props extends Data {
    public function __construct(public string $id) {}
};

class Item extends Data {
    public function __construct(public string $itemId) {}
}

$props = fn(Request $request, $item): Item => Item::from(['itemId' => $item]);

$goToHome = fn() => Inertia::location('/about');

?>`

import React from "react"



export default function Item({props, actions}: {props: about.$item.Props, actions: any}) {
    console.log(actions)
    return <div>
        This is an item {props.id}


        <button onClick={() => actions.goToHome()}>Go home</button>
    </div>
}
