const searchInput = document.querySelector('#search-input');
const searchButton = document.querySelector('#search-button');
const resultsContainer = document.querySelector('#results-container');

searchButton.addEventListener('click', () => {
  const searchTerm = searchInput.value.trim();
  console.log('buttonisclick')
  // Make a GET request to the API
  fetch(`https://dummyjson.com/products/category=${searchTerm}`)
    .then(response => response.json())
    .then(data => {
      // Clear previous results
      resultsContainer.innerHTML = '';
       console.log(searchTerm)
      // Display results
      data.forEach(product => {
        const productElement = document.createElement('div');
        productElement.classList.add('product');
        productElement.innerHTML = `
          <img src="${product.image}" alt="${product.name}">
          <h3>${product.name}</h3>
          <p>${product.price}</p>
        `;
        resultsContainer.appendChild(productElement);
      });
    })
    .catch(error => console.error(error));
});