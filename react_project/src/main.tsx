// Importa la biblioteca principal de React, necesaria para usar JSX y crear componentes
import React from 'react'

// Importa ReactDOM, que permite renderizar componentes React en el DOM real del navegador
import ReactDOM from 'react-dom/client'

// Importa el componente principal de tu aplicación, definido en el archivo App.tsx
import App from './App.tsx'

// Importa la libreria de bootstrap
import 'bootstrap/dist/css/bootstrap.min.css'

// Crea una raíz React moderna con createRoot (React 18+), y la monta en el elemento con id 'root'
// El símbolo '!' (non-null assertion) le dice a TypeScript que ese elemento no será null
ReactDOM.createRoot(document.getElementById('root')!).render(
  
  // React.StrictMode es un componente especial que activa comprobaciones adicionales en modo desarrollo.
  // No afecta la UI visible, pero ayuda a detectar malas prácticas o problemas potenciales
  <React.StrictMode>

    {/* Aquí se monta el componente App, que es la raíz de toda tu aplicación.
        Dentro de App puedes tener rutas, lógica, y componentes hijos */}
    <App />

  </React.StrictMode>,
)
