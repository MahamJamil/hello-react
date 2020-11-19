import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

function Lake() {
    return ( <
        h1 > Lake! < /h1> 
    )
}

function SkiResort() {
    return ( <
        h1 > Ski Resort! < /h1> 
    )
}

function App({ name }) {
    return ( <
        div >
        <
        h1 > Status < /h1> <
        /div>
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