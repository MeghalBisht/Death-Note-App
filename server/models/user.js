const mongoose = require('mongoose');

const userMsg = new mongoose.Schema({
    name:{
        type: String,
        required: true
    },
    message:{
        type: String,
        required: true
    }
})

mongoose.model('User', userMsg)