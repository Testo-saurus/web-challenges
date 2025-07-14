import mongoose from "mongoose"; //the lib is an object
//
//
// // / The mongoose object contains:
// mongoose = {
//   Schema: function() { ... },           // Constructor for schemas
//   model: function() { ... },            // Creates models
//   connect: function() { ... },          // Connects to database
//   connection: { ... },                  // Connection object
//   models: { ... },                      // Registry of all models
//   Types: { ... },                       // MongoDB data types
//   // ... many more properties and methods
// }

const { Schema } = mongoose; // thats why we can use object destucturing

const productSchema = new Schema({
  // the Schema constructor expects an Object as its argument
  name: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  currency: {
    type: String,
    required: true,
  },
});

const Product =
  mongoose.models.Product || mongoose.model("Product", productSchema);

export default Product;
