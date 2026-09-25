// Write your code here
const products = ["Laptop", "Phone", "Headphones", "Monitor"];


function logFirstProduct() {
  console.log(products[0]);
}

function addProduct(item) {
  products.push(item);
}


function updateProductName(position, updatedName) {
if (position >= 0 && position < products.length) {
    products[position] = updatedName;
  } else {
    console.error(`Position ${position} out of bounds`);
  }
}

function removeLastProduct() {
  products.pop();
}


// Export the necessary parts for testing
module.exports = {
  logFirstProduct: typeof logFirstProduct !== 'undefined' ? logFirstProduct : undefined,
  addProduct: typeof addProduct !== 'undefined' ? addProduct : undefined,
  updateProductName: typeof updateProductName !== 'undefined' ? updateProductName : undefined,
  removeLastProduct: typeof removeLastProduct !== 'undefined' ? removeLastProduct : undefined,
  products
};