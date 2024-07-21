import { getToken } from "../seguranca/Autenticacao";

export const getGenerosAPI = async () => {
    const response = await fetch(`${process.env.REACT_APP_ENDERECO_API}/genero`,
    {
        method: "GET",
        headers: {
            "Content-Type": "application/json",
            "authorization": getToken()
        }
    });
    const data = await response.json();
    return data;
}

export const getGeneroPorIdAPI = async id => {
    const response = await fetch(`${process.env.REACT_APP_ENDERECO_API}/genero/${id}`,
    {
        method: "GET",
        headers: {
            "Content-Type": "application/json",
            "authorization": getToken()
        }
    });
    const data = await response.json();
    return data;
}

export const deleteGeneroPorIdAPI = async id => {
    const response = await fetch(`${process.env.REACT_APP_ENDERECO_API}/genero/${id}`,
    {
        method: "DELETE",
        headers: {
            "Content-Type": "application/json",
            "authorization": getToken()
        }
    });
    const data = await response.json();
    return data;
}

export const cadastrarGeneroAPI = async (metodo, objeto) => {
    const response = await fetch(`${process.env.REACT_APP_ENDERECO_API}/genero`,
    {
        method: metodo,
        headers: {
            "Content-Type": "application/json",
            "authorization": getToken()
        },
        body: JSON.stringify(objeto)
    });
    const data = await response.json();
    return data;
}
