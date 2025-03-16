// Write your code here



// Export the necessary parts for testing
module.exports = {
  logFirstProduct: typeof logFirstProduct !== 'undefined' ? logFirstProduct : undefined,
  addProduct: typeof addProduct !== 'undefined' ? addProduct : undefined,
  updateProductName: typeof updateProductName !== 'undefined' ? updateProductName : undefined,
  removeLastProduct: typeof removeLastProduct !== 'undefined' ? removeLastProduct : undefined,
  products
};

// Product Inventory Array
const products = ["Laptop", "Phone", "Headphones", "Monitor"];

// Function to log the details of the first product
function logFirstProduct() {
  console.log(products[0]); // Log the first product in the array
}

// Function to update the name of a product
function updateProductName(position, newName) {
  if (position >= 0 && position < products.length) {
    products[position] = newName; // Update the product at the given position
    console.log(`Product at position ${position} updated to: ${newName}`);
  } else {
    console.log("Invalid position");
  }
}