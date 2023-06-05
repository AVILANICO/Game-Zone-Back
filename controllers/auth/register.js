import crypto from 'crypto'
import bcryptjs from 'bcryptjs'
import User from "../../models/User.js";
import createEmailTransporter from '../../config/nodemailer.js';


let create = async(req, res, next) => {
    console.log(req.file);
    const {firebaseUrl} = req.file ? req.file : '';

    req.body.photo = firebaseUrl
    req.body.role = 0;
    req.body.is_online = false;
    req.body.is_verified = false;
    req.body.verify_code = crypto.randomBytes(10).toString('hex');
    req.body.password = bcryptjs.hashSync(req.body.password, 10)
      try {
        let one = new User(req.body)
        createEmailTransporter(one)//envio del mail para verificacion
          .then(info => console.log(info))
          .catch(error => console.log(error))
        await one.save()
        return res.status(201).json({
          message: 'user created successfully!!',
          user: one.email,
          success: "Ok",
          timestamps: one.createdAt  
        })
      } catch (error) {
        console.log(error)
        next(error)
      }
}

export default create;

