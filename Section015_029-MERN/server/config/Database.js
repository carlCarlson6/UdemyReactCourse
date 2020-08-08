const mongoose = require('mongoose');
require('dotenv').config({path:'env/dev.env'});

const connectDB = async () => {
    try {
        await mongoose.connect(process.env.MONGODB, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            useFindAndModify: false
        });
        console.log('connected to db')
    } catch(error) {
        console.log(error);
        process.exit(1); //stops the app
    }
}

module.exports = connectDB;