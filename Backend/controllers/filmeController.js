const { getFilmesDB, addFilmeDB, updateFilmeDB, deleteFilmeDB, getFilmePorIdDB } = require('../usecases/filmeUseCases');

const getFilmes = async (request, response) => {
    await getFilmesDB()
        .then(data => response.status(200).json(data))
        .catch(err => response.status(400).json({
            status: 'error',
            message: 'Erro ao consultar os filmes: ' + err
        }));
}

const addFilme = async (request, response) => {
    await addFilmeDB(request.body)
        .then(data => response.status(200).json({
            status: 'success',
            message: 'Filme criado',
            objeto: data
        }))
        .catch(err => response.status(400).json({
            status: 'error',
            message: err
        }));
}

const updateFilme = async (request, response) => {
    await updateFilmeDB(request.body)
        .then(data => response.status(200).json({
            status: 'success',
            message: 'Filme alterado',
            objeto: data
        }))
        .catch(err => response.status(400).json({
            status: 'error',
            message: err
        }));
}

const deleteFilme = async (request, response) => {
    await deleteFilmeDB(request.params.id)
        .then(data => response.status(200).json({
            status: 'success',
            message: data
        }))
        .catch(err => response.status(400).json({
            status: 'error',
            message: err
        }));
}

const getFilmePorId = async (request, response) => {
    await getFilmePorIdDB(request.params.id)
        .then(data => response.status(200).json(data))
        .catch(err => response.status(400).json({
            status: 'error',
            message: err
        }));
}

module.exports = { getFilmes, addFilme, updateFilme, deleteFilme, getFilmePorId }
