import React, { useState, useEffect } from 'react'
import '../../CompStyles/ReusableStyles/PageOne.css'
import Fire from './Fire'
import axios from 'axios'
import PageTwo from './PageTwo'
import { withRouter } from 'react-router';
import Loader from './Loader'
import ButterToast, { Cinnamon } from 'butter-toast'
import CancelIcon from '@material-ui/icons/Cancel';

function PageOne({ match }) {

    const [id, setId] = useState("")
    const [user, setUser] = useState({
        name: "",
        message: ""
    })

    useEffect(() => {

        if (match.params.id) {
            setId(`/${match.params.id}/${match.params.name}/data`)
        }

        axios.get(`/${match.params.id}/${match.params.name}/data`)
            .then(res => {
                setUser({
                    name: res.data.name,
                    message: res.data.message
                })
            })
            .catch(err => {
                return ButterToast.raise({
                    content: <Cinnamon.Crisp title="No User Found"
                        content="No death note found!"
                        scheme={Cinnamon.Crisp.SCHEME_RED}
                        icon={<CancelIcon />}
                    />
                })
            })

            return ButterToast.dismissAll()
    }, [])

    const [click, setClick] = useState(false)


    if (!user.name) {
        return (
            <div className="loader-page-one">
                <h2>Hold a sec.. Coming after you</h2>
                <Loader />
            </div>
        )
    }

    else {

        if (click) {
            return <PageTwo user={user} />
        }
        else {
            return (
                <div className="page-one-container">
                    <Fire />
                    <h1>This is a death note for {user.name}</h1>
                    <div className="notebook">
                        <div className="notebook-page"></div>
                        <div className="page-two-enter" onClick={() => setClick(true)}>Enter {user.name}</div>
                    </div>
                </div>
            )
        }
    }
}

export default withRouter(PageOne)
