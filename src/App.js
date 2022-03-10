import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import SearchBar from './components/SearchBar';
import ShoppingCard from './components/ShoppingCard';
import Input from './components/Input';
import Category from './components/Categories';

class App extends React.Component {
  render() {
    return (
      <>
        <div>
          <BrowserRouter>
            <Switch>
              <Route exact path="/" component={ SearchBar } />
              <Route path="/shoppingcard" component={ ShoppingCard } />
            </Switch>
          </BrowserRouter>
        </div>
        <div className="App">
          <Input />
          <Category />
        </div>
      </>
    );
  }
}

export default App;
