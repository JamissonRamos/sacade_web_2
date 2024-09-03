import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import Base from './styles/Base.js'
import Reset from './styles/Reset.js'
import 'bootstrap/dist/css/bootstrap.min.css';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Reset />
    <Base />
    <App />
  </StrictMode>,
)
