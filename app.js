const express = require('express');
const PORT = process.env.PORT || 5000;
const cors = require('cors')
const path = require('path')
require('./db')
require('dotenv').config();
const router = require('./Routes/message')

const app = express();

<<<<<<< HEAD
app.use(cors());
app.use('/', router);

if (process.env.NODE_ENV === "production") {
    app.use(express.static("client/build"));
    app.get('*', (req, res) => {
=======
app.use(cors())
app.use(express.json())
app.use('/', router)

if (process.env.NODE_ENV === "production") {
    app.use(express.static("client/build"));
    app.get("/*", (req, res) => {
>>>>>>> db76d88ba8c409cca59620e815ddeb1493350585
        res.sendFile(path.resolve(__dirname, "client", "build", "index.html"));
    });
}

<<<<<<< HEAD
app.use(express.json());


app.listen(PORT);
=======
app.listen(PORT)
>>>>>>> db76d88ba8c409cca59620e815ddeb1493350585
