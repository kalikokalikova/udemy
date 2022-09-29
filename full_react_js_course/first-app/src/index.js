import React from 'react';
import ReactDOM from 'react-dom';


function getButtonText() {
    return "I'm text delivered from a function!"
}

// create function-based component
const App = () => {
    const buttonText = {text: "Hello World"}

    return( // a bunch of JSX
        <div>
            <div>Hello world</div>
            <div>
                              {/* make sure to use className instead of js keyword class */}
                <label htmlFor="name" className="label">enter an email</label>
                <input id="name" type="text" />
                <button style={{ backgroundColor: 'green', color: 'white' }}>
                              {/* this is a js object ^ */}
                    { getButtonText() }
                    {/* ^ This references a js function (variable) defined above */}
                </button>
            </div>
            <div>
                <button>
                    { buttonText.text }
                    {/* ^ This references a js object */}
                </button>
            </div>
        </div>
    )
}

// render component into the dom using reactDOM library
ReactDOM.render(
    <App />, // component
    document.querySelector('#root') // DOM element to render into
)

