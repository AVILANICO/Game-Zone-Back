import Game from "../../models/Game.js"
import Company from "../../models/Company.js"


let read = async(req, res, next) => { // la funcion controladora debe ser asincrona para poder esperar la respuesta de mongo 
  try                             //utilizo try cath para intentar algo y agarrar los errores q puedan surgir 
  {
  let all = await Game.find.populate('company_id', 'name')()       //utilizo find para buscaR todos los recursos del modelo que es Game
  return res.status(200)                   //configuro la respuesta que le tengo que enviar al cliente (front)
    .json({
        Game: all
      })
    }
  catch(error){
    next(error)
  }
}

export default read