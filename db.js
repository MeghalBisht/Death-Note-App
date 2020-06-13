const mongoose = require('mongoose');
require('./models/user');
require('dotenv').config();


mongoose.model('User')


mongoose.connect(process.env.REACT_APP_MONGOURI, {
    useNewUrlParser: true,
    useUnifiedTopology: true
})

mongoose.connection.on('connected', () => {
    console.log('connected to mongoose');
})

mongoose.connection.on('error', err => {
    console.log('found errror while connecting to mongoose', err);
})