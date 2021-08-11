import React from 'react';

const Equipe = (props) => {
  return(
    <div>
      <Sobre nome={props.nome} 
      cargo={props.cargo} 
      idade={props.idade}/>
      <Social fb={props.facebook}/>
      <hr />
    </div>
    
  );
}

const Sobre = (props) => {
  return(
    <div>
      <h2>Olá eu sou o {props.nome}</h2>
      <h3>Cargo: {props.cargo}</h3>
      <h3>Idade: {props.idade}</h3>
    </div>
  );
}
const Social = (props) => {
  return(
    <div>
      <a href={props.fb}> Facebook </a>
      <a>Twitter </a>
      <a>Instagram</a>
    </div>
  )
}

function App (){
  return (
    <div>
      <h1>Conheça nossa Equipe</h1>
      <Equipe nome="Josiel" cargo="Front-end" idade ="28" facebook="#"/>
      <Equipe nome="João" cargo="Back-end" idade ="18" facebook="https://pt-br.facebook.com/"/>
      <Equipe nome="Amanda" cargo="Atendimento" idade ="28" facebook="https://pt-br.facebook.com/"/>
    </div>
  );
}

export default App;