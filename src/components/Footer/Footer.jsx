import { Link } from 'react-router-dom';

// Estilos
import '../../assets/css/components/Footer.css';

export function Footer() {

    return (
        <footer className="piepagina">
            <div className="footer-conteido contenido_parcial">
                &copy; 2023. Desarrollado por <a href="https://zidjian.github.io/portafolio-wmv/" target="_blank" rel="noopener noreferrer" className='piepagina-desarrollador'>Waldir Maidana</a>
            </div>
        </footer>
    );
}