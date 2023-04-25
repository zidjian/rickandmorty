import '../../assets/css/components/Campo.css';

export function CampoGrupo() {
    return (
        <>
            <label htmlFor="" className="campo-rotulo">Buscador</label>
            <input type="text" className="campo" placeholder="Buscador por personajes..." />
        </>
    );
}