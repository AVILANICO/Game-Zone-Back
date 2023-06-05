import { Router } from "express";
import read from '../controllers/categories/read.js'
// import passport from "../middlewares/jspassport.js";

let router = Router();

//me tira error de ruta en el Postman

router.get('/',  read)

export default router;