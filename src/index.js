import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

let city = {
    name: 'Islamabad',
    country: 'Pakistan'
};

ReactDOM.render( < h1 > Hello from { city.name }, { city.country }! < /h1>,
    document.getElementById('root')
);