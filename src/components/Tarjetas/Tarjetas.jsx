// Estilos
import '../../assets/css/components/Tarjetas.css';

// Componentes Externos
import { Tarjeta } from "../Tarjeta/Tarjeta";

export function Tarjetas({personajes}) {
    if(personajes) {
        return (
            <div className="tarjetas">
                {
                    personajes.map((personaje, indice) => {
                        return (
                            <Tarjeta personaje={personaje} key={indice} />
                        );
                    }) 
                }
            </div>
        );
    } else {
        return (
            <></>
        );
    }
}