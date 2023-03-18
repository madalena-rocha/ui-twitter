import React from 'react'
import ReactDOM from 'react-dom/client'

import './global.css';

import { RouterProvider } from 'react-router-dom';
import { router } from './routes';

// TypeScript: Ferramenta de tipagem estática para o JavaScript
// Tipagem estática: Mecanismo para evitar erros enquanto estamos desenvolvendo o app

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
