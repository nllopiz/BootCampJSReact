//ejInfocurso

const App = () => {

  /*
  const curso = 'BootCamp JS React'
  
  const parte1 = {
    nombre: 'Fundamentos de React',
    ejercicios: 10
  }
  const parte2 = {
    nombre: 'Usando props para pasar datos',
    ejercicios: 7
  }
  const parte3 = {
    nombre: 'Estado de un componente',
    ejercicios: 14
  }
  */
  const curso = {
    nombre: 'BootCamp JS React',
    partes: [
      {
        nombre: 'Fundamentos de React',
        ejercicios: 10
      },
      {
        nombre: 'Usando props para pasar datos',
        ejercicios: 7
      },
      {
        nombre: 'Estado de un componente',
        ejercicios: 14
      }
    ]
  }

  const Header = ({ curso }) => {
    return (
      <h1>{curso.nombre}</h1>
    );
  }

  const Parte = ({ parte }) => {
    return (
      <p>
        {parte.name} - Ejercicios: {parte.ejercicios}
      </p>
    );
  }

  const Contenido = ({ curso }) => {
    return (
      <div>
        <Parte parte={curso.partes[0]} />
        <Parte parte={curso.partes[1]} />
        <Parte parte={curso.partes[2]} />
      </div>
    );
  }

  const Total = ({ partes }) => {
    return (
      <p>Cantidad total de ejercicios
        {
          curso.partes[0].ejercicios +
          curso.partes[1].ejercicios +
          curso.partes[2].ejercicios
        }</p>
    );
  }

  return (
    <div>
      <Header curso={curso} />
      <Contenido curso={curso} />
      <Total partes={curso} />
    </div>
  );
}

export default App;
