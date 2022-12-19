import React from 'react';
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Admin from './components/Admin';
import CrearCuenta from './components/CrearCuenta';
import Login from './components/Login';
import Home from './components/Home';
import CrearCategoria from './components/CrearCategoria';
import ActualizarCategoria from './components/ActualizarCategoria';
import HomeProductos from './components/productos/HomeProductos';
import CrearProducto from './components/productos/CrearProducto';
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" exact element = {<Home/>} />
        <Route path="/login" exact element = {<Login/>} />
        <Route path="/crear-cuenta" exact element = {<CrearCuenta/>}  />
        <Route path="/admin" exact element = {<Admin/>}  />
        <Route path="/crear-categorias" exact element = {<CrearCategoria/>}  />
        <Route path="/actualizar-categoria/:idCategoria" exact element = {<ActualizarCategoria/>}  />
        <Route path="/home-productos/:idCategoria" exact element = {<HomeProductos/>}  />
        <Route path="/crear-producto/:idCategoria" exact element = {<CrearProducto/>}  />    
      </Routes>
    </Router>
  );
}

export default App;