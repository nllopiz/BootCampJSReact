//clase3
//Contador, botones incrementar decrementar reset

import ReactDOM from 'react-dom/client';
import { useState } from 'react';

const root = ReactDOM.createRoot(document.getElementById('root'));

//componente que recibe el estado de contadorValue
const DisplayContador = ({valor}) => {
  return (
    <h1>{valor}</h1>
  )
}

const Boton = ({nombre, accion}) => (
  <button onClick={accion}>{nombre}</button>
)

const App = (props) => {
  /*
  const contador = useState(5) //5 valor inicial
  //useState es un arreglo de [valor, función de actualización del valor]
  //lo desestructuramos
  const contadorValue = contador[0]
  const updateContador = contador[1]
  */
  //se puede simplificar
  const [contadorValue, updateContador] = useState(5)

  console.log("repintar el componente")

  /*
  const fnIncrementar = () => {
    updateContador(contadorValue + 1)
  }*/

  /*const fnReset = () => {
    updateContador(0)
  }*/

  const handleClic = (valor) => {
      updateContador(valor === 0 ? 0 : contadorValue + valor)
  }

  const esPar = (contadorValue % 2) === 0
  const mensajePar = esPar ? "Es par" : "Es impar"

  return (
    <div>
      <p>El valor del contador es:</p>
      <DisplayContador valor={contadorValue} />
      <p>{mensajePar}</p>
      {
        /*
        
      <button
        /*
        onClick={() => {
          updateContador(contadorValue + 1)
          //también se puede pasar una función que actualice el valor
          /*
          updateContador(prevContadorValue => {
            return prevContadorValue + 1
          })
          
        }}

        onClick={() => handleClic(1)}
      >
        Incrementar
      </button>
      <button
        onClick={() => handleClic(-1)}
      >
        Decrementar
      </button>
      <button
        onClick={() => handleClic(0)}
      >Reset</button>
      */
      }
      <Boton nombre='Incrementar' accion={() => handleClic(1)}/>
      <Boton nombre='Decrementar' accion={() => handleClic(-1)}/>
      <Boton nombre='Reset' accion={() => handleClic(0)}/>
    </div>
  )
}


root.render(
    <App contadorInicial={5}/>
);

