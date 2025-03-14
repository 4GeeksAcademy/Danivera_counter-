import React from 'react'
import ReactDOM from 'react-dom/client'

//Bootstrap
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap"

// index.css'
import '../styles/index.css'

// components
//import Home from './components/Home';
import SecondsCounter from './components/SecondCounter.jsx';

const root = ReactDOM.createRoot(document.getElementById('root'))//acceder a todas las props

let counter = 0;//variable

function updateCounter() {
  root.render(<SecondsCounter seconds={counter} />)//funcion secundero
  counter++
}

setInterval(updateCounter, 1000) //=1s

updateCounter()//llamada x primera vez para renderizar