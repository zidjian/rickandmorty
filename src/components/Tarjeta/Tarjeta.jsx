// Estilos
import '../../assets/css/components/Tarjeta.css';

export function Tarjeta({personaje}) {
    const {name, location, image, status} = personaje;
    // const location = personaje.location.name;
    return (
        <div className="tarjeta">
            <img src={image} alt="Personaje" className='tarjeta-imagen' />
            <div className='tarjeta-contenido'>
                <p className='tarjeta-nombre'>{name}</p>
                <p className='tarjeta-ubicación'><span className='tarjeta-rotulo'>Ultima ubicación: </span>{location.name}</p>
            </div>
            <div className="tarjeta-etiqueta">{status}</div>
        </div>
    );
}