`<?php

use Illuminate\Http\Request;
use Inertia\Inertia;
use Spatie\LaravelData\Data;

class Props extends Data {
    public function __construct(public string $id) {}
};

class Item extends Data {
    public function __construct(
        public string $id,
        public string $name
    ) {
    }
}

$props = fn(Request $request, \App\Models\User $item, int $blah): Item => dd($item, $blah);


$goToHome = fn(Data $item) => Inertia::location('/about');

?>`

import React from "react"


interface Props extends about.$item.ok.$blah.Props {};
interface Actions extends about.$item.ok.$blah.actions {};

export default function Item({props, actions}: {props: Props, actions: Actions}) {

    return <div>
        This is an item {props.id}


        <button onClick={() => actions.goToHome({item: {id: 123, name: 321}})}>Go home</button>
    </div>
}

