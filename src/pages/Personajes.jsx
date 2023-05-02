// Estilos
import '../assets/css/components/Principal.css';
import '../assets/css/components/Filtro.css';

import { Buscador } from "../components/Buscador/Buscador";
import { Acordeon } from "../components/Acordeon/Acordeon";
import { Tarjetas } from "../components/Tarjetas/Tarjetas";
import { useEffect, useState } from "react";

// Servicios
import { listarPersonajes } from "../services/Personajes.services";

export function Personajes() {

    const v_estado = ["Alive", "Dead", "Unknown"];
    const v_especie = [
        "Human",
        "Alien",
        "Humanoid",
        "Poopybutthole",
        "Mythological",
        "Unknown",
        "Animal",
        "Disease",
        "Robot",
        "Cronenberg",
        "Planet",
    ];
    const v_genero = ["female", "male", "genderless", "unknown"];

    const [busqueda, setBuscaqueda] = useState('');
    const [estado, setEstado] = useState('');
    const [especie, setEspecie] = useState('');
    const [genero, setGenero] = useState('');
    const [pagina, setpagina] = useState(1);
    const [personajes, setPersonajes] = useState([]);

    let url = `character?page=${pagina}&name=${busqueda}&status=${estado}&species=${especie}&gender=${genero}`;

    useEffect(() => {
        listarPersonajes(url, setPersonajes);
    }, [url]);

    function actualizar_filtro(valor, actualizador) {
        setpagina(1);
        actualizador(valor);
    }

    function manejadorPaginacion(e) {
        setpagina(e.selected + 1);
    }

    function resetearFiltro() {
        setBuscaqueda('');
        setEstado('');
        setEspecie('');
        setGenero('');
        setpagina(1);
        const radios = document.querySelectorAll('.acordeon-radio');
        radios.forEach(radio => {
            radio.checked = false
        });
    }

    if (personajes.results && personajes.info) {
        return (
            <main className="principal">
                <div className="principal-contenido contenido_parcial">
                    <Buscador valor={busqueda} actualizar={setBuscaqueda} />
                    <div className="filtro">
                        <div className="filtro-titulo">Filtrar</div>
                        <div className="filtro-limpiar" onClick={() => {resetearFiltro()}}>Limpiar filtros</div>
                        <div className="acordeon">
                            <Acordeon tipo='estado' valores={v_estado} actualizador={actualizar_filtro} actualizar={setEstado} />
                            <Acordeon tipo='especie' valores={v_especie} actualizador={actualizar_filtro} actualizar={setEspecie} />
                            <Acordeon tipo='genero' valores={v_genero} actualizador={actualizar_filtro} actualizar={setGenero} />
                        </div>
                    </div>
                    <Tarjetas personajes={personajes.results} manejadorPaginacion={manejadorPaginacion} paginas_total={personajes.info.pages} pagina_actual={pagina} />
                </div>
            </main>
        );
    }
}