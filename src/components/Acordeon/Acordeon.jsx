import { useState } from 'react';
import '../../assets/css/components/Acordeon.css';

export function Acordeon({tipo, valores, actualizar}) {    
    const [desplegar, setDesplegar] =  useState(true);
    
    function toggleAcordeon() {
        setDesplegar(!desplegar);
    }

    function actualizar_filtro(valor) {
        actualizar(valor);
    }

    return (
        <div className="acordeon-elemento" >
            <div className="acordeon-titulo" onClick={toggleAcordeon} >
                <input type="checkbox" className="acordeon-checkbox" id='desplegado' value={desplegar} />
                <label htmlFor='desplegado' className='acordeon-checkboxrotulo' >{tipo.toUpperCase()}</label>
            </div>
            <div className={desplegar ? 'acordeon-desplegado activo' : 'acordeon-desplegado'} >
                { valores.map((valor, indice) => {
                    return (
                        <div className="acordeon-inputgrupo" key={indice}>
                            <input type="radio" className="acordeon-radio" name={tipo} id={tipo+'-'+valor} />
                            <label htmlFor={tipo+'-'+valor} className='acordeon-radiorotulo' onClick={() => { actualizar_filtro(valor) }} >{valor}</label>
                        </div>
                    );
                }) }
            </div>
        </div>
    );
}