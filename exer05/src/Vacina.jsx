import React, { Component } from 'react';

/**
 * Componente Vacina
 * @extends Component - Herda as funcionalidades base do React para classes
 */
class Vacina extends Component {
  render() {
    /* Acessamos os dados vindos do componente pai através de 'this.props'.
       A desestruturação abaixo retira a propriedade 'nome' do objeto de props.
    */
    const { nome } = this.props;

    return (
      // Container com estilo inline para destacar a mensagem
      <div style={{ 
        padding: '15px', 
        backgroundColor: '#f4fbf7', 
        borderLeft: '5px solid #2ecc71',
        borderRadius: '5px' 
      }}>
        {/* O texto entre chaves {nome} é substituído pelo valor real 
           passado pelo App.jsx (neste caso, "Coronavac").
        */}
        <p style={{ margin: 0, fontSize: '1.1rem' }}>
          <strong>{nome}</strong> é uma das vacinas contra a Covid-19.
        </p>
      </div>
    );
  }
}

// Exportamos o componente para que o sistema possa utilizá-lo em outros locais
export default Vacina;