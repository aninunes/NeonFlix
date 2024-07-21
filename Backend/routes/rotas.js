const { Router } = require('express');

const { rotasCategorias } = require('./rotasCategorias');
const { rotasProdutos } = require('./rotasProdutos');
const { rotasGeneros } = require('./rotasGeneros');
const { rotasFilmes } = require('./rotasFilmes'); 
const { login } = require('../controllers/segurancaController');

const rotas = new Router();

rotas.route("/login").post(login);

rotas.use(rotasCategorias);
rotas.use(rotasProdutos);
rotas.use(rotasGeneros);
rotas.use(rotasFilmes);

module.exports = rotas;
