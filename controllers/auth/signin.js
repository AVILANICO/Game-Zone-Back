import User from "../../models/User.js";
import jwt from "jsonwebtoken";

let signin = async(req, res, next) => {
  try {
    //await ==> si no lo espera no se va a cambiar nunca xD
    await User.findOneAndUpdate(
      {email: req.body.email},
      {is_online: true}
    )
    const token = jwt.sign(
      {id: req.user.id},
      process.env.SECRET,
      {expiresIn: 60*60*24*7}
    )
    
    const user = {
      email: req.user.email,
      photo: req.user.photo,
      role: req.user.role
    }

    return res.status(200).json({
      success: true,
      message: '¡User Sign in!',
      token,
      user
    })
  } catch (error) {
    next(error)
  }
}

export default signin;