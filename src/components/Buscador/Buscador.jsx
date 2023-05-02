// Estilos
import '../../assets/css/components/Buscador.css';
import '../../assets/css/components/Boton.css';

import { CampoGrupo } from "../CampoGrupo/CampoGrupo";

export function Buscador({valor, actualizar}) {
    return (
        <form className="formulario">
            <p className="formulario-titulo">Personajes</p>
            <div className="formulario-grupo">
                <CampoGrupo valor={valor} actualizar={actualizar} />
            </div>
        </form>
    );
}