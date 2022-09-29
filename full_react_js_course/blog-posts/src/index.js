import React from 'react';
import ReactDOM from 'react-dom';
import SingleComment from './components/SingleComment';
import garbo from './images/garbo.jpg';
import baldie from './images/headshot.jpg';
import strawberry from './images/strawbeer.jpg';



const App = () => {
    return(
        <div className="ui comments">
            <SingleComment name="Garbo" time="5:00pm" commentText="Fate has us meet from a thousand miles away." avatar={ garbo } />
            <SingleComment name="Strawberry Blonde" time="6:00pm" commentText="Love the house with its crows (on the roof)." avatar={ strawberry }/>
            <SingleComment name="POOOOOP" time="7:00pm" commentText="Don’t be afraid of going slow, just be afraid of stopping/standing still." avatar={ baldie }/>
        </div>
    )
}

ReactDOM.render(
    <App />,
    document.querySelector('#root')
)