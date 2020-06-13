const express = require('express');
const PORT = process.env.PORT || 5000;
const cors = require('cors')
const path = require('path')
require('./db')
require('dotenv').config();
const router = require('./Routes/message')

const app = express();

app.use(cors());
app.use('/', router);

if (process.env.NODE_ENV === "production") {
    app.use(express.static("client/build"));
    app.get('*', (req, res) => {
        res.sendFile(path.resolve(__dirname, "client", "build", "index.html"));
    });
}

app.use(express.json());


app.listen(PORT);