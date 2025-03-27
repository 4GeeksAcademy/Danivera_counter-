import React from 'react'
import ReactDOM from 'react-dom/client'

//Bootstrap
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap"

// index.css'
import '../styles/index.css';

// components

import SecondCounter from './components/SecondCounter.jsx';

const root = ReactDOM.createRoot(document.getElementById('root'));//acceder a todas las props?

let counter = 0;//variable

function updateCounter() {
  root.render(<SecondCounter seconds={counter} />)//funcion secundero?
  counter++
}

setInterval(updateCounter, 1000) //=1s?

updateCounter()//llamada f(x) x primera vez para renderizar

