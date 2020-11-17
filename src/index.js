import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

const list = [1, 2, 3, 4, 5]
const lakeList = [
    { id: "1", name: "Echo", trailhead: "Lake" },
    { id: "2", name: "Maud", trailhead: "Wrights" },
    { id: "3", name: "Cascade", trailhead: "Bayview" }
]

function App({ lakes }) {
    return ( < div > {
            lakes.map(lake => ( <
                div key = { lake.id } >
                <
                h2 > { lake.name } < /h2> <
                p > Accessed by { lake.trailhead } < /p> < /
                div >
            ))
        } <
        /div>)
    }

    ReactDOM.render( < App lakes = { lakeList }
        / > ,
        document.getElementById('root')
    );