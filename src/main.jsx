import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import 'mdb-react-ui-kit/dist/css/mdb.min.css';
import "@fortawesome/fontawesome-free/css/all.min.css";
import App from './App.jsx'
import './index.css'
import Base from './styles/Base.js'
import Reset from './styles/Reset.js'
import 'bootstrap/dist/css/bootstrap.min.css';
//StrictMode
createRoot(document.getElementById('root')).render(
  <>
    <Reset />
    <Base />
    <App />
  </>,
)
