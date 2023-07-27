//ejInfocurso

import { Cursos } from "./components/Cursos";

const App = () => {
  const cursos = [
    {
      id: 1,
      nombre: 'BootCamp JS React',
      partes: [
        {
          id: 1,
          nombre: 'Fundamentos de React',
          ejercicios: 10
        },
        {
          id: 2,
          nombre: 'Usando props para pasar datos',
          ejercicios: 7
        },
        {
          id: 3,
          nombre: 'Estado de un componente',
          ejercicios: 14
        },
        {
          id: 4,
          nombre: 'Redux',
          ejercicios: 11
        }
      ]
    },
    {
      id: 2,
      nombre: 'Node.js',
      partes: [
        {
          id: 1,
          nombre: 'Routing',
          ejercicios: 3
        },
        {
          id: 2,
          nombre: 'Routing2',
          ejercicios: 3
        }
      ]
    }
  ]

  return (
    <Cursos cursos={cursos} />
  );
}

export default App;
