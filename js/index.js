// ITERATION 1

function updateSubtotal(product) {
  const price = product.querySelector('.price span').textContent;
  const quantity = product.querySelector('.quantity input').value;
  const subTotal = parseInt(price) * parseInt(quantity);
  console.log(subTotal);
  product.querySelector('.subtotal span').innerHTML = subTotal;
  return subTotal;

  //console.log('Calculating subtotal, yey!');

  //... your code goes here
}

function calculateAll() {
  const products = document.getElementsByClassName('product');
  let total = 0;
  [...products].forEach((product) => {
    total += updateSubtotal(product);
  });
  document.querySelector('#total-value span').innerHTML = total;
  // code in the following two lines is added just for testing purposes.
  // it runs when only iteration 1 is completed. at later point, it can be removed.
  // const singleProduct = document.querySelector('.product');
  // updateSubtotal(singleProduct);
  // end of test
  // ITERATION 2
  //... your code goes here
  // ITERATION 3
  //... your code goes here
}

// ITERATION 4

function removeProduct(event) {
  const target = event.currentTarget;
  console.log('The target in remove is:', target);
  const tr = target.parentNode.parentNode;
  tr.parentNode.removeChild(tr);
  calculateAll();
  //... your code goes here
}

// ITERATION 5

function createProduct() {
  //... your code goes here
}

window.addEventListener('load', () => {
  const calculatePricesBtn = document.getElementById('calculate');
  calculatePricesBtn.addEventListener('click', calculateAll);
  const remButton = document.getElementsByClassName('btn-remove');
  console.log(remButton);
  [...remButton].forEach((button) => {
    button.addEventListener('click', removeProduct);
  });

  //... your code goes here
});
