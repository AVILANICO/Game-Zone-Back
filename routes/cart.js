import express from 'express';
import passport from 'passport';
import contoller from '../controllers/carrito.js';


const { create, getall } = contoller


const router = express.Router();

router.post('/:id', passport.authenticate('jwt', {session: false}),create);
router.get("/", passport.authenticate('jwt', {session:false}), getall);
// router.post('/:id',create);


export default router