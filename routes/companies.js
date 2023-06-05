import { Router } from "express";
import read from '../controllers/companies/read.js'
import passport from "passport";
import validator from "../middlewares/validator.js";
import {companyCreate} from "../schemas/companyCreate.js"
import create from "../controllers/companies/create.js"
import admin from "../controllers/companies/admin.js"

let router = Router()

// router.post('/', (req, res, next) => res.status(200).send('author creado'))
router.get('/', read)
router.post('/',passport.authenticate('jwt',{session:false}),validator(companyCreate), create)
// router.put('/:id', (req, res, next) => res.status(200).send('autores modificados'))
// router.delete('/:id', (req, res, next) => res.status(200).send('autores borrados'))
router.get('/admin',passport.authenticate('jwt',{session:false}),admin )

export default router;