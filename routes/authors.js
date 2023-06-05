//aca voy a definir los endpoints de los autores 
//y los voy a exportar para poder utilizarlos 
import { Router } from "express";
import read from '../controllers/authors/read.js'
import { authorCreate } from "../schemas/authorsCreate.js";
import create from "../controllers/authors/createauthor.js"
import passport from "passport";
import validator from "../middlewares/validator.js";
import admin from "../controllers/authors/admin.js"

let router = Router()

// router.post('/', (req, res, next) => res.status(200).send('author creado'))
router.get('/', read)
// router.put('/:id', (req, res, next) => res.status(200).send('autores modificados'))
// router.delete('/:id', (req, res, next) => res.status(200).send('autores borrados'))
router.post('/',passport.authenticate('jwt',{session:false}),validator(authorCreate), create)
router.get('/admin',passport.authenticate('jwt',{session:false}),admin )


export default router;