const mongoose = require('mongoose');

async function connectDb() {
    try {
        await mongoose.connect(process.env.MONGO_URI);
        console.log('Connected to database');
    } catch (err) {
        console.error(err);
        process.exit(1);
    }
}

module.exports = connectDb;