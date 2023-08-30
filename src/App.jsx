import React, { useState } from 'react';
import TabelaImc from './Components/TabelaImc';
import Peso from './Components/Peso';
import Altura from './Components/Altura';
import Calcular from './Components/Calcular';
import ResultadoFinal from './Components/ResultadoFinal';


function App() {
  const [peso1, setPeso] = useState('');
  const [altura1, setAltura] = useState('');
  const [resultado, setResultado] = useState(0);

  return (
    <>
      <div className='header'>
        <h1>Calculadora IMC</h1>
      </div>
      <Peso peso1={peso1} setPeso={setPeso} />
      <Altura altura1={altura1} setAltura={setAltura} />
      <Calcular peso1={peso1} altura1={altura1} setResultado={setResultado} />
      <ResultadoFinal resultado={resultado} />
      <TabelaImc />
      
    </>
  );
}

export default App;
