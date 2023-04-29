import axios from "axios";

export const api = axios.create({
    baseURL: 'https://rickandmortyapi.com/api'
});

export const listarPersonajes = async (url, setDatos) => {
    const respuesta = await api.get(url);
    setDatos(respuesta.data);
} 