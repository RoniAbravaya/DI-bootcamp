// shop.js

// Requiring the product objects from the products.js module
const products = require('./products.cjs');

// Function to search for a product by name
function findProductByName(productName) {
  const product = products.find(prod => prod.name === productName);
  return product ? product : 'Product not found';
}

// Calling the function with different product names and printing the details
console.log(findProductByName('Product 1'));
console.log(findProductByName('Product 2'));
console.log(findProductByName('Product 5')); // This should return 'Product not found'
