import React from 'react'
import '../../CompStyles/ReusableStyles/Loader.css'

function Loader() {
    return (
        <div className="halloween">
            <div className="head">
                <div className="skull">
                    <div className="eyes">
                        <div className="eye eye-left"></div>
                        <div className="eye eye-right"></div>
                    </div>
                </div>
            </div>
            <div className="body"></div>
            <div className="legs"></div>
        </div>
    )
}

export default Loader
