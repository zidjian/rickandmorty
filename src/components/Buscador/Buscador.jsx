import { CampoGrupo } from "../CampoGrupo/CampoGrupo";
import '../../assets/css/components/Buscador.css';
import '../../assets/css/components/Boton.css';

export function Buscador() {
    return (
        <form className="formulario">
            <p className="formulario-titulo">Personajes</p>
            <div className="formulario-grupo">
                <CampoGrupo />
            </div>
            <button className="boton">Buscar</button>
        </form>
    );
}