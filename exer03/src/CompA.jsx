import React from 'react';

/**
 * CompA - Componente de Função
 * Este componente é genérico: ele não sabe qual nome vai exibir
 * até que o componente pai (App) passe essa informação via Props.
 */
const CompA = ({ nome }) => {
  return (
    // Estilo inline para garantir que cada nome apareça em uma linha organizada
    <p style={{ 
      fontSize: '1.2rem', 
      margin: '8px 0', 
      color: '#2c3e50',
      borderBottom: '1px solid #eee' // Linha sutil para separar os nomes
    }}>
      {/* O texto "Nome:" é estático, enquanto {nome} é o dado dinâmico */}
      <strong>Nome:</strong> {nome}
    </p>
  );
};

// Exportamos para que possa ser importado no App.jsx
export default CompA;