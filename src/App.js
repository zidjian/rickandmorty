import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Personajes } from "./components/Personajes/Personajes";
import { Error404 } from "./components/Error404/Error404";
import { Header } from "./components/Header/Header";

// Estilos
import './assets/css/base/base.css'

function App() {

    return (
        <>
            <Router>
            <Header />
                <Routes>
                    <Route path="/" element={<Personajes />} />
                    <Route path="*" element={<Error404 />} />
                </Routes>
            </Router>
        </>
    );
}

export default App;
