import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import './index.css';

function App({ name }) {
    const [manager, setManager] = useState("Alex")
    const [status, setStatus] = useState("Open")
    return ( <
        >
        <
        div >
        <
        h1 > Manager on Duty: { manager } < /h1> <
        button onClick = {
            () => setManager("Rachel") } > New Manager < /button> < /
        div >
        <
        div >
        <
        h1 > Status: { status } < /h1>   <
        button onClick = {
            () => setStatus("Open")
        } > Open < /button >  <
        button onClick = {
            () => setStatus("Back in 5 mins")
        } > Back < /button > <
        button onClick = {
            () => setStatus("Closed")
        } > Closed < /button> < /
        div >
        <
        />
    );


}

ReactDOM.render( < App / > ,
    document.getElementById('root')
);