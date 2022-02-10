
const router = require('express').Router();


const UsuarioRouter = require('./views/UsuarioRouter');
const PeliculasRouter = require('./views/PeliculasRouter');
const OrdersRouter = require('./views/OrdersRouter');

router.use('/usuarios', UsuarioRouter);
router.use('/peliculas', PeliculasRouter);
router.use('/orders', OrdersRouter);

module.exports = router;