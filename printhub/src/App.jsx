import { BrowserRouter, Route, Navigate, Routes} from "react-router-dom";
import { useState } from 'react'
import Sidebar from './components/Sidebar'
import Conts from './pages/Conts'
import './App.css'

export default function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Sidebar><Conts/></Sidebar>}/>
    </Routes>
    </BrowserRouter>
  )
}