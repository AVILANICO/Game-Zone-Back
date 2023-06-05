import Manga from '../models/Manga.js'

async function is_property_of(req, res, next){
    try {
        //console.log(req);
        let manga = await Manga.findOne({
            manga_id: req.body.manga_id,
            author_id: req.body.author_id
        })
        //console.log(manga);
        if(manga){
            return next();
        }
        return res.status(404).json({
            success: false,
            message: ['The manga does not belong to the logged in author']
        }) 
    } catch (error) {
        console.log(error)
        next(error)
    }
}

export default is_property_of;
