const mongoose = require('mongoose');

const connectDB = async () => {
    try {
        const conn = await mongoose.connect(process.env.MONGO_URI);
        console.log(`MongoDB Connected: ${conn.connection.host}`);
    } catch (error) {
        console.error(`Error: ${error.message}`);
        // In serverless environments, we don't want to exit the process
        // but we want to log the error so we can see it in Vercel logs.
    }
};

module.exports = connectDB;
