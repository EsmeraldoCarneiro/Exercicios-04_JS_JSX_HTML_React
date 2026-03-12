import './App.css'
import React, { Component } from 'react';
import CompA from './CompA'; // Importação do componente reutilizável

class App extends Component {
  render() {
    return (
      <div style={{ padding: '20px', fontFamily: 'sans-serif' }}>
        
        {/* SEÇÃO DO ENUNCIADO: Layout padrão Esmeraldo Junior */}
        <section style={{ 
          backgroundColor: '#0e0909', 
          padding: '10px', 
          marginBottom: '20px', 
          borderLeft: '5px solid #646cff',
          color: 'white' 
        }}>
          <strong>Enunciado do Exercício:</strong>
          <p>
            Criar dois componentes (CompA e App). Reutilizar CompA 4x 
            passando os nomes: Lucas, Carla, Pedro e Beatriz.
          </p>
        </section>

        <hr />

        {/* SEÇÃO DA RESOLUÇÃO */}
        <section style={{ marginTop: '20px' }}>
          <h2 style={{ color: '#333', fontSize: '1.2rem', textTransform: 'uppercase' }}>
            Resolução:
          </h2>
          
          {/* REUTILIZAÇÃO NA PRÁTICA:
            Cada vez que declaramos <CompA />, o React cria uma nova "instância".
            Isso é como chamar uma função várias vezes com argumentos diferentes.
          */}
          <div style={{ padding: '10px', backgroundColor: '#f9f9f9', borderRadius: '5px' }}>
            <CompA nome="Lucas" />   {/* 1ª instância */}
            <CompA nome="Carla" />   {/* 2ª instância */}
            <CompA nome="Pedro" />   {/* 3ª instância */}
            <CompA nome="Beatriz" /> {/* 4ª instância */}
          </div>
        </section>

      </div>
    );
  }
}

export default App;