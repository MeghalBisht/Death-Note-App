import React, { useState, useEffect } from 'react'
import '../../CompStyles/ReusableStyles/PageTwo.css'
import bulb2 from '../../images/bulb2.png'
import bulb3 from '../../images/bulb3.png'
import bulb4 from '../../images/bulb4.png'
import track1 from '../../tracks/track1.mp3'
import PageThree from './PageThree'

function PageTwo({user}) {

    let audio = new Audio(track1)
    
    useEffect(() => {
        return () => {
            audio.pause()
        }
    }, [])

    const [click, setClick] = useState(false)
    const [lightOff, setlightOff] = useState(false);

    const lightHandler = () => {
        setlightOff(true)
        setTimeout(() => {
            audio.play()
        }, 2600);
    }

    const setLink = () =>{
            audio.pause()
        setClick(true)
    }

    if (click) {
        return <PageThree user={user} audio={audio} />
    }

    else {

        return (
            <div className={`page-two-outer ${lightOff ? "dark" : "light"}`}>
                <div className="page-two-inner">
                    <div className="bulb-images">
                        <img className={lightOff ? "bulb-off" : "bulb-on"} src={bulb2} alt="light_source" />
                        <img className={lightOff ? "bulb-off" : "bulb-on"} src={bulb3} alt="light_source" />
                        <img className={lightOff ? "bulb-off" : "bulb-on"} src={bulb3} alt="light_source" />
                        <img className={lightOff ? "bulb-off" : "bulb-on"} src={bulb4} alt="light_source" />
                    </div>
                </div>
                <div className={lightOff ? "hide" : "light-btn"}>
        <button onClick={lightHandler}>Turn off the lights {user.name}</button>
                </div>
                <div className={lightOff ? "break-glass" : "hide"}>
                    <button onClick={setLink} className="page-three-enter">
                        Here! 
                </button>
                </div>

            </div>
        )
    }
}

export default PageTwo
