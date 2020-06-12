import React, { useState, useEffect } from 'react'
import '../CompStyles/Create.css'
import axios from 'axios'
import { Button } from '@material-ui/core';
import ButterToast, { Cinnamon } from 'butter-toast'
import {Link} from 'react-router-dom'
import CheckBoxIcon from '@material-ui/icons/CheckBox';
import CancelIcon from '@material-ui/icons/Cancel';

const Create = () => {

    useEffect(() => {

        return () => {
           ButterToast.dismissAll()
        }
    }, [])

    const [message, setMessage] = useState('')
    const [name, setName] = useState('');
    const [link, setLink] = useState(false);
    const [url, setUrl] = useState('')

    const submitCreateForm = e => {
        ButterToast.dismissAll()
        e.preventDefault();
        if (name.trim().length === 0 || message.trim().length === 0) {
            return ButterToast.raise({
                content: <Cinnamon.Crisp title="No Blank Fields"
                    content="Expecting name and a message!"
                    scheme={Cinnamon.Crisp.SCHEME_ORANGE}
                    icon={<CheckBoxIcon />}
                />
            })
        }
        else {
            axios.post('/create', {
                name,
                message
            }).then(res => {
                // console.log(res)
                ButterToast.raise({
                    content: <Cinnamon.Crisp title="Death Note"
                        content="Created death note successfully!"
                        scheme={Cinnamon.Crisp.SCHEME_GREEN}
                        icon={<CheckBoxIcon />}
                    />
                })
                setUrl(`/${res.data.user._id}/${res.data.user.name}`)
                setLink(true)
                setName('')
                setMessage('')
            })
                .catch(err => {
                    // console.log(err)
                    ButterToast.raise({
                        content: <Cinnamon.Crisp title="Death Note"
                            content="Something went wrong!"
                            scheme={Cinnamon.Crisp.SCHEME_RED}
                            icon={<CancelIcon />}
                        />
                    })
                    setName('')
                    setMessage('')
                }
                )
        }
    }

    return (
        <div className="create-form-container">
            <div className="death-img">
            </div>
            <h1>Death Note</h1>
            <form onSubmit={submitCreateForm} method="POST" className="create-form">
                <input
                    value={name}
                    onChange={(e) => setName(e.target.value.trim())}
                    autoComplete="off"
                    className="create-form-input"
                    placeholder="Death Note recipient (no spaces)"

                />
                <textarea
                    value={message}
                    onChange={e => setMessage(e.target.value)}
                    resize='off'
                    autoComplete="off"
                    className="create-form-input"
                    rows="6"
                    placeholder="Your last message to him/her..."
                />
                <p>NOTE : This note will not take effect unless the writer has the person's face in their mind when writing his/her name.</p>
                <Button type="submit" className="create-form-button" variant="contained">
                    Create
                </Button>
                <Link to={url} className="create-link" style={link ? { display: "block" } : { display: "none" }}>Here's your Link!</Link>
            </form>

        </div>
    )
}

export default Create
