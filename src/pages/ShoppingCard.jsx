import React from 'react';
import Card from '../components/Card';

class ShoppingCard extends React.Component {
  constructor() {
    super();

    this.state = {
      cartItems: [],
    };
  }

  componentDidMount = () => {
    this.getSavedCartItems();
  }

  getSavedCartItems = () => {
    const savedItems = localStorage.getItem('productCart');
    const parseItem = JSON.parse(savedItems);
    this.setState({
      cartItems: parseItem,
    });
  }

  render() {
    const { cartItems } = this.state;
    const savedItems = localStorage.getItem('productCart');
    return (
      <div>
        { !savedItems ? (
          <div>
            <span data-testid="shopping-cart-empty-message">
              Seu carrinho está vazio
            </span>
          </div>
        )
          : (
            <div className="cards-container">
              { cartItems.map((obj) => (
                <Card
                  key={ obj.id }
                  search={ obj }
                  onClick={ this.handleClickCard }
                />
              ))}
            </div>
          )}
      </div>
    );
  }
}

export default ShoppingCard;
