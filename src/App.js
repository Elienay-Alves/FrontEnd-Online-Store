import React from 'react';
import Input from './components/Input';
import Category from './components/Categories';

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <Input />
        <Category />
      </div>
    );
  }
}

export default App;
