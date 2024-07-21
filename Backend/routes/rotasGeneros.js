const { Router } = require('express');

const { verificaJWT } = require('../controllers/segurancaController');

const { getGeneros, addGenero, updateGenero, deleteGenero, getGeneroPorId } = require('../controllers/generoController');

const rotasGeneros = new Router();

rotasGeneros.route('/genero')
    .get(verificaJWT, getGeneros)
    .post(verificaJWT, addGenero)
    .put(verificaJWT, updateGenero);

rotasGeneros.route('/genero/:id')
    .get(verificaJWT, getGeneroPorId)
    .delete(verificaJWT, deleteGenero);

module.exports = { rotasGeneros };
