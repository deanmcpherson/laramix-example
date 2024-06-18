
`<?
use Inertia\Inertia;
use Spatie\LaravelData\Data;

/** @typescript */
class RootRouteProps extends Data {
    public bool $loggedIn;
    public string $test;
}

$props = fn(): RootRouteProps => RootRouteProps::from([
    'loggedIn' => !!auth()->id(),
    'test' => '321'
]);

$login = function(int $number) {

    auth()->loginUsingId(1);
    return Inertia::location('/about');
};


$logout = function() {
    auth()->logout();
    return back(303);
};

?>`

import { Outlet } from "../Laramix"
import React from "react"
export default function Root({props, actions}: {
    actions: any,
    props: LaramixRoute.root.RootRouteProps
}) {

    props.test;

    return <div>
        Root layout. Logged in ? {props.loggedIn ? <button onClick={() =>actions.logout()}>log out</button> : <button onClick={() => actions.login({number: 123})}>login</button>}
        <Outlet />
    </div>

};
