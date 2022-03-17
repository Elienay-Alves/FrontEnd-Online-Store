import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

class Button extends React.Component {
  render() {
    const { data } = this.props;
    return (
      <div className="btn-container">
        <Link to="/shoppingcard" data-testid="shopping-cart-button">
          <span>🛒</span>

        </Link>
        <h3 data-testid="shopping-cart-product-quantity">
          { data }
        </h3>
      </div>
    );
  }
}

Button.propTypes = {
  data: PropTypes.number.isRequired,
};

export default Button;
