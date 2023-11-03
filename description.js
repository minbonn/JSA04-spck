const search = window.location.search;
console.log(search);
const params = new URLSearchParams(search);
console.log(params);
let id = params.get("id");
let type = params.get("type");
console.log(id);
console.log(type);

function renderProduct(item){
  console.log(item)
  const div_item = document.createElement("div")
  div_item.classList.add("description-container")
  div_item.innerHTML = `
  <div class="img-container">
                <img class="img-product" src="${item.image[0]}" alt="">
            </div>
            <div class="information-container">
                <div class="a-container">
                    <div class="information">
                        <p class="name">${item.name }</p>
                        <div class="price">
                         Giá: <span style="font-weight: 700;color: black;">${item.price}   </span><span>VND</span>
                        </div>
                        <p class="description">
                        ${item.descriptions}
                        </p>
                    </div>
                </div>
                <div class="button">
                    <div class="favorite onClick="addToFavorite(${item.id-1})"">
                        Favorite
                    </div>
                    <div class="add-to-cart" onClick="addToCart(${item.id-1})">
                        Add to cart
                    </div>
                </div>
            </div>
  `
  document.getElementById("container").appendChild(div_item)
}

function run(){
  const data = JSON.parse(localStorage.getItem("products")) ;
  console.log(data)
    renderProduct(data[id-1])
}

run()


const addToCart = (key) => {
  let products = localStorage.getItem("products");

  if (products) {
    products = JSON.parse(products);

    console.log(products);

    let item = products[key];

    let cart = localStorage.getItem("cart");
    if (cart) {
      cart = JSON.parse(cart);
    }

    if (cart == null || cart[0] == null) {
      cart = [
        {
          product: item,
          quantity: 1,
        },
      ];
      localStorage.setItem("cart", JSON.stringify(cart));
    } else {
      for (cart_item of cart) {
        if (cart_item.product.id == item.id) {
          cart_item.quantity += 1;
          localStorage.setItem("cart", JSON.stringify(cart));
          return;
        }
      }
      cart.push({
        product: item,
        quantity: 1,
      });
      localStorage.setItem("cart", JSON.stringify(cart));
    }
  }
};



const addToFavorite = (key) => {
  let like = localStorage.getItem("products");

  if (like) {
    like = JSON.parse(products);

    console.log(like);
    let item = products[key];

    let favorite = localStorage.getItem("favorite");
    if (favorite) {
      favorite = JSON.parse(favorite);
    }
  }
};
