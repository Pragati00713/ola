import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import Nav from './Nav.jsx'
import Home from './Home.jsx'
import Cont from './Cont.jsx'
import Blue from './Blue.jsx'
import Design from './Design.jsx'
import Petrol from './Petrol.jsx'
import S from './S.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
    <Nav />
    <Home />
    <Cont />
    <Blue />
    <Design />
    <Petrol />
    <S />
  </React.StrictMode>,
)
