import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import './index.css';

function App({ name }) {
    return ( <
        div >
        <
        h1 > Status < /h1> < /
        div >
    );


}

ReactDOM.render( < App / > ,
    document.getElementById('root')
);

const [, , fruit] = [
    "popcorn",
    "pretzels",
    "pineapples"
];

console.log(fruit);