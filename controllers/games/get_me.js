import Game from "../../models/Game.js"; 

let get_Me=async(req,res,next)=>{
    try {
        const mangas = await Game.find({ author_id: req.body.author_id })
        .populate('author_id','name -_id')
        .populate('category_id')
        .populate('company_id')
        if (mangas) {
            return res.status(200).json({
                succes:true,
                response:mangas
            })
        }
        return res.status(404).json({
            repsonse:'el manga no esta '
        })

    } catch (error) {
        next(error)
    }
}

export default get_Me


