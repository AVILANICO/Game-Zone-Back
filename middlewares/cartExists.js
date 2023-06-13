import Carrito from "../models/Carrito.js";

async function cartExists(req,res,next){

    let cart = await Carrito.findOne( { product_id: req.params.id} )
    if ( cart ){
        return res 
            .status(400)
            .json({
                message: 'Product is already in the bag'
            })
    }
    return next()
}

export default cartExists