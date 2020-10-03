




let myJsonData = localStorage.getItem('myCart');

var payload = '';
let myTotalamount = 0;
if (myJsonData) {
  let myCart = JSON.parse(myJsonData);
  loadCartDetails(myCart);
}



function loadCartDetails(myCart) {


  payload = '';
  myTotalamount = 0;
  for (var i = 0; i < myCart.length; i++) {
    myTotalamount += parseFloat(myCart[i].price);

    payload += ` <div class="row mb-4">
            <div class="col-md-5 col-lg-3 col-xl-3">
              <div class="view zoom overlay z-depth-1 rounded mb-3 mb-md-0">
                <img class="img-fluid w-100"
                  src="${myCart[i].image}" alt="Sample">
                <!-- <a href="#!">
                  <div class="mask waves-effect waves-light">
                    <img class="img-fluid w-100"
                      src="https://mdbootstrap.com/img/Photos/Horizontal/E-commerce/Vertical/12.jpg">
                    <div class="mask rgba-black-slight waves-effect waves-light"></div>
                  </div>
                </a> -->
              </div>
            </div>
            <div class="col-md-7 col-lg-9 col-xl-9">
              <div>
                <div class="d-flex">
                  <div class="ml-0">
                    <h5 class="card-heading text-md-left ">${myCart[i].name}</h5>
                    <p class="card-details text-muted">${myCart[i].desc}</p>
                    <!-- <p class="mb-2 text-muted text-uppercase small">Original - 5 in 1 Daily Moisturizer</p> -->
                    <!-- <p class="mb-3 text-muted text-uppercase small">Size: M</p> -->
                  </div>
                  <div class="quantity">
                    <div class="def-number-input number-input mb-0 w-100">
                      <button onclick="this.parentNode.querySelector('input[type=number]').stepDown()"
                        class="qtyminus">-</button>
                      <input class="qty" min="0" name="quantity" value="1" type="number">
                      <button onclick="this.parentNode.querySelector('input[type=number]').stepUp()"
                        class="qtyplus">+</button>
                    </div>
                    </div>
                    <!-- <small id="passwordHelpBlock" class="form-text text-muted text-center">
                      (Note, 1 piece)
                    </small> -->
                  </div>
                </div>
                <div class="d-flex justify-content-between align-items-left">
                  <div class="ml-0">
                    <a href="#!" type="button" class="removecart card-link-secondary small mr-3" id="${myCart[i].c_id}"><i
                        class="fas fa-trash-alt mr-1" ></i> Remove item </a>
                  </div>
                  <p class="mb-0"><span><strong>${"Price: $" + myCart[i].price}</strong></span></p>
                </div>
              </div>
            </div>
          </div> 

            <hr class="mb-4">`;


  }

  // <a href="#!" type="button" class="card-link-secondary small"><i class="fas fa-heart mr-1"></i> Move to wish list </a>








  var carddetails = document.getElementById('myCartdetails');
  if (carddetails) {
    carddetails.innerHTML = payload;

  }




  // add the cart count to the cart
  var CurrentCart = JSON.parse(localStorage.getItem('myCart'));
  if (CurrentCart) {
    if (mycartcount) {
      mycartcount.innerHTML = CurrentCart.length;
    }

    var totalamount = document.getElementById('totalamount');
    if (totalamount) {
      totalamount.innerHTML = `$${ myTotalamount}`;
    }


  }
  // add the cart count to the cart


  
//   Increase, decrease quantity and remove product.


// const increaseProductQuantity = (product) => {
//   // const productId = $(product).parents('.product').get(0).id
//   const price = $.grep(productsInCart, el => { return el.id == productId })[0].price;
// }

// myCart[i].price


let add = document.querySelector('.addquantity')



  let carts = document.querySelectorAll('.removecart');

  for (let i = 0; i < carts.length; i++) {
    carts[i].addEventListener('click', () => {
      RemoveCart(carts[i].id);
    })

  }


}


function RemoveCart(productid) {
  //console.log("The product clicked is" , productid);


  //let myJsonData = localStorage.getItem('myJson');
  let myCart = localStorage.getItem('myCart');

  let UpdatedCart = [];
  if (myCart) {
    var data = JSON.parse(myCart);

    //console.log(item.subCategory); 
    for (let category of data) {
      //console.log(category.name);

      if (category.c_id != productid) {

        UpdatedCart.push(category);
        //console.log(category);

      }
    }

  }

  loadCartDetails(UpdatedCart);

  localStorage.setItem('myCart', JSON.stringify(UpdatedCart));

  var mycartcount = document.getElementById('mycartcount');
  if (mycartcount) {
    mycartcount.innerHTML = UpdatedCart.length;
  }
  //=======================cart work end===================//


}