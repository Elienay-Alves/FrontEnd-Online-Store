import React from 'react';
import Button from '../components/Button';
import Card from '../components/Card';

const TIMEOUT = 500;

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
    setTimeout(() => {
      const savedItems = localStorage.getItem('productCart');
      const parseItem = JSON.parse(savedItems);
      this.setState({
        cartItems: parseItem,
      });
    }, TIMEOUT);
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
              <Button data={ cartItems.length } />
              { cartItems.map((obj) => (
                <Card
                  key={ obj.id }
                  search={ obj }
                  onClick={ onclick }
                />
              ))}
            </div>
          )}
      </div>
    );
  }
}

export default ShoppingCard;
