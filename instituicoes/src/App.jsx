import { Routes, Route } from "react-router-dom";
import { InstituicoesProvider } from "./context/InstituicoesContext";
import Home from "./views/Home";
import Instituicoes from "./views/Instituicoes";
import Sobre from "./views/Sobre"; 
import Header from "./components/Header";
import Footer from "./components/Footer"; 
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

function App() {
  return (
    <InstituicoesProvider>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/instituicoes" element={<Instituicoes />} />
        <Route path="/sobre" element={<Sobre />} /> {}
      </Routes>
      <Footer /> {}
    </InstituicoesProvider>
  );
}

export default App;
