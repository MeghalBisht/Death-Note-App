import React, { useState } from 'react'
import ancientPaper from '../../images/ancientPaper.jpg'
import '../../CompStyles/ReusableStyles/Letter.css'
import bye from '../../images/bye.png'
import Fire from './Fire'

function Letter({ letter, user }) {

    const [byeImg, setByeImg] = useState(false)

    if (byeImg) {
        return (
            <div className="bye-container">
                <Fire />
                <img src={bye} className="bye-img" alt="bye" />
                <h1>R.I.P {user.name}</h1>
            </div>
        )
    }
    else {

        return (
            <div className="letter-container">

                <div className="note-container">
                    <img src={ancientPaper} className={`letter ${letter ? "showLetter" : "hideLetter"}`} alt="ancient_page" />
                    <p className="note-text">
                        {user.message}
                        <button onClick={() => setByeImg(true)} className="bye-btn">Say Goodbye</button>
                    </p>
                </div>
            </div>
        )
    }
}

export default Letter
