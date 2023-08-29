const mongoose = require("mongoose")

const productSchema = new mongoose.Schema({
    title: String,
    description: String,
    price: String,
    category: String,
    imageUrl: String,
    userId: String
});

module.exports = mongoose.model("products",productSchema);

