import Game from '../models/Game.js'

async function titleExistsCreate(req,res,next){
    const title = await Game.findOne({title: req.body.title})
    if(title){
        return res.status(400).json({
            success: false,
            message: ['Title already exist!']
        })
    }
    return next()
}
export default titleExistsCreate
