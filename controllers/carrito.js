import Games from '../models/Game.js'
import Carrito from '../models/Carrito.js'


const contoller = {
    
    create: async (req,res,next) => {
        console.log(req.headers);
        const { user } = req
        let game = await Games.findById(req.params.id)
        if(game){
            
            try {
                await Carrito.create({
                    product_id: req.params.id,
                    user_id: user._id,
                    title: game.title,
                    cover_photo: game.cover_photo,
                    price: game.price,
                    quantity: 1,
                    category_id: game.category_id,
                    stock: game.stock
                })
                return res.status (201).json({menssage:'pruducto agregado al carrito'})
            } catch (error) {
                next(error)
            }
        }
    },

    getall: async (req, res, next) => {
        const {user} = req
        try {
            let games = await Carrito.find({user_id: user._id})
            return res.status (200).json({games})
        } catch (error) {
            next(error)
        }
    
    },
    update: async (req,res,next) => {
        try {
            let product = await Carrito.findByIdAndUpdate(
                req.params.id,
                { cantidad: req.body.cantidad}
                )
            if (product){
                return res 
                    .status(200)
                    .json({
                        message: 'Cantidad fue actualizada',
                    })
            }
        } catch (error) {
            next(error)
        }
    },

    destroyOne: async (req,res,next) => {
        try {
            let item = await Carrito.findByIdAndDelete( req.params.id )
            if( item ){
                return res
                    .status(200)
                    .json({
                        message:'Item successfully deleted'
                    })
            }
        } catch (error) {
            next(error)
        }
    },

    destroyAll: async (req,res,next) => {
        const { user } = req
        try {
            await Carrito.deleteMany( { user_id: user._id})
            return res
                .status(200)
                .json({
                    message: 'Cart successfully deleted'
                })
        } catch (error) {
            next(error)
        }
    }
}



export default contoller