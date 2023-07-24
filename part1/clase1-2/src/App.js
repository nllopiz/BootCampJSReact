import './App.css';
import Mensaje from './componentes/Mensaje';

const Descripcion = () => {
  return <p>
    Esta es la app del curso fullstack bootcamp
  </p>
}

const App = () => {
  return (
    <div className="App">
      <Mensaje color='red' message='Estamos trabajando'/>
      <Mensaje color='green' message='En un curso'/>
      <Mensaje color='blue' message='De React'/>
      <Descripcion />
    </div>
  );
}

export default App;
