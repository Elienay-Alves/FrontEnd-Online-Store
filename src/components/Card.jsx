import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

class Card extends Component {
  constructor() {
    super();

    this.state = {
      value: '',
    };
  }

  handleChange = (e) => {
    this.setState({
      value: e.target.value,
    });
    console.log(this.props);
  }

  render() {
    const { value } = this.state;
    const { search, onClick } = this.props;
    return (
      <section
        data-testid="product"
        className="card"
        id={ search.id }
      >
        <Link
          to={ `/ProductDetails/${search.id}` }
          data-testid="product-detail-link"
        >
          <p
            data-testid="shopping-cart-product-name"
          >
            { search.title }

          </p>
          <img
            src={ search.thumbnail }
            alt={ search.title }
            className="card-img"
          />
          <p>{ search.price }</p>
          <p>
            {' '}
            { value }
            {' '}
          </p>
        </Link>
        <div>
          <button
            type="button"
            data-testid="product-add-to-cart"
            id={ search.id }
            onClick={ onClick }
          >
            Add to cart
          </button>
          <input
            type="number"
            value={ value }
            onChange={ this.handleChange }
          />
        </div>

      </section>
    );
  }
}

Card.propTypes = {
  onClick: PropTypes.func.isRequired,
  search: PropTypes.shape({
    title: PropTypes.string,
    thumbnail: PropTypes.string,
    price: PropTypes.number,
    id: PropTypes.string,
  }).isRequired,
};

export default Card;
