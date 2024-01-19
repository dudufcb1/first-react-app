/** @format */

import './App.css';
import Testimonio from './componentes/Testimonio';
import data from './data/Index';

function App() {
  return (
    <div className='App'>
      <div className='contenedor-principal'>
        <h1>Esto es lo que dicen nuestros alumnos sobre freeCodeCamp</h1>
        {data.map((testimonio) => {
          return <Testimonio key={testimonio.nombre} {...testimonio} />;
        })}
      </div>
    </div>
  );
}

export default App;
