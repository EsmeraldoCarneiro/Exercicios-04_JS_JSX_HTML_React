import React from 'react';

/**
 * CompA - Componente de Função
 * @param {Object} props - Objeto contendo as propriedades passadas pelo pai
 * Aqui usamos a 'desestruturação' para extrair nome e sobrenome direto do objeto
 */
const CompA = ({ nome, sobrenome }) => {
  return (
    // O estilo inline usa camelCase (marginTop em vez de margin-top)
    <h2 style={{ color: '#646cff', marginTop: '10px' }}>
      {/* As chaves {} indicam ao JSX que deve executar código JavaScript (variáveis) */}
      Olá, {nome} {sobrenome}
    </h2>
  );
};

// Exportação padrão para que o App.jsx consiga importá-lo
export default CompA;