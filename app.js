const express = require('express');
const PORT = process.env.PORT || 5000;
const cors = require('cors')
const path = require('path')
const router = express.Router();
const mongoose = require('mongoose');
const User = mongoose.model("User");
var ObjectID = require('mongoose').Types.ObjectId
require('./db')
require('dotenv').config();

const app = express();
app.use(cors())
app.use(express.json())



router.get('/users', (req, res) => {

    User.find((err, users) => {
        if (!err)
            return res.status(200).send(users)
        else
            return res.status(422).send({ message: "Something went wrong" })
    })

})

router.get('/:id/:name', (req, res) => {
    if (!ObjectID.isValid(req.params.id))
        return res.status(400).send(`no record with given id: ${req.params.id}`)
    else {
        User.findById(req.params.id)
            .then(user => {
                return res.status(200).send(user)
            })
            .catch(err => {
                return res.status(422).send(err)
            })
    }
})



if (process.env.NODE_ENV === "production") {
    app.use(express.static("client/build"));
    app.get("*", (req, res) => {
        res.sendFile(path.resolve(__dirname, "client", "build", "index.html"));
    })
}


router.post('/create', (req, res) => {
    const { name, message } = req.body;
    if (!message || !name)
        return res.status(422).json({ error: "All fields are required" })
    const newUser = new User({
        name,
        message
    })

    newUser.save()
        .then(user =>
            res.status(200).json({ message: "received your message!", user }))
        .catch(err => {
            res.status(422).json({ message: "Something went wrong!" })
        })
})


app.listen(PORT)