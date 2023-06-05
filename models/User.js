import mongoose from "mongoose";

let schema = new mongoose.Schema({
  email: {type: String, required: true},
  password: {type: String, required: true},
  photo: {type: String, required: false},
  role: {type: Number, required: true},
  is_online: {type: Boolean, required: true},
  is_verified:{type: Boolean, required: true},
  verify_code:{type: String, required: true}
},{
  timestamps: true
})

let collection = 'users' //debe ser SIEMPRE en plural xq es un conjunto de recursos, documentos, etc y en lo posible en minuscula
let User = mongoose.model(collection, schema)

export default User