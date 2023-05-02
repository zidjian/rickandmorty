import '../../assets/css/components/Acordeon.css';

export function Acordeon({tipo, valores, actualizador, actualizar}) {    
    
    function toggleAcordeon(evento) {
        const siguiente_elemento = evento.target.nextElementSibling;
        siguiente_elemento.classList.toggle('activo')
    }

    return (
        <div className="acordeon-elemento" >
            <div className="acordeon-titulo" onClick={(e) => {toggleAcordeon(e)}} >
                {/* <input type="checkbox" className="acordeon-checkbox" id='desplegado' value={desplegar} /> */}
                {tipo.toUpperCase()}
            </div>
            <div className='acordeon-desplegado activo' >
                { valores.map((valor, indice) => {
                    return (
                        <div className="acordeon-inputgrupo" key={indice}>
                            <input type="radio" className="acordeon-radio" name={tipo} id={tipo+'-'+valor} />
                            <label htmlFor={tipo+'-'+valor} className='acordeon-radiorotulo' onClick={() => { actualizador(valor, actualizar) }} >{valor}</label>
                        </div>
                    );
                }) }
            </div>
        </div>
    );
}