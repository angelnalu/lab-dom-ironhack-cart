// ITERATION 1

function updateSubtotal(product) {
  //console.log('Calculating subtotal, yey!');

   //... your code goes here


  //SELECTING ALL PRODUCTS BY "QUERYSELECTOR"
  const price = product.querySelector(".price span");

  const quantity = product.querySelector(".quantity input");

  let priceValue = Number(price.innerText);

  let quantityValue = Number(quantity.value);

  let subTotal = priceValue * quantityValue;

  const newSubtotal = product.querySelector(".subtotal span")

    newSubtotal.innerText = subTotal;

    return subTotal;
}

function calculateAll() {
  // code in the following two lines is added just for testing purposes.
  // it runs when only iteration 1 is completed. at later point, it can be removed.
  // const singleProduct = document.querySelector('.product');
  // updateSubtotal(singleProduct);
  // end of test

  // ITERATION 2
  //... your code goes here
  const products = [...document.querySelectorAll('.product')];
  let subtotals = 0;

  products.forEach(product => {
    subtotals += updateSubtotal(product);
  });
  //console.log("print", total);


  // ITERATION 3
  //... your code goes here
  let updatedTotal = document.querySelector("#total-value span");
    updatedTotal.innerText = subtotals;
}

// ITERATION 4

function removeProduct(event) {

  const target = event.currentTarget; // target is a button

  let producttoberemoved = target.parentNode.parentNode;
    producttoberemoved.remove();
}

// ITERATION 5

function createProduct(event) {
  //... your code goes here
  const target = event.currentTarget;
  let tempproduct = target.parentNode.parentNode;
  const name = tempproduct.querySelector('[placeholder="Product Name"]').value;
  const price = tempproduct.querySelector('[placeholder="Product Price"]').value;
  console.log("name :", name, "; price :", price);

  let table = tempproduct.parentNode.parentNode;
  let tbody = table.querySelector("tbody");

  let newproduct = `
        <tr class="product">
          <td class="name">
            <span>${name}</span>
          </td>
          <td class="price">$<span>${price}</span></td>
          <td class="quantity">
            <input  type="number" value="0" min="0" placeholder="Quantity" />
          </td>
          <td class="subtotal">$<span>0</span></td>
          <td class="action">
            <button class="btn btn-remove">Remove</button>
          </td>
        </tr>`;
  tbody.innerHTML += newproduct;
  tempproduct.querySelector('[placeholder="Product Name"]').value = "";
  tempproduct.querySelector('[placeholder="Product Price"]').value = "";
  btnRemovelistener();
}

function btnRemovelistener() {
  let btnRemove = document.getElementsByClassName("btn btn-remove");
  Array.from(btnRemove).forEach(function (button) {
    //console.log("print remove removelistener", count, btnRemove);
    button.addEventListener("click", removeProduct);
    //console.log("print removed", count, btnRemove);
  });
}

window.addEventListener('load', () => {
  const calculatePricesBtn = document.getElementById('calculate');
  calculatePricesBtn.addEventListener('click', calculateAll);

  //... your code goes here
  const allRemoveBtn = document.querySelectorAll('.btn-remove');
  allRemoveBtn.forEach(button => {
    button.addEventListener('click', removeProduct)
  })
  const createBtn = document.querySelector('#create');
  createBtn.addEventListener('click', createProduct)


});
