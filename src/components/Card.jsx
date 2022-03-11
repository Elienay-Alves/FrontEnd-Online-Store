import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Card extends Component {
  render() {
    const { search } = this.props;
    return (
      <section data-testid="product" className="card">
        <p className="">{ search.title }</p>
        <img
          src={ search.thumbnail }
          alt={ search.title }
          className="card-img"
        />
        <p>{ search.price }</p>
      </section>
    );
  }
}

Card.propTypes = {
  search: PropTypes.shape({
    title: PropTypes.string,
    thumbnail: PropTypes.string,
    price: PropTypes.number,
  }).isRequired,
};

export default Card;
