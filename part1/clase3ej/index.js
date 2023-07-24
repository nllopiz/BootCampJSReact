//clase3ej
//Contador de clics IZQ - DER totales

import ReactDOM from 'react-dom/client';
import { useState } from 'react';
import './index.css'

const AdvNoUsado = () => {
  return <h1>Todavía no se ha usado el contador</h1>
}

const ListaDeClics = ({clics}) => {
  return <p>{clics.join(", ")}</p>
}

const App = (props) => {
  const [contador, actContador] = useState({
    izq: 0,
    der: 0,
  })

  const [clics, actClics] = useState([])

  const clicsIzq = () => {
    actContador({
      ...contador, //traer todas las propiedades del objeto estado
      izq: contador.izq + 1 
    })

    actClics((prevClics) => {
      return [...prevClics, 'L']
    })
  }

  const clicsDer = (event) => {
    //console.log(event)
    actContador({
      ...contador, //traer todas las propiedades del objeto estado
      der: contador.der + 1 
    })

    actClics((prevClics) => {
      return [...prevClics, 'R']
    })
  }

  return (
    <div>
      <span>
        {contador.izq}
      </span>
      <button onClick={clicsIzq}>Izq</button>
      <button onClick={clicsDer}>Der</button>
      <span>
        {contador.der}
      </span>
      <p>Total de clics: {clics.length}</p>
      {clics.length === 0
        ? <AdvNoUsado />
        : <ListaDeClics clics={clics} />
      }
    </div>
  )
}

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
    <App contadorInicial={5}/>
);

