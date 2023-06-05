import Chapter from "../../models/Chapter.js";

const get_me = async (req, res, next) => {
    try {
        
        const chapters = await Chapter.find({ manga_id:req.query.manga_id});
        if (chapters){
            return res.status(200).json({
                response: chapters
            })
        }  return res.status(404).json({
            response: 'the chapter was not found'
            })
    } catch (error) {
        next(error);
    }
}

export default get_me