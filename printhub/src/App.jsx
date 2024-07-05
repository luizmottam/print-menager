import { BrowserRouter, Routes, Route } from "react-router-dom";
import Sidebar from './components/Sidebar';
import Conts from './pages/Conts';
import Comparador from './pages/Comparador';
import Impressoras from './pages/Impressoras';
import './App.css';
import { useState } from 'react';

export default function App() {
  const [isBlur, setIsBlur] = useState(false);

  const toggleBlur = () => {
    setIsBlur(prevIsBlur => !prevIsBlur);
  };

  return (
    <BrowserRouter>
      <Sidebar toggleBlur={toggleBlur} />
      <main className={`content ${isBlur ? 'blur' : ''}`}>
        <Routes>
          <Route path="/" element={<Conts />} />
          <Route path="/cont-de-impressoras" element={<Conts />} />
          <Route path="/comparador-de-meses" element={<Comparador />} />
          <Route path="/impressoras" element={<Impressoras />} />
        </Routes>
      </main>
    </BrowserRouter>
  );
}
