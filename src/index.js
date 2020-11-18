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

function App({ names }) {
    return ( <
        >
        <
        h1 > { names } < /h1> <
        Lake / >
        <
        SkiResort / >
        <
        />
    );


}

ReactDOM.render( < App name = "React" / > ,
    document.getElementById('root')
);