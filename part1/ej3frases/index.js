//ej3frases

import ReactDOM from 'react-dom/client';
import './index.css'
import { useState } from 'react';

const frases = [
  'If it hurts, do it more often',
  'Adding manpower to a late software project makes it later!',
  'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
  'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
  'Premature optimization is the root of all evil.',
  'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.'
]

const Boton = ({nombre, accion}) => (
  <button onClick={accion}>{nombre}</button>
)

const Frase = ({selected, frases, votos}) => {
  return (
    <div>
      
      
      <p>{frases[selected]}</p>
      <h3>Votos: {votos[selected]}</h3>
    </div>
  )
}

const App = (props) => {

  const numeroAleatorio = () => {
    return Math.floor(Math.random() * frases.length)
  }

  const [selected, setSelected] = useState(numeroAleatorio())  
  const [votos, setVotos] = useState(Array(frases.length).fill(0))

  const cambiarNumero = () => {
    setSelected(numeroAleatorio())
  }

  const votar = () => {
    const votosC = [...votos]
    votosC[selected] += 1
    setVotos(votosC)
    
  }  
  
  const masVotado = () => {
    const maxVotos = Math.max(...votos)
    const indice = votos.findIndex(voto => voto === maxVotos)
    return indice
  }

  return (
    <div>
      <h1>Frase del día</h1>
      <h2>Frase {selected + 1}</h2>
      <Frase frases={frases} selected={selected} votos={votos}/>
      <Boton nombre='Votar' accion={votar}/><br/><br/>
      <Boton nombre='Siguiente frase' accion={cambiarNumero}/>
      <h1>Frase más votada</h1>
      <Frase frases={frases} selected={masVotado()} votos={votos}/>
    </div>
  )
}

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
    <App frases={frases}/>
);