import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

let city = {
    name: 'Islamabad',
    country: 'Pakistan'
};

function Hello() {
    return <h1 > Welcome to React! < /h1>
}

ReactDOM.render( < h1 id = 'heading' <
    Hello > < /Hello>,
    document.getElementById('root')
);