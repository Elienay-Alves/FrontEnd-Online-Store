export async function getCategories() {
  // Implemente aqui
  try {
    const URL = 'https://api.mercadolibre.com/sites/MLB/categories';
    const promise = await fetch(URL);
    const response = await promise.json();
    console.log(response);
    return response;
  } catch (err) {
    return Error(err);
  }
}

export async function getProductsFromCategoryAndQuery(categoryId, query) {
  // Implemente aqui! Quando o fizer, descomente os parâmetros que essa função recebe
  try {
    const URL = `https://api.mercadolibre.com/sites/MLB/search?category=${categoryId}&q=${query}`;
    const promise = await fetch(URL);
    const response = await promise.json();
    console.log(response);
    return response;
  } catch (err) {
    return Error(err);
  }
}
