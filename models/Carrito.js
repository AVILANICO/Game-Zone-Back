import mongoose from "mongoose";

let schema = new mongoose.Schema({

  user_id: {type: mongoose.Types.ObjectId, ref: 'users', required: true},
  product_id: {type: mongoose.Types.ObjectId, ref: 'games', required: true},
  title: {type: String, required: true},
  cover_photo: {type: String, required: false},
  category_id:{type: mongoose.Types.ObjectId,ref: 'categories', required: true},
  price:{type: Number, required: true},
  quantity:{type: Number, required: true}
},
{
  timestamps: true,
  versionKey: false
})

let collection = 'carrito'

let Carrito = mongoose.model(collection, schema)
export default Carrito