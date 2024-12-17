// src/App.tsx

import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'; 
import Navbar from './components/Navbar'; // Importando a Navbar
import About from './pages/About'; // Importando a página About
import Flight from './pages/Flight';
import './App.css'; // Estilos globais
import InputBar from './components/InputBar';

const App: React.FC = () => {
  return (
    <Router>
      <Navbar /> {/* Navbar com links de navegação */}
      <div className="container mt-5 pt-5">
      <InputBar/>
        <Routes>
          {/* A Home será o próprio App.tsx */}
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/flight" element={<Flight />} /> {/* Rota para a página de resultados */}
        </Routes>
      </div>
    </Router>
  );
};

// Componente Home
const Home: React.FC = () => {
  return (
    <div>
      <h1>Home Page</h1>
      <p>Welcome to the Home page</p>
    </div>
  );
};

export default App;
