import './App.css'
import React, { Component } from 'react';
import CompA from './CompA'; // Importando o componente de classe

class App extends Component {
  render() {
    // Seus dados definidos no componente pai
    const seuNome = "Esmeraldo";
    const seuSobrenome = "Junior";

    return (
      <div style={{ padding: '20px', fontFamily: 'sans-serif' }}>
        
        {/* SEÇÃO DO ENUNCIADO: Mantendo o seu padrão visual */}
        <section style={{ 
          backgroundColor: '#0e0909', 
          padding: '10px', 
          marginBottom: '20px', 
          borderLeft: '5px solid #646cff',
          color: 'white' 
        }}>
          <strong>Enunciado do Exercício (Versão Classe):</strong>
          <p>
            Faça uma aplicação React com um componente de <strong>classe</strong> chamado "CompA", 
            com as Props "nome" e "sobrenome". Utilize o seu nome e sobrenome 
            para definir os valores das Props e mostre a mensagem: 
            Olá, (nome)(sobrenome).
          </p>
        </section>

        <hr />

        {/* SEÇÃO DA RESOLUÇÃO */}
        <section style={{ marginTop: '20px' }}>
          <h2 style={{ color: '#333', fontSize: '1.2rem', textTransform: 'uppercase' }}>
            Resolução:
          </h2>
          
          {/* Passagem de props para o componente de classe. 
            O funcionamento para quem chama (o pai) é idêntico ao componente de função.
          */}
          <CompA nome={seuNome} sobrenome={seuSobrenome} />
        </section>

      </div>
    );
  }
}

export default App;