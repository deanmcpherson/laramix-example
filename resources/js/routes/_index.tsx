 /* php */`
<?php
use function Laramix\Laramix\{v, action};

use App\Data\ExampleDTO;

$props = action(
    handler: fn() => [
        'test' => 'This is live',
        'test2' => []
    ],
    responseType: v()->infer([
        'test' => 'This is cached',
        'test2' => v()->array(
            v()->dto(ExampleDTO::class)
        )
    ]),

);

$test =  function(string $exampleInput): string {
        return 'test asdas';
    };

?>
`;
// `/* tsx */`

import { router } from "@inertiajs/react";
import { useActions } from "@laramix/laramix";

import React from "react"
export default function Home({props, actions}:  _index.Props) {

    const [test, setTest] = React.useState<string>('');
    console.log(test)
   return <div style={{border: '1px solid #ddd', padding: '1rem'}}>
        <h2 onClick={() => actions.test({exampleInput: 'test'}).then(res => setTest(res.data))}>Index page</h2>
        Welcome to my homepage! {props.test}
        Result of test: {test}
    </div>

};
