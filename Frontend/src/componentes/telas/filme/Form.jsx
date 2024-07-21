import React, { useContext } from "react";
import Alerta from "../../comuns/Alerta";
import FilmeContext from "./FilmeContext";
import '../form-tables.css';

function Form() {
    const { objeto, handleChange, acaoCadastrar, alerta } = useContext(FilmeContext);

    return (
        <div className="modal fade" id="modalEdicao" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div className="modal-dialog">
                <div className="modal-content">
                    <div className="modal-header">
                        <h1 className="modal-title fs-5" id="exampleModalLabel">Edição de Filmes</h1>
                        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <form id="formulario" onSubmit={acaoCadastrar} className="form-container needs-validation" noValidate>
                        <div className="modal-body">
                            <Alerta alerta={alerta} />
                            <div className="input-span">
                                <label htmlFor="txtId" className="label">Código</label>
                                <input type="number" className="form-control" id="txtId" readOnly name="id" value={objeto.id} onChange={handleChange} />
                            </div>
                            <div className="input-span">
                                <label htmlFor="txtTitulo" className="label">Título</label>
                                <input type="text" className="form-control" id="txtTitulo" placeholder="Informe o título" required name="titulo" value={objeto.titulo} onChange={handleChange} />
                                <div className="valid-feedback">Título OK!</div>
                                <div className="invalid-feedback">Informe o título!</div>
                            </div>
                            <div className="input-span">
                                <label htmlFor="txtDescricao" className="label">Descrição</label>
                                <input type="text" className="form-control" id="txtDescricao" placeholder="Informe a descrição" required name="descricao" value={objeto.descricao} onChange={handleChange} />
                                <div className="valid-feedback">Descrição OK!</div>
                                <div className="invalid-feedback">Informe a descrição!</div>
                            </div>
                            <div className="input-span">
                                <label htmlFor="txtAnoLancamento" className="label">Ano de Lançamento</label>
                                <input type="number" className="form-control" id="txtAnoLancamento" placeholder="Informe o ano de lançamento" required name="ano_lancamento" value={objeto.ano_lancamento} onChange={handleChange} />
                                <div className="valid-feedback">Ano de Lançamento OK!</div>
                                <div className="invalid-feedback">Informe o ano de lançamento!</div>
                            </div>
                            <div className="input-span">
                                <label htmlFor="txtGeneroId" className="label">ID do Gênero</label>
                                <input type="number" className="form-control" id="txtGeneroId" placeholder="Informe o ID do gênero" required name="genero_id" value={objeto.genero_id} onChange={handleChange} />
                                <div className="valid-feedback">ID do Gênero OK!</div>
                                <div className="invalid-feedback">Informe o ID do gênero!</div>
                            </div>
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Fechar</button>
                            <button type="submit" className="btn submit">Salvar <i className="bi bi-save"></i></button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default Form;