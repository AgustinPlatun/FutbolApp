import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Iniciosesion from './pages/InicioSesion/inicioSesion';
import App from './App';
import Registrar from './pages/Registrar/registrar';


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
  }
]);

const root = ReactDOM.createRoot(document.getElementById('root')!);

root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
