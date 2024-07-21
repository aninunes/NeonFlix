class Filme {
    constructor(id, titulo, descricao, anoLancamento, generoId, generoNome) {
        this.id = id;
        this.titulo = titulo;
        this.descricao = descricao;
        this.anoLancamento = anoLancamento;
        this.generoId = generoId;
        this.generoNome = generoNome; // Adicionado este campo
    }
}

module.exports = Filme;
