import React, { Component } from 'react';
import Input from './Input';
import Categories from './Categories';

class Home extends Component {
  render() {
    return (
      <div className="container">
        <Categories />
        <Input />
      </div>
    );
  }
}

export default Home;
