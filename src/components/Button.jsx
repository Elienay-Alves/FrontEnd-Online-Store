import React from 'react';
import { Link } from 'react-router-dom';

class Button extends React.Component {
  render() {
    return (
      <div>
        <Link to="/shoppingcard" data-testid="shopping-cart-button">
          🛒
        </Link>
      </div>
    );
  }
}

export default Button;
