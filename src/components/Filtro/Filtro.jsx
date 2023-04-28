import '../../assets/css/components/Filtro.css';
import { Acordeon } from '../Acordeon/Acordeon';

export function Filtro() {
    return (
        <div className="filtro">
            <div className="filtro-titulo">Filtrar</div>
            <div className="filtro-limpiar">Limpiar filtros</div>
            <div className="acordeon">
                <Acordeon />
                <Acordeon />
            </div>
        </div>
    );
}