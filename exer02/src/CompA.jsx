import React, { Component } from 'react';

/**
 * CompA - Componente de Classe
 * Em classes, as props são acessadas via 'this.props'
 */
class CompA extends Component {
  render() {
    // Extraindo nome e sobrenome de this.props para facilitar o uso
    const { nome, sobrenome } = this.props;

    return (
      <h2 style={{ color: '#646cff', marginTop: '10px' }}>
        Olá, {nome} {sobrenome}
      </h2>
    );
  }
}

export default CompA;