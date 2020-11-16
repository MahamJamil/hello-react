import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';


const lakeList = [
    { id: "1", name: "Echo", trailhead: "Lake" },
    { id: "2", name: "Maud", trailhead: "Wrights" },
    { id: "3", name: "Cascade", trailhead: "Bayview" }
]

function App(lakes) {
    return ( <
            ul > {
                lakes.map(lake => ( < li > { lake } < /li>))} < /
                        ul >
                    )
                }

                ReactDOM.render( < App lakes = { lakeList }
                    / > ,
                    document.getElementById('root')
                );