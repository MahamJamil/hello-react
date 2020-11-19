import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import './index.css';

function CheckBox() {
    const [checked, setChecked] = useState(false)
    return ( <
        >
        <
        input type = "checkbox" / >
        <
        />
    )

}

ReactDOM.render( < CheckBox / > ,
    document.getElementById('root')
);