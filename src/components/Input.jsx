import React from 'react';

class Input extends React.Component {
  constructor() {
    super();

    this.state = {
      value: '',
    };
  }

  handleChangeInput = ({ target }) => {
    const { value } = target;
    this.setState({
      value,
    });
  }

  render() {
    const { value } = this.state;
    return (
      <div>
        <input
          type="text"
          name="input-text"
          value={ value }
          onChange={ this.handleChangeInput }
        />
        <h1 data-testid="home-initial-message">
          Digite algum termo de pesquisa ou escolha uma categoria.
        </h1>
      </div>
    );
  }
}

export default Input;
