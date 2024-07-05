/* php */`
<?php

    use Illuminate\Http\Request;
    use Inertia\Inertia;
    use Spatie\LaravelData\Data;


    class Item extends Data {
        public function __construct(public string $itemId) {}
    }

    $props = fn(Request $request, $item): Item => Item::from(['itemId' => $request->query('hi') ?? $item]);

    $goToHome = fn() => Inertia::location('/');

?>
`
//`/* tsx */`

import { Outlet } from "@laramix/laramix"
import React from "react"

export default function Item({props, actions}: about.$item.Props) {
    return <div>
        <h3>about.$item</h3>
        This is an item {props.itemId} asds <button onClick={() => actions.goToHome()}>Go home (server driven redirect)</button>
        <br />
        Another outlet:

            <Outlet />

    </div>
}
