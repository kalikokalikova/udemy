import React from 'react';
import ReactDOM from 'react-dom';

// create function-based component
const App = () => {
    return(
        <div>Hello world</div>
    )
}

// render component into the dom using reactDOM library
ReactDOM.render(
    <App />, // component
    document.querySelector('#root') // DOM element to render into
)