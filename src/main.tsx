import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'

import './index.css'
import App from './App.tsx'
import Home from './home/Home.component.tsx'
import Ceremony from './conteudo/Ceremony.component.tsx'
import LanguageProvider from './context/languageContext.tsx'
import Accomodations from './conteudo/Accomodations.component.tsx'

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Home />
      },
      {
        path: "/ceremony",
        element: <Ceremony />
      },
      {
        path: "/accomodations",
        element: <Accomodations />
      },
    ]
  }
]);

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <LanguageProvider>
      <RouterProvider router={router} />
    </LanguageProvider>
  </StrictMode>,
)
