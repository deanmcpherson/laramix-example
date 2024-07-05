import React from "react";
import { Outlet } from "@laramix/laramix";


export default function About() {


    return <div style={{padding: '1rem', border: '1px solid #ddd'}}>
    <h2>About page</h2>
        <p>Outlet 👇</p>
        <div style={{border: '1px solid #ddd', padding: '1rem'}}>
        <Outlet />
        </div>
    </div>
}
