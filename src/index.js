import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';


function Hello(props) {
    console.log(props);
    return ( <
        div >
        <
        h1 > Welcome to React! < /h1>  <
        p > Let 's build something cool!</p>< /
        div >
    );
}

ReactDOM.render( < Hello library = 'React' / > ,
    document.getElementById('root')
);