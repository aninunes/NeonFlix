const { pool } = require('../config');
const Filme = require('../entities/filme');

const getFilmesDB = async () => {
    try {
        const { rows } = await pool.query(`SELECT f.id, f.titulo, f.descricao, f.ano_lancamento, f.genero_id, g.nome AS genero_nome
                                           FROM filme f
                                           JOIN genero g ON f.genero_id = g.id
                                           ORDER BY f.titulo`);
        return rows.map((filme) => new Filme(filme.id, filme.titulo, filme.descricao, filme.ano_lancamento, filme.genero_id, filme.genero_nome));
    } catch (err) {
        throw "Erro: " + err;
    }
}



const addFilmeDB = async (body) => {
    try {
        const { titulo, descricao, ano_lancamento, genero_id } = body;
        const results = await pool.query(`INSERT INTO filme (titulo, descricao, ano_lancamento, genero_id)
                                          VALUES ($1, $2, $3, $4)
                                          RETURNING id, titulo, descricao, ano_lancamento, genero_id`, 
                                          [titulo, descricao, ano_lancamento, genero_id]);
        const filme = results.rows[0];
        return new Filme(filme.id, filme.titulo, filme.descricao, filme.ano_lancamento, filme.genero_id);
    } catch (err) {
        throw "Erro: " + err;
    }
}

const updateFilmeDB = async (body) => {
    try {
        const { id, titulo, descricao, ano_lancamento, genero_id } = body;
        const results = await pool.query(`UPDATE filme SET titulo = $2, descricao = $3, ano_lancamento = $4, genero_id = $5
                                          WHERE id = $1
                                          RETURNING id, titulo, descricao, ano_lancamento, genero_id`, 
                                          [id, titulo, descricao, ano_lancamento, genero_id]);
        if (results.rowCount == 0) {
            throw `Nenhum registro encontrado com o ID ${id} para ser alterado`;
        }
        const filme = results.rows[0];
        return new Filme(filme.id, filme.titulo, filme.descricao, filme.ano_lancamento, filme.genero_id);
    } catch (err) {
        throw "Erro ao alterar: " + err;
    }
}

const deleteFilmeDB = async (id) => {
    try {
        const results = await pool.query(`DELETE FROM filme WHERE id = $1`, [id]);
        if (results.rowCount == 0) {
            throw `Nenhum registro encontrado com o ID ${id} para ser removido`;
        } else {
            return "Filme removido com sucesso";
        }
    } catch (err) {
        throw "Erro ao remover: " + err;
    }
}

const getFilmePorIdDB = async (id) => {
    try {
        const results = await pool.query(`SELECT f.id, f.titulo, f.descricao, f.ano_lancamento, f.genero_id, g.nome AS genero_nome
                                          FROM filme f
                                          JOIN genero g ON f.genero_id = g.id
                                          WHERE f.id = $1`, [id]);
        if (results.rowCount == 0) {
            throw `Nenhum registro encontrado com o ID ${id}`;
        } else {
            const filme = results.rows[0];
            return new Filme(filme.id, filme.titulo, filme.descricao, filme.ano_lancamento, filme.genero_id, filme.genero_nome);
        }
    } catch (err) {
        throw "Erro ao recuperar: " + err;
    }
}

module.exports = { getFilmesDB, addFilmeDB, updateFilmeDB, deleteFilmeDB, getFilmePorIdDB };
