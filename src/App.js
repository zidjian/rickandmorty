import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Personajes } from "./pages/Personajes";
import { Episodios } from "./pages/Episodios";
import { Error404 } from "./components/Error404/Error404";
import { Header } from "./components/Header/Header";

// Estilos
import './assets/css/base/base.css'

function App() {

    return (
        <Router>
            <Header />
            <Routes>
                <Route path="/" element={<Personajes />} />
                <Route path="/episodios" element={<Episodios />} />
                <Route path="*" element={<Error404 />} />
            </Routes>
        </Router>
    );
}

export default App;
