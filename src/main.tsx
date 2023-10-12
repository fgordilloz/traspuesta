import React from 'react'
import ReactDOM from 'react-dom/client'
import { ThemeProvider } from './components/theme-provider.tsx'
import App from './App.tsx'
import './index.css'


ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ThemeProvider defaultTheme='light' storageKey="traspuesta-ui-theme">
      <App />
    </ThemeProvider>

  </React.StrictMode>,
)
