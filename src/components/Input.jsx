import React from 'react';
import Button from './Button';

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
        <label data-testid="home-initial-message" htmlFor="initial-message">
          Digite algum termo de pesquisa ou escolha uma categoria.
          <input
            type="text"
            id="initial-message"
            name="input-text"
            value={ value }
            onChange={ this.handleChangeInput }
            data-testid="query-input"
          />
        </label>

        <div>
          <Button />
        </div>
      </div>
    );
  }
}

export default Input;
