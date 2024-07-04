/* php */ `
<?

use function Laramix\Laramix\{v, action};

$props = action(
   //middleware: ['guest'],
    responseType: v()->object([
        'loggedIn' => v()->boolean()
    ]),
    handler: function() {
        return [
            'loggedIn' => session()->has('fakeLoggedIn')
        ];
    }
);

$login = action(
    requestType:  v()->object([
        'name' => v()->string()->optional(),
        'email' => v()->string()->rules('email')->default('hi@there.com'),
        'password' => v()->string()
    ]),
    handler: function($email, $name, $password) {
        session()->put('fakeLoggedIn', true);
        return back(303);
    }
);

$logout = action(
    handler: function() {
        session()->forget('fakeLoggedIn');
        return back(303);
    });
?> `;
// /* tsx */`

import { Outlet, Link } from "@laramix/laramix";
import React from "react";

export default function Root({ props, actions }: _root.Props) {
    return (
        <div
            style={{
                padding: "1rem",
                fontFamily:
                    'ui-sans-serif, -apple-system, BlinkMacSystemFont, "Segoe UI Variable Display", "Segoe UI", Helvetica, "Apple Color Emoji", Arial, sans-serif, "Segoe UI Emoji", "Segoe UI Symbol"',
                border: "2px solid #ddd",
            }}
        >
            <h1>Root layout</h1>
            Root layout. Logged in ?{" "}
            {props.loggedIn ? (
                <button onClick={() => actions.logout()}>log out</button>
            ) : (
                <button
                    onClick={() =>
                        actions.login({
                            email: "test@test.com",
                            password: "test123",
                            name: "hey there",
                        })
                    }
                >
                    login
                </button>
            )}
            <div style={{display: 'flex', gap: '.5rem', margin: '1rem 0'}}>
            <Link href="/">index</Link>
            <Link href="/about">/about (index)</Link>
            <Link href="/about/asdsad">/about/$item</Link>
            <Link href="/about/1/ok/2">/about/$item/ok/$blah</Link>
            </div>

            <Outlet />
        </div>
    );
}
