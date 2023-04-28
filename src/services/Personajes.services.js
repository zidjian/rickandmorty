import axios from "axios";

export const api = axios.create({
    baseURL: 'https://rickandmortyapi.com/api'
});

export const listarPersonajes = async (url, setDatos, setPaginacion) => {
    const respuesta = await api.get(url);
    setDatos(respuesta.data.results);
    setPaginacion(respuesta.data.info.pages)
} 