import mongoose from "mongoose"

//cada SCHEMA se asigna a una coleccion de MongoDB y define la forma de los documentos dentro de esa colección.
let schema = new mongoose.Schema({
  name: {type: String, required: true},//required valida que el valor del campo al intentar cargarlo en la base de datos no sea null.
  color: {type: String, required: true},//Type le indica a mongoose que queremos definir el tipo de dato para las propiedades del documento.
  hover: {type: String, required: true},
  description: {type: String, required: true},
  cover_photo: {type: String, required: true},
  character_photo: {type: String, required: true}
},{
  timestamps: true
})

let collection = 'categories'

let Category = mongoose.model(collection, schema) //crear y añadir un nuevo modelo en la base de datos de MongoDB
//el metodo requiere de dos parametros, una coleccion y un schema.
//el nombre del modelo se escribe con PascalCase (Category) mientras que la collection se escribe con minuscula y en plural.

export default Category
