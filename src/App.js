import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import ShoppingCard from './pages/ShoppingCard';
import Categories from './pages/Categories';
import Home from './pages/Home';
import ProductDetails from './pages/ProductDetails';

class App extends React.Component {
  render() {
    return (
      <div>
        <BrowserRouter>
          <Switch>
            <Route
              exact
              path="/"
              render={ (props) => <Home { ...props } /> }
            />
            <Route
              path="/shoppingcard"
              render={ (props) => <ShoppingCard { ...props } /> }
            />
            <Route
              path="/categories"
              render={ (props) => <Categories { ...props } /> }
            />
            <Route
              path="/productDetails"
              render={ (props) => <ProductDetails { ...props } /> }
            />
          </Switch>
        </BrowserRouter>
      </div>

    );
  }
}

export default App;
