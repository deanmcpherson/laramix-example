 /* php */`
<?php
use function Laramix\Laramix\{v, action};

use App\Data\ExampleDTO;

$props = action(
    responseType: v()->infer([
        'test' => 'This is cached',
        'test2' => v()->array(
            v()->dto(ExampleDTO::class)
        )
    ]),
    handler: fn() => [
        'test' => 'This is live',
        'test2' => []
    ]
);
$test = function(string $testman): string {
    return 'test';
}
?>
`;
// `/* tsx */`


import React from "react"
export default function Home({props, actions}:  _index.Props) {
    console.log(props.test2)

    actions.test({
        testman: '123'
    })
   return <div style={{border: '1px solid #ddd', padding: '1rem'}}>
        <h2>Index page</h2>
        Welcome to my homepage! {props.test}
    </div>

};
