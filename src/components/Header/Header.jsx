import { Link } from 'react-router-dom';
import logo from '../../assets/img/logo.svg';

// Estilos
import '../../assets/css/components/Header.css';
import '../../assets/css/components/Icono.css';

export function Header() {
    return (
        <header className="cabecera">
            <div className="cabecera-contenido contenido_parcial">
                <Link to='/' className="logo">
                    <img src={logo} alt="Logo de la aplicación Rick & Morty" className="logo-imagen" />
                    <p className='logo-texto'>Rick & Morty</p>
                </Link>
                <nav className='navdesk'>
                    <ul className='navdesk-lista'>
                        <li className='navdesk-elemento'>
                            <Link to="/" className='navdesk-link' >Personajes</Link>
                        </li>
                        <li className='navdesk-elemento'>
                            <Link to="episodios" className='navdesk-link' >Episodios</Link>
                        </li>
                        <li className='navdesk-elemento'>
                            <Link to="ubicaciones" className='navdesk-link' >Ubicación</Link>
                        </li>
                    </ul>
                </nav>
                <div className='togglemobil'>
                    <i className='icono icono_opciones'></i>
                </div>
                <div className='navmobil'>
                    <ul className='navmobil-lista'>
                        <li className='navmobil-elemento'>
                            <Link to="/" className='navmobil-link' >Personajes</Link>
                        </li>
                        <li className='navmobil-elemento'>
                            <Link to="episodios" className='navmobil-link' >Episodios</Link>
                        </li>
                        <li className='navmobil-elemento'>
                            <Link to="ubicaciones" className='navmobil-link' >Ubicación</Link>
                        </li>
                    </ul>
                    <div className='menumobil-cerrar '>
                        <i className='icono icono_x'></i>
                    </div>
                </div>
            </div>
        </header>
    );
}