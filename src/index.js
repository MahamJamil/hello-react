import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

function Lake() {
    return ( <
        div >
        <
        h1 > Visit Jenny Lake! < /h1> < /
        div >
    )
}

function SkiResort() {
    return ( <
        div >
        <
        h1 > Visit Jackson Hole Mountain Resort! < /h1> < /
        div >
    )
}

function App(props) {
    if (props.season === 'summer') {
        return <Lake / >
    }
}

ReactDOM.render( < App season = "summer" / > ,
    document.getElementById('root')
);