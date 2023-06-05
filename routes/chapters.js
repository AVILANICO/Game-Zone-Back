import { Router } from "express";
import create from "../controllers/chapters/create.js"
import validator from "../middlewares/validator.js";
import schema from "../schemas/chapters.js";
import passport from "../middlewares/passport.js";
import get_chapters from "../controllers/chapters/get_chapters.js";
import get_one from "../controllers/chapters/get_one.js";
import update from "../controllers/chapters/update.js";
import destroy from "../controllers/chapters/destroy.js";
import get_me from "../controllers/chapters/get_me.js";
import finds_id from "../middlewares/finds_id.js";
import is_active from "../middlewares/is_active.js";
import is_property_of from "../middlewares/is_property_of.js";

let router = Router()

router.post('/',passport.authenticate('jwt',{session:false}),validator(schema) ,create)
router.get('/me',passport.authenticate('jwt',{session:false}), finds_id, get_me)
router.get('/:id',passport.authenticate('jwt',{session:false}), get_one)
router.put('/:id',passport.authenticate('jwt',{session:false}), finds_id, is_active, is_property_of , update)
router.delete('/:id',passport.authenticate('jwt',{session:false}), finds_id, is_active, is_property_of , destroy )
router.get('/', get_chapters)

export default router;
