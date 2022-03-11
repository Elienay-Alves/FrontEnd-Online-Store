import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

class Card extends Component {
  render() {
    const { search } = this.props;
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
          <p className="">{ search.title }</p>
          <img
            src={ search.thumbnail }
            alt={ search.title }
            className="card-img"
          />
          <p>{ search.price }</p>
        </Link>
      </section>
    );
  }
}

Card.propTypes = {
  search: PropTypes.shape({
    title: PropTypes.string,
    thumbnail: PropTypes.string,
    price: PropTypes.number,
    id: PropTypes.string,
  }).isRequired,
};

export default Card;
