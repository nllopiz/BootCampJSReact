//ejUnicafe

import ReactDOM from 'react-dom/client';
import './index.css'
import { useState } from 'react';

const Boton = ({nombre, accion}) => (
  <button onClick={accion}>{nombre}</button>
)

const ItemEstadistica = ({nombre, valor}) => {
  return (
    <tr>
      <td>{nombre}</td><td>{valor}</td>
    </tr>
  )
}

const Estadisticas = ({good, neutral, bad, suma}) => {
  return (
    <div>
      <h3>Estadísticas</h3>
      <table>
        <tbody>
          <ItemEstadistica nombre='Bueno' valor={good}/>
          <ItemEstadistica nombre='Neutro' valor={good}/>
          <ItemEstadistica nombre='Malo' valor={good}/>
          <ItemEstadistica nombre='Total' valor={good + neutral + bad}/>
          <ItemEstadistica nombre='Promedio' valor={suma === 0 ? 0 : suma / (good + neutral + bad)}/>
          <ItemEstadistica nombre='%Bueno' valor={good === 0 ? 0 : good / (good + neutral + bad) * 100}/>
        </tbody>
      </table>
    </div>
  )
}

const SinValores = () => <h3>Sin opiniones</h3>

const App = () => {
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  const [suma, setSuma] = useState(0)

  const handleClick = (valor) => {
    //console.log(valor)
    
    if(valor === 1) {
      setGood(good + 1)
      setSuma(suma + 1)
    }
    if(valor === 0) {
      setNeutral(neutral + 1)
      setSuma(suma + 0)
    }
    if(valor === -1) {
      setBad(bad + 1)
      setSuma(suma - 1)
    }
  }

  
  return (
    <div>
      <h1>Unicafé</h1>
      <h3>Dános tu opinión</h3>
      <Boton nombre='Bueno' accion={() => handleClick(1)} />
      <Boton nombre='Neutro' accion={() => handleClick(0)} />
      <Boton nombre='Malo' accion={() => handleClick(-1)} />
      {good === 0 && neutral === 0 && bad === 0 
        ? <SinValores />
        : <Estadisticas good={good} neutral={neutral} bad={bad} suma={suma} />
      }
    </div>
  )
}

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
    <App />
);

