import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Redirect } from 'react-router-dom';
import { getProductFromID } from '../services/api';
import Button from '../components/Button';

const TIMEOUT = 500;

class ProductDetails extends Component {
  constructor() {
    super();
    this.state = {
      productInfos: '',
      cartItems: [],
    };
  }

componentDidMount = async () => {
  const { location: { pathname } } = this.props;
  const path = pathname.split('/')[2];

  // Claramente tem outra maneira de conseguir esse id.
  // Por enquanto, será assim!

  const response = await getProductFromID(path);
  this.setState({
    productInfos: response,
    clicked: false,
  });

  setTimeout(() => {
    const savedItems = localStorage.getItem('productCart');
    const parseItem = JSON.parse(savedItems);
    this.setState({
      cartItems: parseItem,
    });
  }, TIMEOUT);

//   console.log(path);
//   console.log(await getProductFromID(path));
}

handleClick = async () => {
  const { cartItems } = this.state;
  const { location: { pathname } } = this.props;
  const path = pathname.split('/')[2];
  const response = await getProductFromID(path);
  this.setState({
    productInfos: response,
  });

  localStorage.setItem('productCart', JSON.stringify([...cartItems, response]));
  this.setState({
    clicked: true,
  });
}

render() {
  const { productInfos, clicked } = this.state;
  return (
    <div className="product-container">
      <Button />
      <div className="product-img-container">
        <img
          src={ productInfos.thumbnail }
          alt={ `Imagem de ${productInfos.title}` }
          className="productImg"
        />
      </div>
      <div className="infos">

        <h3 className="product-h3" data-testid="product-detail-name">
          {' '}
          { productInfos.title }
          {' '}
        </h3>
        <h3 className="product-h3">{` Código do produto: ${productInfos.id}`}</h3>
        <h3 className="product-h3">{`Preço do produto: R$${productInfos.price}`}</h3>
        <h3
          className="product-h3"
        >
          {`Quantidade disponível: ${productInfos.available_quantity}`}
        </h3>
        <button
          type="button"
          data-testid="product-detail-add-to-cart"
          onClick={ this.handleClick }
        >
          Adicionar ao carrinho

        </button>
      </div>
      { clicked ? <Redirect to="/shoppingcard" /> : null }
    </div>
  );
}
}

ProductDetails.propTypes = {
  location: PropTypes.shape({
    pathname: PropTypes.string,
    split: PropTypes.func,
  }).isRequired,
};

export default ProductDetails;
