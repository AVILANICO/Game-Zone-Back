import Author from "../../models/Author.js"
import User from "../../models/User.js"

const update = async (req,res,next)=> {
    let role = req.body.active? 1 : 0
    try{
        let update = await Author.findByIdAndUpdate(
                req.params.id,
                req.body,
                {new : true}
        )
        if (update?.active === req.body.active ){
            let userUpdate = await User.findByIdAndUpdate(
                update.user_id, {role : role}, {new : true}
            )
            return res.status(200).json({
                sucess :true,
                message: 'updated',
                update,
                userUpdate
            })
        } else {
            return res.status(404).json({
                sucess : false,
                message : 'Not found'
            })
        }
    } catch (error){
        next(error)
    }
}
export default update