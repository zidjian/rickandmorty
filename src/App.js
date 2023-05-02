import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Personajes } from "./pages/Personajes";
import { Episodios } from "./pages/Episodios";
import { Ubicaciones } from "./pages/Ubicaciones";
import { Error404 } from "./components/Error404/Error404";
import { Header } from "./components/Header/Header";

// Estilos
import './assets/css/base/base.css'
import { Footer } from "./components/Footer/Footer";

function App() {

    return (
        <Router>
            <Header />
            <Routes>
                <Route path="/" element={<Personajes />} />
                <Route path="/episodios" element={<Episodios />} />
                <Route path="/ubicaciones" element={<Ubicaciones />} />
                <Route path="*" element={<Error404 />} />
            </Routes>
            <Footer />
        </Router>
    );
}

export default App;
