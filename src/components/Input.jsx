import React from 'react';
import { getProductsFromTerm } from '../services/api';
import Card from './Card';

class Input extends React.Component {
  constructor() {
    super();

    this.state = {
      value: '',
      results: [],
      xablau: false,
    };
  }

  handleChangeInput = ({ target }) => {
    const { value } = target;
    this.setState({
      value,
    });
  }

  handleClick = async (e) => {
    const { value } = this.state;
    e.preventDefault();
    const response = await getProductsFromTerm(value);
    const result = response.results;
    console.log(result);
    this.setState({
      results: result,
      xablau: true,
    });
  }

  render() {
    const { value, results, xablau } = this.state;
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
          <button
            type="submit"
            data-testid="query-button"
            onClick={ this.handleClick }
          >
            Pesquisar
          </button>
        </label>
        {xablau ? results.map((obj) => <Card search={ obj } key={ obj.id } />) : null }
      </div>
    );
  }
}

export default Input;
