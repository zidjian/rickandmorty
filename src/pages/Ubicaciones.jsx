// Estilos
import '../assets/css/components/Principal.css';
import '../assets/css/components/Filtro.css';

import { Selector } from "../components/Selector/Selector";
import { Tarjetas } from "../components/Tarjetas/Tarjetas";
import { useEffect, useState } from "react";

// Servicios
import { listarPersonajes } from "../services/Personajes.services";

export function Ubicaciones() {
    const [ubicacion_actual, setUbicacionActual] = useState(1);
    const [episodio, setEpisodio] = useState();
    const [personajes, setPersonajes] = useState();

    let url = `location/${ubicacion_actual}`;
    
    useEffect(() => {
        listarPersonajes(url, setEpisodio);
    }, [url]);
    
    useEffect(() => {
        let valores = '';
        if(episodio) {
            (episodio.residents).map((valor, indice) => {
                valores += valor.substr(42) + ',';
            });
            listarPersonajes(`character/${valores}`, setPersonajes);
        }
    }, [episodio]);

    if (personajes) {
        return (
            <main className="principal">
                <div className="principal-cabecera contenido_parcial">
                    <p className="principal-titulo">Nombre de la ubicación: {episodio.name}</p>
                </div>
                <div className="principal-contenido contenido_parcial">
                    <div className="filtro">
                        <div className="filtro-titulo">Selecciona un episodio</div>
                        <Selector nombre={'Ubicación'} actualizador={setUbicacionActual} total={126} />
                    </div>
                    <Tarjetas personajes={personajes} paginas_total={'Todo'} />
                </div>
            </main>
        );
    }
}