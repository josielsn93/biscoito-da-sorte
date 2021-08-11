import React, { Component } from 'react';
import biscoito from './assets/biscoito.png';
import './estilo.css'

class App extends Component{

  constructor(props){
    super(props);
    this.state = {
      textoFrase: ''
    };

    
    this.frases = ['A persistência é o caminho do êxito.', 'Toda ação humana, quer se torne positiva ou negativa, precisa depender de motivação.','No meio da dificuldade encontra-se a oportunidade.','É parte da cura o desejo de ser curado.','O que me preocupa não é o grito dos maus. É o silêncio dos bons.'];

    this.quebraBiscoito = this.quebraBiscoito.bind(this);
  }

  quebraBiscoito(){
    let state = this.state;
    let numeroAleatorio = Math.floor(Math.random() * this.frases.length);
    state.textoFrase = '"' + this.frases[numeroAleatorio] + '"';
    this.setState(state);
  }

    render(){
        return(
            <div className="container">
                <img src={biscoito} className="img" />
                <Botao nome="Abrir Biscoito" acaoBtn={this.quebraBiscoito}/>
                <h3 className="textoFrase">{this.state.textoFrase}</h3>
            </div>         
        );
    }
}

class Botao extends Component {
  render(){
    return(
      <div>
        <button onClick={this.props.acaoBtn}>{this.props.nome}</button>
      </div>
    )
  }

}
export default App;