const mongoose = require("mongoose");

async function connectdb() {
    try {
        const connectmongo = await mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/booksearch", { useUnifiedTopology: true, useNewUrlParser: true, useCreateIndex: true })
        console.log("Connected to Mongo DB")
    } catch (err) {
        console.log(err);
    }
}

module.exports = connectdb;