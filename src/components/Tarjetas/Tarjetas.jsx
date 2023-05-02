// Estilos
import '../../assets/css/components/Tarjetas.css';

// Componentes Externos
import { Tarjeta } from "../Tarjeta/Tarjeta";
import ReactPaginate from 'react-paginate';

export function Tarjetas({personajes, manejadorPaginacion, paginas_total, pagina_actual}) {
    if(personajes && personajes.length > 0) {
        return (
            <div className="tarjetas">
                {
                    personajes.map((personaje, indice) => {
                        return (
                            <Tarjeta personaje={personaje} key={indice} />
                        );
                    }) 
                } 

                {
                    manejadorPaginacion &&
                    <ReactPaginate
                        breakLabel="..."
                        nextLabel=">"
                        onPageChange={manejadorPaginacion}
                        pageRangeDisplayed={0}
                        marginPagesDisplayed={1}
                        pageCount={paginas_total}
                        previousLabel="<"
                        renderOnZeroPageCount={null}
                        containerClassName='paginacion'
                        pageLinkClassName='pagina'
                        previousLinkClassName='pagina activo'
                        nextLinkClassName='pagina activo'
                        activeLinkClassName='activo'
                        disabledLinkClassName='inactivo'
                        forcePage={pagina_actual - 1}
                    />
                }
            </div>
        );
    } else {
        return (
            <div className="sintarjetas">
                No hay elementos que coincidan con la busqueda o filtros 
            </div>
        );
    }
}