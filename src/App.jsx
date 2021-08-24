import React from 'react';
import './App.css';

const lista = [
  {id: 1,
    nome: 'Lucas',
  },

  {id: 2,
    nome: 'Felipe',
  },

  {id: 3,
    nome: 'Cosmo',
  }

]

function Pessooas(props){
  return(
    
     lista.map(
       (item,index) => (
         <p>{item.id} {item.nome}</p>
       )
     )
)
}



function Inicial (props){
  return (
    <div>
    <h1>Função Inicial - Versão : {props.versao}</h1>
    <h2>Curso : {props.curso}</h2>
    <Pessooas/>
    </div>
  )
}

function App() {
  return (
    <main>
     <h1>React JS , Hello Word!</h1>

        <Inicial versao='1' curso='React Js'/>
        <Pessooas/>
    </main>
  );
}

export default App;