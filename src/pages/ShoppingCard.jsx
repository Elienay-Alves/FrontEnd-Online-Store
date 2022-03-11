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

  removeItem = ({ target }) => {
    // const { cartItems } = this.state;
    // console.log(target.id);
    const oldList = localStorage.getItem('productCart');
    const parseItem = JSON.parse(oldList);

    const filterList = parseItem.filter((elem) => elem.id !== target.id);
    this.setState(({
      cartItems: filterList,
    }));
    localStorage.setItem('productCart', JSON.stringify([...filterList]));

    console.log(filterList);
  }

  increaseItem = ({ target }) => {
    const { cartItems } = this.state;
    const oldList = localStorage.getItem('productCart');
    const parseItem = JSON.parse(oldList);

    const increase = parseItem.find((elem) => elem.id === target.id);
    this.setState((before) => ({
      cartItems: [...before.cartItems, increase],
    }));
    localStorage.setItem('productCart', JSON.stringify([...cartItems]))
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
            <div>
              <Button data={ cartItems.length } />
              { cartItems.map((obj) => (
                <div
                  key={ obj.id }
                  className="cards-container"
                >
                  <button
                    type="button"
                    onClick={ this.removeItem }
                    id={ obj.id }
                  >
                    X

                  </button>
                  <Card
                    search={ obj }
                    onClick={ onclick }
                  />
                  <button
                    type="button"
                    id={ obj.id }
                    data-testid="product-increase-quantity"
                    onClick={ this.increaseItem }
                  >
                    Mais

                  </button>
                  <button
                    type="button"
                    id={ obj.id }
                    data-testid="product-decrease-quantity"
                  >
                    Menos

                  </button>
                </div>
              ))}
            </div>
          )}
      </div>
    );
  }
}

export default ShoppingCard;
