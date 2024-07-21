import { getToken } from "../seguranca/Autenticacao";

export const getFilmesAPI = async () => {
    const response = await fetch(`${process.env.REACT_APP_ENDERECO_API}/filme`, {
        method: "GET",
        headers: {
            "Content-Type": "application/json",
            "authorization": getToken()
        }
    });
    if (!response.ok) {
        throw new Error('Erro ao buscar filmes');
    }
    const data = await response.json();
    return data;
}

export const getFilmePorIdAPI = async id => {
    const response = await fetch(`${process.env.REACT_APP_ENDERECO_API}/filme/${id}`, {
        method: "GET",
        headers: {
            "Content-Type": "application/json",
            "authorization": getToken()
        }
    });
    if (!response.ok) {
        throw new Error('Erro ao buscar filme');
    }
    const data = await response.json();
    return data;
}

export const deleteFilmePorIdAPI = async id => {
    const response = await fetch(`${process.env.REACT_APP_ENDERECO_API}/filme/${id}`, {
        method: "DELETE",
        headers: {
            "Content-Type": "application/json",
            "authorization": getToken()
        }
    });
    if (!response.ok) {
        throw new Error('Erro ao deletar filme');
    }
    const data = await response.json();
    return data;
}

export const cadastrarFilmeAPI = async (metodo, objeto) => {
    const response = await fetch(`${process.env.REACT_APP_ENDERECO_API}/filme`, {
        method: metodo,
        headers: {
            "Content-Type": "application/json",
            "authorization": getToken()
        },
        body: JSON.stringify(objeto)
    });
    if (!response.ok) {
        throw new Error('Erro ao cadastrar filme');
    }
    const data = await response.json();
    return data;
}
