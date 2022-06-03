const mongoose = require('mongoose');
const config = require('config');
const db = config.get('mongoURI');

const connectDB = async () => {
    try {
        const conn = await mongoose.connect(db, {
            useNewURLParser: true,
            useUnifiedTopology: true
        })

        console.log(`Mongo DB connected: ${conn.connection.host}`)
    } catch (error) {
        console.error(error.message)
        // Exit process with failure
        process.exit(1)
    }

};

module.exports = connectDB