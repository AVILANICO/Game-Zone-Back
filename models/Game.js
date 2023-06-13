import mongoose from "mongoose";

let schema = new mongoose.Schema({
  author_id:{type: mongoose.Types.ObjectId, ref: 'authors'},
  company_id:{type: mongoose.Types.ObjectId,ref: 'companies'},
  title: {type: String, required: true},
  cover_photo: {type: String, required: false},
  description: {type: String, required: true},
  price:{type: String, required: false},
  gameplay:{type: String, required: false},
  category_id:{type: mongoose.Types.ObjectId,ref: 'categories', required: true}
},
{
  timestamps: true
})

let collection = 'games'

let Game = mongoose.model(collection, schema)
export default Game