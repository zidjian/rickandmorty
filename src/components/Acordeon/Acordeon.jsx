import '../../assets/css/components/Acordeon.css';
import '../../assets/css/components/Icono.css';

export function Acordeon({tipo, valores, actualizador, actualizar}) {    
    
    function toggleAcordeon(elemento) {
        const siguiente_elemento = elemento.target;
        if(siguiente_elemento.classList.contains('acordeon-titulo')) {
            siguiente_elemento.firstElementChild.classList.toggle('icono_flechaarriba');
            siguiente_elemento.nextElementSibling.classList.toggle('activo')
        } else {
            siguiente_elemento.classList.toggle('icono_flechaarriba');
            siguiente_elemento.parentElement.nextElementSibling.classList.toggle('activo')
        }
    }

    return (
        <div className="acordeon-elemento" >
            <div className="acordeon-titulo" onClick={(e) => {toggleAcordeon(e)}} >
                {tipo.toUpperCase()}
                <i className="icono icono_flechaabajo" ></i>
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