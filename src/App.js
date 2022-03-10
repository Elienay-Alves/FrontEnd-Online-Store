import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import ShoppingCard from './components/ShoppingCard';
import Categories from './components/Categories';
import Home from './components/Home';

class App extends React.Component {
  render() {
    return (
      <div>
        <BrowserRouter>
          <Switch>
            <Route exact path="/" component={ Home } />
            <Route path="/shoppingcard" component={ ShoppingCard } />
            <Route path="/categories" component={ Categories } />
          </Switch>
        </BrowserRouter>
      </div>

    );
  }
}
// Olá

export default App;
