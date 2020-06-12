import React from 'react'
import '../CompStyles/Enter.css'
import { Link } from 'react-router-dom'
function Enter() {
    return (
        <div className="enter-container">
            <div className="enter-head">
                <h1>Good to see you...</h1>
                <h3>for the last time</h3>
            </div>
            <div className="enter-tail">
                <h2><Link to="/5ee3a3e801d8fa03642b0bd1/GamerGhost">Take a trial</Link></h2>
                <h2><Link to="/create">Create my Death Note</Link></h2>
                <h2><Link to="/users">View death notes created so far</Link></h2>
                <h2><Link to="/about">About</Link></h2>
            </div>
        </div>
    )
}

export default Enter
