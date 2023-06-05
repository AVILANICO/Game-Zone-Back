import Chapter from "../../models/Chapter.js";

const update = async (req, res, next) => {
    try {
        let response = await Chapter.findOneAndUpdate(
            { _id: req.params.id }, 
            req.body, 
            {new:true});            // este campo es opcional y retorna despues de modificarse
        if (response) {
            return res.status(200).json({
                success: true,
                message: "updated",
                response
        });
        } else {
        return res.status(404).json({
            success: false,
            message: "not found"
        });
        }
    } catch (error) {
        next(error);
    }
};
export default update;