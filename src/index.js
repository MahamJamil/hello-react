import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

let city = {
    name: 'Islamabad',
    country: 'Pakistan'
};

function Hello() {
    return <h1 > Welcome to React < /h1>
}

ReactDOM.render( < h1 id = 'heading'
    className = 'cool-text' > Hello from { city.name }, { city.country }! < /h1>,
    document.getElementById('root')
);