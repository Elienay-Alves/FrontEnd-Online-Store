import React from 'react';

class ShoppingCard extends React.Component {
  render() {
    return (
      <div>
        <span data-testid="shopping-cart-empty-message">Seu carrinho está vazio</span>
      </div>
    );
  }
}

export default ShoppingCard;
