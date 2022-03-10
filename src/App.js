import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Input from './components/Input';
import ShoppingCard from './components/ShoppingCard';
import { getProductsFromTerm } from './services/api';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      search: '',
      items: [],
    };
  }

  handleClick = (e) => {
    const { search } = this.state;
    e.preventDefault();
    const teste = getProductsFromTerm(search);
    console.log(teste);
  }

  render() {
    return (
      <div>
        <BrowserRouter>
          <Switch>
            <Route exact path="/" component={ Input } />
            <Route path="/shoppingcard" component={ ShoppingCard } />
          </Switch>
        </BrowserRouter>
      </div>

    );
  }
}

export default App;
