import Game from "../../models/Game.js"; 

let get_Me=async(req,res,next)=>{
    try {
        const games = await Game.find({ author_id: req.body.author_id })
        .populate('author_id','name cover_photo -_id')
        .populate('category_id', 'name _id')
        .populate('company_id', 'name logo -_id')
        if (games) {
            return res.status(200).json({
                succes:true,
                response:games
            })
        }
        return res.status(404).json({
            repsonse:'el game no esta '
        })

    } catch (error) {
        next(error)
    }
}

export default get_Me


