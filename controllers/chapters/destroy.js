import Chapter from "../../models/Chapter.js";

let destroy = async(req,res,next) => {
    try {
        let destroyed = await Chapter.deleteOne({_id: req.params.id});
        if (destroyed.deletedCount){
            return res.status (200).json({
                success: true,
            })
        }else {
            return res.status(404).json({
                success: false,
                message: 'Chapter not found'
            })
        }

    } catch (error) {
        next (error);
    }
}

export default destroy