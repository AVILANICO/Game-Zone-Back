//ENROUTADOR PRINCIPAL
import express from 'express'
import usersRouter from './auth.js' 
import authorRouter from './authors.js'
import categoriesRouter from './categories.js'
import companiesRouter from './companies.js'
import gamesRouter from './games.js'
import payments from './payments.js'
import carritoRouter from './cart.js' 

const router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'MINGA API', subtitle: 'Endpoints of Minga' });
});

//Las rutas definen como se van a conectar el backend con el frontend
//indexRouter va a ser el enroutador principal de todos los modelos/recursos.
router.use('/auth', usersRouter)
router.use('/authors', authorRouter)
router.use('/categories', categoriesRouter)
router.use('/companies', companiesRouter)
router.use('/games', gamesRouter)
router.use('/payments', payments)
router.use('/carrito', carritoRouter)

export default router;
