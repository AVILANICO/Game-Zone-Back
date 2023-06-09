import { Router } from "express";
import read from '../controllers/games/get_games.js'
import create from '../controllers/games/create.js';
import validator from '../middlewares/validator.js';
import { gameCreate } from '../schemas/games.js';
import passport from '../middlewares/passport.js';
import get_one from "../controllers/games/get_one.js";
import finds_id from "../middlewares/finds_id.js";
import get_Me from "../controllers/games/get_me.js";
import update from "../controllers/games/update.js";
import destroy from "../controllers/games/destroy.js";
import is_active from "../middlewares/is_active.js";
import is_property_of from "../middlewares/is_property_of.js";
import exist_title from "../middlewares/exist_title.js"
import gameUpdate from "../schemas/gameUpdate.js";
import upload_cover_photo from "../middlewares/upload_cover_photo.js";
import uploadImage from '../services/firebase.cjs';
import readAll from "../controllers/games/read.js";

let router = Router()

router.get('/',passport.authenticate('jwt',{session:false}), read)
router.get("/all",passport.authenticate('jwt',{session:false}), readAll)
router.get('/me',passport.authenticate('jwt',{session:false}),finds_id, get_Me)
router.get('/:id', get_one)
router.post('/games', create)
router.post('/', upload_cover_photo(), uploadImage, passport.authenticate('jwt',{session:false}),validator(gameCreate), is_active, exist_title, is_property_of, create)
router.put('/:id', passport.authenticate('jwt',{session:false}), validator(gameUpdate),finds_id, is_active, is_property_of, update)
router.delete('/:id', passport.authenticate('jwt',{session:false}), finds_id, is_active, is_property_of, destroy)

export default router;



