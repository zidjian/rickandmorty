// Estilos
import '../../assets/css/components/Selector.css';

export function Selector({nombre, actualizador, total}) {

    return (
        <select className='selector' name="episodios" id="" defaultValue='' onChange={(e) => { actualizador(e.target.value)}} >
            {
                [...Array(total).keys()].map((x, index) => {
                    return (
                        <option value={x + 1} key={index}>
                            {nombre} - {x + 1}
                        </option>
                    );
                })
            }
        </select>
    );
}