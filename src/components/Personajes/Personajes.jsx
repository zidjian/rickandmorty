// Estilos
import '../../assets/css/components/Principal.css';
import '../../assets/css/components/Filtro.css';

import { Buscador } from "../Buscador/Buscador";
import { Acordeon } from "../Acordeon/Acordeon";
import { Tarjetas } from "../Tarjetas/Tarjetas";
import { useEffect, useState } from "react";
import ReactPaginate from 'react-paginate';

// Servicios
import { listarPersonajes } from "../../services/Personajes.services";

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
        console.log(url)
        listarPersonajes(url, setPersonajes, setpagina);
    }, [url]);

    function manejadorPaginacion(e) {
        setpagina(e.selected);
    }

    // console.log(personajes.info.count);
    if(personajes) {
        return (
            <main className="principal">
                <div className="principal-contenido contenido_parcial">
                    <Buscador valor={busqueda} actualizar={setBuscaqueda} />
                    <div className="filtro">
                        <div className="filtro-titulo">Filtrar</div>
                        <div className="filtro-limpiar">Limpiar filtros</div>
                        <div className="acordeon">
                            <Acordeon tipo='estado' valores={v_estado} actualizar={setEstado} />
                            <Acordeon tipo='especie' valores={v_especie} actualizar={setEspecie} />
                            <Acordeon tipo='genero' valores={v_genero} actualizar={setGenero} />
                        </div>
                    </div>
                    <Tarjetas personajes={personajes} />
                    <ReactPaginate
                        breakLabel="..."
                        nextLabel="next >"
                        onPageChange={manejadorPaginacion}
                        pageRangeDisplayed={2}
                        marginPagesDisplayed={3}
                        pageCount={pagina}
                        previousLabel="< previous"
                        renderOnZeroPageCount={null}
                    />
                </div>
            </main>
        );
    }
}