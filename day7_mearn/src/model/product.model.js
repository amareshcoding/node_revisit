const mongoose = require('mongoose');

const productSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    brand: { type: String, required: true },
    price: { type: Number, required: true },
    image: { type: String, required: true },
    desc: { type: String, required: true },
  },
  {
    timestamps: true,
    versionKey: false,
  }
);

const Product = mongoose.model('product', productSchema);

module.exports = Product;
