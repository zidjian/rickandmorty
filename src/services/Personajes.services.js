import axios from "axios";

export const api = axios.create({
    baseURL: 'https://rickandmortyapi.com/api'
});

export const listarPersonajes = async (url, setDatos) => {
    await api.get(url)
        .then(function(respuesta) {
            setDatos(respuesta.data);
        })
        .catch(function(error) {
            setDatos({ results: [], info: {}});
        });
} 