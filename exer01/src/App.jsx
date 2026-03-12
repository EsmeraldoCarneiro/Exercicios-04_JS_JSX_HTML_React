import './App.css'
import React, { Component } from 'react';
import CompA from './CompA'; // Importando a lógica do componente de função

/**
 * App - Componente de Classe
 * Estende Component para ganhar acesso ao ciclo de vida e renderização do React
 */
class App extends Component {
  
  // O método render() é obrigatório em componentes de classe
  render() {
    // Definindo os dados que serão injetados nas Props do componente filho
    const seuNome = "Esmeraldo";
    const seuSobrenome = "Junior";

    return (
      // Container principal com estilo básico de layout
      <div style={{ padding: '20px', fontFamily: 'sans-serif' }}>
        
        {/* SEÇÃO DO ENUNCIADO: Apenas visual para documentação da atividade */}
        <section style={{ 
          backgroundColor: '#0e0909', 
          padding: '10px', 
          marginBottom: '20px', 
          borderLeft: '5px solid #646cff',
          color: 'white' 
        }}>
          <strong>Enunciado do Exercício:</strong>
          <p>
            Criar CompA (função) com Props, exibir nome e sobrenome.
          </p>
        </section>

        {/* Linha horizontal para separar visualmente o enunciado do resultado */}
        <hr />

        {/* SEÇÃO DA RESOLUÇÃO: Onde a mágica do React acontece */}
        <section style={{ marginTop: '20px' }}>
          <h2 style={{ color: '#333', fontSize: '1.2rem', textTransform: 'uppercase' }}>
            Resolução:
          </h2>
          
          {/* CHAMADA DO COMPONENTE:
            Aqui passamos as variáveis locais para as propriedades (props) do CompA.
            O atributo 'nome' no CompA receberá o valor da variável 'seuNome'.
          */}
          <CompA nome={seuNome} sobrenome={seuSobrenome} />
        </section>

      </div>
    );
  }
}

export default App;