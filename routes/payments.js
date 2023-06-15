import express from 'express'
import { Router } from 'express';
import validator from '../middlewares/validator.js';
import passport from '../middlewares/passport.js';
import mercadopagoController from "../controllers/payments/payments.js";


const router = Router();

// Ruta para procesar una donación
router.post('/',passport.authenticate("jwt",{session:false}),mercadopagoController);

export default router