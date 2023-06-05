import express from 'express';
import register from '../controllers/auth/register.js';
import signin from '../controllers/auth/signin.js';
import signout from '../controllers/auth/signout.js';
import validator from '../middlewares/validator.js';
import { userCreateSignUp, userCreateSignIn } from '../schemas/users.js';
import accountExistsSignUp from '../middlewares/accountSignUp.js';
import accountExistsSignIn from '../middlewares/accountSignIn.js';
import accountHasBeenVerified from '../middlewares/isVerified.js';
import passwordIsOk from '../middlewares/passIsOk.js';
import passport from '../middlewares/passport.js';
import updateAuthor from "../controllers/authors/update.js"
import is_admin from '../middlewares/is_admin.js';
import updateCompany from '../controllers/companies/update.js';
import uploadFile from '../middlewares/upload_file.js'
import uploadImage from '../services/firebase.cjs';
import verifyEmail from '../controllers/auth/verifyemail.js';

const router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) { 
  res.send('respond with a resource');
});
router.get('/verify',verifyEmail)
router.post('/register', uploadFile(), uploadImage, validator(userCreateSignUp), accountExistsSignUp, register)
router.post('/signin', validator(userCreateSignIn), accountExistsSignIn, accountHasBeenVerified, passwordIsOk, signin)
router.post('/signout', passport.authenticate('jwt', {session: false}), signout)
router.put('/role/author/:id',passport.authenticate('jwt', {session: false}),is_admin,updateAuthor)
router.put('/role/company/:id',passport.authenticate('jwt',{session:false}),is_admin,updateCompany)

export default router;



