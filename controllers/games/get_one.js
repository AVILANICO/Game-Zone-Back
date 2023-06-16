import Game from "../../models/Game.js";
import Author from '../../models/Author.js'

let get_one= async(req,res,next)=>{
  try {
      let {id} = req.params
      //el metodo find es como el filter de JS, siempre devuelve un array. Recibe un objeto con condiciones y los selectores
      let one = await Game.findById(id,'-_id -createdAt -updatedAt -company_id  -__v')
      //el populate DECODIFICA la propiedad y me devuelve el objeto con los selectores pedidos.
      .populate('category_id','name _id')
      .populate('author_id','name -_id')
      .populate('company_id', 'name logo -_id')
    if(one){
      return res.status(200).json({ 
        succes:true,
        response: one
      })
    }
  } catch (error) {
    next(error)
  }
}
export default get_one;
