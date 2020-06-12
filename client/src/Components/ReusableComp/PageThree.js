import React, { useState } from 'react'
import Fire from '../ReusableComp/Fire'
import '../../CompStyles/ReusableStyles/PageThree.css'
import Letter from './Letter';

function PageThree({ audio, user }) {

    const [letter, setLetter] = useState(false);

    const deathBtn = () => {
        setLetter(true)
    }

    if (letter) {
        return <Letter user={user} letter={letter} />
    }

    else {

        return (
            <div className="page-three-container">
                <Fire />
                <div className="inner-container">
                    <div className="third-container-text">
                        <p>Celebrating</p>
                        <p>{user.name}'s</p>
                        <p>Last</p>
                        <p>day</p>
                        <button onClick={deathBtn} className="death-btn">Here's your death note!</button>
                    </div>
                </div>
            </div>
        )
    }
}

export default PageThree
