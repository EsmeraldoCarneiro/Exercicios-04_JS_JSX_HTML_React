import './App.css'
import React, { Component } from 'react';
import Vacina from './Vacina'; // Importamos o componente de classe recém-criado

class App extends Component {
  render() {
    // Definimos o dado que queremos exibir conforme o exercício
    const vacinaSelecionada = "Coronavac";

    return (
      <div style={{ padding: '20px', fontFamily: 'sans-serif' }}>
        
        {/* SEÇÃO DO ENUNCIADO: Mantendo sua identidade visual de desenvolvedor */}
        <section style={{ 
          backgroundColor: '#0e0909', 
          padding: '10px', 
          marginBottom: '20px', 
          borderLeft: '5px solid #646cff',
          color: 'white' 
        }}>
          <strong>Enunciado do Exercício:</strong>
          <p>
            Criar componente de classe "Vacina" com Props "nome". 
            Definir valor "Coronavac" e exibir mensagem informativa.
          </p>
        </section>

        <hr />

        {/* SEÇÃO DA RESOLUÇÃO */}
        <section style={{ marginTop: '20px' }}>
          <h2 style={{ color: '#333', fontSize: '1.1rem', textTransform: 'uppercase' }}>
            Resolução:
          </h2>
          
          {/* CHAMADA DO COMPONENTE:
              Atribuímos o valor da nossa constante 'vacinaSelecionada' 
              à propriedade 'nome' do componente Vacina.
          */}
          <Vacina nome={vacinaSelecionada} />
        </section>

      </div>
    );
  }
}

export default App;