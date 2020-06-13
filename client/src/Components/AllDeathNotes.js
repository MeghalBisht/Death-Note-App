import React, { useState, useEffect } from 'react'
import ButterToast, { Cinnamon } from 'butter-toast'
import CancelIcon from '@material-ui/icons/Cancel';
import '../CompStyles/AllDeathNotes.css'
import axios from 'axios';
import Fire from './ReusableComp/Fire'
import { Link } from 'react-router-dom'

function AllDeathNotes() {

    const [users, setUsers] = useState([])
    const [loading, setLoading] = useState(true)

    useEffect(() => {

        axios.get('/users/data')
            .then(res => {
                setUsers(res.data)
                // console.log(res.data);
                
                setLoading(false)
            })
            .catch(err => {
                setLoading(false)
                return ButterToast.raise({
                    content: <Cinnamon.Crisp title="No data found"
                        content="No death note found!"
                        scheme={Cinnamon.Crisp.SCHEME_RED}
                        icon={<CancelIcon />}
                    />
                })
            })

        return ButterToast.dismissAll()

    }, [])

    if (loading) {
        return <h1>Loading</h1>
    }
    else
        return (
            <div className="all-notes-container">
                <Fire className="fire" />
                <div className="all-notes">
                    {
                        users.map((user, index) => (
                            <p key={index}>
                                <Link className="all-links" to={`/${user._id}/${user.name}`}>
                                    <span className="index"> {index + 1}.</span> {user.name}'s Death Note
                                </Link>
                            </p>
                        ))
                    }
                    <Link to="/create" className="add-note">Add Yours</Link>
                </div>
            </div>
        )
}
export default AllDeathNotes
