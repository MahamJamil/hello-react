import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import './index.css';

function App({ name }) {
    const [status, setStatus] = useState("Open")
    return ( <
        div >
        <
        h1 > Status: { status } < /h1> < /
        div >
    );


}

ReactDOM.render( < App / > ,
    document.getElementById('root')
);