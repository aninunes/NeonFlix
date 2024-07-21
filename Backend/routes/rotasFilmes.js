const { Router } = require('express');

const { verificaJWT } = require('../controllers/segurancaController');
const { getFilmes, addFilme, updateFilme, deleteFilme, getFilmePorId } = require('../controllers/filmeController');

const rotasFilmes = new Router();

rotasFilmes.route('/filme')
    .get(verificaJWT, getFilmes)
    .post(verificaJWT, addFilme)
    .put(verificaJWT, updateFilme);

rotasFilmes.route('/filme/:id')
    .get(verificaJWT, getFilmePorId)
    .delete(verificaJWT, deleteFilme);

module.exports = { rotasFilmes };
