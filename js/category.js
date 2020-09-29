function fetchData() {

    let categoryType = JSON.parse(sessionStorage.getItem("categoryType"));
    // console.log(categoryType);
    let stringArray = categoryType.split(' ');
    // console.log(stringArray);


    fetch("./products.json")
        .then(rawData => rawData.json())
        .then(data => {
            console.log(data);
            let arrayofCategories = Object.values(data);

            // getting all categories items
            let allItems = [];
            arrayofCategories[0].forEach(mainCategory => {
                // console.log(mainCategory.subCategory[0]);
                //   allItems.push(mainCategory.subCategory);
                let subCategories = mainCategory.subCategory;
                subCategories.forEach(item => {
                    // console.log(item);
                    allItems.push(item);
                    document.querySelector("section").innerHTML = allItems.map(item => {
                        return `
                        <div class="col-md-3 card-body">
                  <div class="product2-top card-top">
                    <div class="overlay card-icons">
                      <button type="button" class="btn btn-secondary card-icons-item" title="View">
                        <a href="product-1.html" data-tip="Quick View"><i class="fa fa-eye" aria-hidden="true"></i></a>
                      </button>
                      <button type="button" class="btn btn-secondary card-icons-item" title="Wishlist">
                        <i class="fa fa-heart" aria-hidden="true"></i>
                      </button>
                      <button type="button" class="btn btn-secondary card-icons-item" title="Cart">
                        <i class="fa fa-shopping-cart" aria-hidden="true"></i>
                      </button>
                    </div>
            
                    <img src="${item.image}" />
                  </div>
                  <div class="product-bottom text-center">
                    <ul class="rating">
                      <li class="fa fa-star"></li>
                      <li class="fa fa-star"></li>
                      <li class="fa fa-star"></li>
                      <li class="fa fa-star"></li>
                      <li class="fa fa-star disable"></li>
                    </ul>
                    <a href="product-1.html" data-tip="Quick View"><h4 class="card-heading">${item.name}</h4></a>
                    <h5 class="card-details">${item.desc}</h5>
                    <h6 class="card-price">Price:$${item.price}</h6>
                    <button id="shopnow-btn">Shop Now</button>
                  </div>
                </div>
                   `;
                    })
                })

            });
            console.log(allItems);
        })
}



fetchData();