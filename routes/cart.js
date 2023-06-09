import express from 'express';
import passport from 'passport';
import contoller from '../controllers/carrito.js';


const { create, getall, destroyOne } = contoller


const router = express.Router();

router.post('/:id', passport.authenticate('jwt', {session: false}),create);
router.get("/", passport.authenticate('jwt', {session:false}), getall);
router.delete("/:id", passport.authenticate('jwt', {session:false}), destroyOne);
// router.post('/:id',create);


export default router