`<?

use Spatie\LaravelData\Data;
use function App\Laramix\action;

class Props extends Data {
    public bool $loggedIn;
    public string $test;
}


$props = fn(): Props => Props::from([
    'loggedIn' => !!auth()->id(),
    'test' => '321'
]);

$requestShape = v()->object([
    'email' => v()->string()->email(),
    'number' => v()->number()->optional(),
    'password' => v()->string(),
    'props' => v()->dto(Props::class),
]);

$login = action(
    requestValidation: $requestShape,
    handler: function($email, $number, $password, $props) {
        auth()->loginUsingId(1);
        return back(303);
    }
);


$logout = function() {
    auth()->logout();
    return back(303);
};

?>`;

import { Outlet } from "../Laramix";
import React from "react";

export default function Root({
    props,
    actions
}: {
    actions: _root.actions;
    props: _root.Props;
}) {
    return (
        <div>
            Root layout. Logged in ?{" "}
            {props.loggedIn ? (
                <button onClick={() => actions.logout()}>log out</button>
            ) : (
                <button onClick={() => actions.login({email: 'test', password: 'test123', number: 123, props: {loggedIn: false, test: 'hi there'}})}>
                    login
                </button>
            )}
            <Outlet />
        </div>
    );
}
