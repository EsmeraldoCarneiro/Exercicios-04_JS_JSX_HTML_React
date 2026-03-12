import React, { Component } from 'react';

/**
 * Componente de Classe: Adicao
 * Responsável por receber dois números via props e exibir a soma.
 */
class Adicao extends Component {
  render() {
    // Destruturação das props x e y
    const { x, y } = this.props;
    
    // Realizando o cálculo aritmético antes do return
    const resultado = x + y;

    return (
      <div style={{ fontSize: '1.4rem', color: '#2c3e50', padding: '10px' }}>
        {/* Exibindo a expressão completa com os valores e o resultado */}
        O resultado de {x} + {y} = <strong>{resultado}</strong>
      </div>
    );
  }
}

export default Adicao;