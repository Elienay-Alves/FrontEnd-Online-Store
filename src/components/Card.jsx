import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Card extends Component {
  render() {
    const { search } = this.props;
    return (
      <section data-testid="product">
        <p>{ search.title }</p>
        <img src={ search.thumbnail } alt={ search.title } />
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
