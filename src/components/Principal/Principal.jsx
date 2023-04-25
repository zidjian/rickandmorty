import { Buscador } from "../Buscador/Buscador";

export function Principal() {
    return (
        <main className="principal">
            <div className="principal-contenido contenido_parcial">
                <Buscador />
            </div>
        </main>
    );
}