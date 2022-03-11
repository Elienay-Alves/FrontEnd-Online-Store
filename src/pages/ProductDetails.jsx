import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { getProductFromID } from '../services/api';

class ProductDetails extends Component {
  constructor() {
    super();
    this.state = {
      productInfos: '',
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
  });

//   console.log(path);
//   console.log(await getProductFromID(path));
}

render() {
  const { productInfos } = this.state;
  return (
    <div className="product-container">
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
      </div>
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
