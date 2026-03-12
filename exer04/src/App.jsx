import './App.css'
import React, { Component } from 'react';
import Adicao from './Adicao'; // Importando o componente de lógica matemática

class App extends Component {
  render() {
    // Definindo os valores numéricos para a operação
    const valorX = 7;
    const valorY = 23;

    return (
      <div style={{ padding: '20px', fontFamily: 'sans-serif' }}>
        
        {/* SEÇÃO DO ENUNCIADO: Padrão Esmeraldo Junior */}
        <section style={{ 
          backgroundColor: '#0e0909', 
          padding: '10px', 
          marginBottom: '20px', 
          borderLeft: '5px solid #646cff',
          color: 'white' 
        }}>
          <strong>Enunciado do Exercício:</strong>
          <p>
            Faça uma aplicação React com um componente de classe chamado "Adicao", 
            com as Props "x" e "y". Atribua os valores 7 e 23 e mostre o resultado da soma.
          </p>
        </section>

        <hr />

        {/* SEÇÃO DA RESOLUÇÃO */}
        <section style={{ marginTop: '20px' }}>
          <h2 style={{ color: '#dbd8d8', fontSize: '1.2rem', textTransform: 'uppercase' }}>
            Resolução:
          </h2>
          
          <div style={{ 
            backgroundColor: '#eef2ff', 
            border: '1px solid #646cff', 
            borderRadius: '8px',
            display: 'inline-block',
            padding: '5px 20px'
          }}>
            {/* Passando os números como Props. 
                Usamos {} para garantir que o React entenda como Number e não String.
            */}
            <Adicao x={valorX} y={valorY} />
          </div>
        </section>

      </div>
    );
  }
}

export default App;