import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Iniciosesion from './pages/InicioSesion/inicioSesion';
import App from './App';
import Registrar from './pages/Registrar/registrar';
import Home from './pages/home/home';
import CrearGrupo from './pages/crearGrupo/crearGrupo';
import VerGrupos from './pages/verGrupos/verGrupos';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />
  },
  {
    path:'/inicioSesion',
    element: <Iniciosesion/>
  },
  {
    path:'/registrar',
    element: <Registrar/>
  },
  {
    path:'/home',
    element: <Home/> 
  },
  {
    path:'/crearGrupo',
    element: <CrearGrupo/>
  },
  {
    path:'/verGrupos',
    element: <VerGrupos/>
  }
]);

const root = ReactDOM.createRoot(document.getElementById('root')!);

root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
