import React, { Component } from 'react';
import * as api from '../services/api';

class Categories extends Component {
  constructor(props) {
    super(props);

    this.state = {
      categories: [],
    };
  }

  componentDidMount() {
    this.fetchCategory();
  }

  fetchCategory = async () => {
    const requisition = await api.getCategories();
    this.setState({
      categories: [...requisition],
    });
  }

  render() {
    const { categories } = this.state;

    return (
      <aside>
        <ul>
          Categorias:
          {
            categories.map((category) => (
              <li key={ category.id } data-testid="category">
                {category.name}
              </li>))
          }
        </ul>
      </aside>
    );
  }
}

export default Categories;

// xablau
