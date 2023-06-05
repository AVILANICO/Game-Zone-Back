import passport from 'passport';
import passportJwt from 'passport-jwt';
import User from '../models/User.js';

passport.use(
    new passportJwt.Strategy({
      jwtFromRequest: passportJwt.ExtractJwt.fromAuthHeaderAsBearerToken(),
      //para acceder a la variable de entorno SECRET se usa el process.env.SECRET
      secretOrKey: process.env.SECRET
    },
    //Estrategia de extraccion para devolver solo el payload
    async(jwt_payload, done) => {
      try {
        //para buscar un usuario y poder autentificarlo, del payload accedo a la propiedad id y busco el usuario. 
        let user = await User.findOne({_id: jwt_payload.id})

        if(user){
          return done(null, user)
        }
        else{
          return done(null, false)
        }
      } catch (error) {
        console.log(error)
        return done(error, false)
      }
    }
  )
)

export default passport;

