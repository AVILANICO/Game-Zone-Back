import User from "../../models/User.js";

const verifyEmail =  async(req,res,next) => {
    
        try{
            const verify_code = req.query.verify_code
            if (!verify_code) return res.status(404).json('Verify Code not found...')

            const user = await User.findOne({verify_code})

            if (user){
                user.is_verified = true

                await user.save()

                return res.redirect('http://localhost:5173/signin')

            }else res.status(404).json('Mail verification failed, invalid token')

        }catch(error){
            console.log(error)
            res.status(500).json(error.message)
        }
    } 

export default verifyEmail