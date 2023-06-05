import User from '../models/User.js'

async function accountExistsSignUp(req,res,next) {
    const user = await User.findOne({email: req.body.email})
    if (user) {
        return res.status(400)
        .json({
            success: false,
            message: '¡User already exist!'
        })
        // .send('user already exist!')
        //aca debo responder con un JSON con la misma forma de los errores que estoy armando
    }
    return next()
}

export default accountExistsSignUp
