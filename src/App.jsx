import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Header } from './assets/components/Header';
import { Inicio } from './assets/components/Inicio';

import './App.css'

function App() {
  
  return (
    <BrowserRouter>
      <Header></Header>
      <Routes>
        <Route path={'/hackaton/Inicio'} element={<Inicio></Inicio>}></Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App