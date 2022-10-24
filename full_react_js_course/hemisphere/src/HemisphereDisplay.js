import React from 'react';
import northern from './images/northern.jpeg'
import southern from './images/southern.jpeg'
import './Hemisphere.css'

const hemisphereConfig = {
    Northern: {
        text: 'Northern Hemisphere!',
        image: northern
    },
    Southern: {
        text: 'SOUTHERN HEMISHPERE',
        image: southern
    }
}

const HemisphereDisplay = ({latitude}) => {
    const hemisphere = latitude > 0 ? 'Northern' : 'Southern';
    const { text, image } = hemisphereConfig[hemisphere]

    return(
        <div className={hemisphere} >
            <div className='ui raised text segment'>
                <div className='image'>
                    <img src={ image } alt="hemisphere picture" />
                </div>
                <div className='ui teal bottom attached label'>
                    <div>Hey, you're in the { text }!</div>
                </div>
            </div>
        </div>
    )
}

export default HemisphereDisplay;