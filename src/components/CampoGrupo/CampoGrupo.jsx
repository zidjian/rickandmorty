import '../../assets/css/components/Campo.css';

export function CampoGrupo({ valor, actualizar }) {
    function actualizarValor(actualizado) {
        actualizar(actualizado);
    }
    return (
        <>
            <label htmlFor="" className="campo-rotulo">Buscador</label>
            <input type="text" className="campo" placeholder="Buscador por personajes..." onChange={(e) => { actualizarValor(e.target.value) }} />
        </>
    );
}