import mongoose, {Schema, model, Types} from "mongoose";

let schema = new Schema({
  name: {type: String, required: true},
  last_name: {type: String, required: false},
  city: {type: String, required: true},
  country: {type: String, required: true},
  date: {type: Date}, // por defecto si no aclaro que es requererido es false
  photo: {type: String, required: true},
  cover_photo: {type: String, required: false},
  active: {type: Boolean, required: true},
  user_id: {
    type: Types.ObjectId, //tipo de datos de mongoose para referenciar datos de una coleccion con datos de otra coleccion, este caso la coleccion de autores con la coleccion de usuarios.
    ref: 'users', //el ref nos permite hacer referencia a otro modelo con el fin de crear relaciones con otros modelos
    required: true
  } 
},{
  timestamps: true //nos permite crear dos propiedades de tipo date, una va a ser la fecha de creacion y la otra la fecha de ultima actualizacion.
})

let collection = 'authors'

let Author = model(collection, schema)
export default Author