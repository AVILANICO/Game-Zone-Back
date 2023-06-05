import Manga from "../../models/Manga.js"

let read = async(req, res, next) => { // la funcion controladora debe ser asincrona para poder esperar la respuesta de mongo 
  try                             //utilizo try cath para intentar algo y agarrar los errores q puedan surgir 
  {
  let all = await Manga.find()       //utilizo find para buscaR todos los recursos del modelo que es manga
  return res.status(200)                   //configuro la respuesta que le tengo que enviar al cliente (front)
    .json({
        Manga: all
      })
    }
  catch(error){
    next(error)
  }
}

export default read