const { pool } = require('../config');
const Genero = require('../entities/genero');

const getGenerosDB = async () => {
    try {
        const { rows } = await pool.query('SELECT * FROM genero ORDER BY nome');
        return rows.map((genero) => new Genero(genero.id, genero.nome, genero.descricao));
    } catch (err) {
        throw "Erro: " + err;
    }
}

const addGeneroDB = async (body) => {
    try {
        const { nome, descricao } = body;
        const results = await pool.query(`INSERT INTO genero (nome, descricao)
        VALUES ($1, $2) RETURNING id, nome, descricao`, [nome, descricao]);
        const genero = results.rows[0];
        return new Genero(genero.id, genero.nome, genero.descricao);
    } catch (err) {
        throw "Erro: " + err;
    }
}

const updateGeneroDB = async (body) => {
    try {
        const { id, nome, descricao } = body;
        const results = await pool.query(`UPDATE genero SET nome = $2, descricao = $3
        WHERE id = $1 RETURNING id, nome, descricao`, [id, nome, descricao]);
        if (results.rowCount == 0) {
            throw `Nenhum registro encontrado com o ID ${id} para ser alterado`;
        }
        const genero = results.rows[0];
        return new Genero(genero.id, genero.nome, genero.descricao);
    } catch (err) {
        throw "Erro ao alterar: " + err;
    }
}

const deleteGeneroDB = async (id) => {
    try {
        const results = await pool.query(`DELETE FROM genero WHERE id = $1`, [id]);
        if (results.rowCount == 0) {
            throw `Nenhum registro encontrado com o ID ${id} para ser removido`;
        } else {
            return "Registro removido com sucesso";
        }
    } catch (err) {
        throw "Erro ao remover: " + err;
    }
}

const getGeneroPorIdDB = async (id) => {
    try {
        const results = await pool.query(`SELECT * FROM genero WHERE id = $1`, [id]);
        if (results.rowCount == 0) {
            throw `Nenhum registro encontrado com o ID ${id}`;
        } else {
            const genero = results.rows[0];
            return new Genero(genero.id, genero.nome, genero.descricao);
        }
    } catch (err) {
        throw "Erro ao recuperar: " + err;
    }
}

module.exports = { getGenerosDB, addGeneroDB, updateGeneroDB, deleteGeneroDB, getGeneroPorIdDB };
