const mongoose = require('mongoose')
require('dotenv').config()

module.exports = () => {
    mongoose.connect(process.env.MONGOOSE_URL, {useNewUrlParser: true,useUnifiedTopology: true })
    mongoose.connection.on("connected", () => {
        console.log("Database connected")
    })
};