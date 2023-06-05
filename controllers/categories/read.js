import Category from '../../models/Category.js'

//la funcion controladora debe ser asincrona para poder esperar la respuesta de mongo
//utilizo la sintaxis de try/catch para intentar algo y catchear los errores
//utilizo el metodo find para buscar los recursos del modelo
//configuro la respuesta que le tengo que enviar al cliente (front) 

let read = async(req, res, next) => { 
  try{        
    let all = await Category.find()
    return res.status(200)
        .json({
          categories: all
        })
  }catch(error){
    console.log(error);
    return res.status(400)
      .json({
        error: "ocurrió un error wachin!"
      })
  }
}

export default read

