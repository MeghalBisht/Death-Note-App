import React from 'react'
import '../CompStyles/About.css'
import Loader from './ReusableComp/Loader'

function About() {
    return (
        <div className="about-container">

            <p>
                Inspired by the famous anime "DEATH NOTE", here is a small create death note web application to pen down a death note for your friend.
            </p>
            <p>
                Let your friend look at the death story you penned for him/her with a super story coming his way!
            </p>
            <p>
                <a target="_blank" rel="noopener noreferrer" href="https://meghalbisht.github.io/Meghal-Resume/"> Developed by : Meghal Bisht </a>
            </p>
            <Loader/>
        </div>
    )
}

export default About
