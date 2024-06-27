import Boton from './componentes/boton';
import Pantalla from './componentes/pantalla';
import './App.css';
import Botonclear from './componentes/boton-clear';
import Botonborrar from './componentes/boton-borrar';
import { useState } from 'react';
import { evaluate } from 'mathjs';

function App() {

  const [input, setInput ] = useState ('');

  const agregarInput = val => {
    setInput(input + val)
  };

  const calcular = () => {
    if (input ) {
    setInput(evaluate(input))
    } else {
      alert("Porfavor ingrese un valor")
    }
  };


  

  return (
    <div className="App">
      <div className='Contenedor-titulo'>
      <h1>Calculadora</h1>
      </div>
      <div className='contenedor-principal'>
        <Pantalla 
        input= {input}/>
        <div className='Fila'>
          <Boton manejarclick= {agregarInput}>1</Boton>
          <Boton manejarclick= {agregarInput}>2</Boton>
          <Boton manejarclick= {agregarInput}>3</Boton>
          <Boton manejarclick= {agregarInput}>+</Boton>
        </div>
        <div className='Fila'>
          
          <Boton manejarclick= {agregarInput}>4</Boton>
          <Boton manejarclick= {agregarInput}>5</Boton>
          <Boton manejarclick= {agregarInput}>6</Boton>
          <Boton manejarclick= {agregarInput}>-</Boton>
        </div>
        <div className='Fila'>
          <Boton manejarclick= {agregarInput}>7</Boton>
          <Boton manejarclick= {agregarInput}>8</Boton>
          <Boton manejarclick= {agregarInput}>9</Boton>
          <Boton manejarclick= {agregarInput}>*</Boton>
        </div>
        <div className='Fila'>
          <Boton manejarclick= {calcular}>=</Boton>
          <Boton manejarclick= {agregarInput}>0</Boton>
          <Boton manejarclick= {agregarInput}>.</Boton>
          <Boton manejarclick= {agregarInput}>/</Boton>
        </div>
        <div className='Fila'>
          <Botonclear manejarclick={() => setInput('')}>Clear</Botonclear>
          <Botonborrar manejarclick={() => setInput(input.slice(0,-1) )}>Borrar</Botonborrar>

        </div>
      </div>
    </div>
  );
}

export default App;
