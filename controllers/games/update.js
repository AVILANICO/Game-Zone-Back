import Game from "../../models/Game.js";

let update =async(req,res,next)=>{
    try {
        let update = await Game.findByIdAndUpdate(req.params.id, req.body, {new:true})
        //req.body es el objeto actualizado
        .populate('category_id')

          //aca podria agregar selector para traer unicamente lo correspondiente
          //falta if de existencia de update
          return res.status(200).json({
            success:true,
            message: 'updated',
            update
        })
    } catch (error) {
      next(error)
    }
}
export default update


