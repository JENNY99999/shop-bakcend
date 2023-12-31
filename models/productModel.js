const mongoose = require("mongoose");


var productSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
      trim: true,
    },
    slug: {
      type: String,
      // required: false,
      unique: true,
      lowercase: true,
    },
    description: {
      type: String,
      required: true,
    },
    price: {
      type: Number,
      required: true,
    },
    category: {
      type: String,
      // required: true,
    },
    brand: {
      type: String,
      // required: true,
    },
    quantity: {
      type: Number,
      // required: false,
    },
    sold: {
      type: Number,
      default: 0,
    },
    images: [
      {
        public_id: String,
        url: String,
      },
    ],

    color: [{ type: mongoose.Schema.Types.ObjectId, ref: "Color" }],


    tags: String,


  },
  { timestamps: true }
);


module.exports = mongoose.model("Product", productSchema);
