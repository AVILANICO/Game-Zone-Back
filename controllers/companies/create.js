/* import createHttpError from "http-errors" */
import Company from "../../models/Company.js"
import User from "../../models/User.js"

let create = async (req, res, next) => {
    console.log(req.user)
    try {
        req.body.user_id = req.user.id
        console.log(req.user)
        req.body.active = false
        console.log(req.body)
        let one = new Company(req.body)
        await one.save() // llama a la función save() para guardar el autor en la base de datos

        await User.findByIdAndUpdate(
            req.user.id,
            {
                role: 2,
                photo: req.body.photo
            },
            { new: true } // devuelve el usuario actualizado en lugar del anterior
        );

        return res.status(201).json({
            author: `${one.name}`,
            success: true,
            createdAt: one.createdAt // accede a la propiedad createdAt después de llamar a la función save()
        })
    } catch (error) {
        console.log(req.user)
        next(error)
    }
}
export default create