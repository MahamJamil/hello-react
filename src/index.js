import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import './index.css';

function App() {
    const [val, setVal] = useState("");
    const [val2, setVal2] = useState("");
    return ( <
        >
        <
        label >
        Favorite Phrase:
        <
        input value = { val }
        / > < /
        label > <
        br / >
        <
        label > Second Favorite Phrase: < input value = { val2 }
        /> < /
        label > < / >
    )
}

ReactDOM.render( < App / > ,
    document.getElementById('root')
);