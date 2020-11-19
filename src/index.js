import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

function GithubUser(login) {

}

function App() {
    return <GithubUser login = "moonhighway" / >
}

ReactDOM.render( < App / > ,
    document.getElementById('root')
);