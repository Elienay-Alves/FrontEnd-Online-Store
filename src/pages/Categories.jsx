import React, { Component } from 'react';
import { getCategories, getProductsfromCategory } from '../services/api';
import Card from '../components/Card';

class Categories extends Component {
  constructor(props) {
    super(props);

    this.state = {
      categories: [],
      products: [],
      clicked: false,
    };
  }

  componentDidMount() {
    this.fetchCategory();
  }

  fetchCategory = async () => {
    const requisition = await getCategories();
    this.setState({
      categories: [...requisition],
    });
  }

  handleClick = async ({ target }) => {
    // Adicionei um id ao botão e dei o valor do id à ele pra que, quando a gente clicasse, pudesse pegar esse valor quando passasse o "target.id" e esse valor é exatamente o que devemos passar dentro dessa requisição.

    // console.log(target.id);

    const fetch = await getProductsfromCategory(target.id);
    const { results } = fetch;

    console.log(fetch);

    this.setState({
      products: results,
      clicked: true,
    });
  }

  // ---------------------------------------------------------------------------
  // Tive que modificar a tag de Li's pra button pois precisava de alguma tag que permitia evento de click.

  render() {
    const { categories, clicked, products } = this.state;

    return (
      <div className="categories-container">
        <aside className="categories">
          Categorias:
          {
            categories.map((category) => (
              <button
                key={ category.id }
                data-testid="category"
                type="button"
                className="categoriesBTN"
                onClick={ this.handleClick }
                id={ category.id }
              >
                {category.name}
              </button>))
          }
        </aside>
        <div className="cards-container">
          {!clicked ? null
            : products.map((obj) => <Card key={ obj.id } search={ obj } />)}
          {/* Css foi pro espaço agora, meus jovens! kkkk */}
        </div>
      </div>
    );
  }
}

export default Categories;

// xablau
