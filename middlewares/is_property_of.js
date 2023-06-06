import Game from '../models/Game.js'

async function is_property_of(req, res, next){
    try {
        //console.log(req);
        let game = await Game.findOne({
            game_id: req.body.game_id,
            author_id: req.body.author_id
        })
        //console.log(game);
        if(game){
            return next();
        }
        return res.status(404).json({
            success: false,
            message: ['The game does not belong to the logged in author']
        }) 
    } catch (error) {
        console.log(error)
        next(error)
    }
}

export default is_property_of;
