function renderCart(carts){
    var total_price = 0;
    for( let item of carts){
        total_price += parseInt(item.product.price.split(".").join("") * item.quantity);
          let cards = document.getElementById("cart-left");
          let item_div = document.createElement("div")
          item_div.setAttribute("class", "cart-card")
          item_div.innerHTML = `
          <img class="image" src="${item.product.image[0]}" alt="">
          <div class="card-mid">
              <span class="name">${item.product.name}</span>
              <div class="card-mid-type">
                  <span> Type: </span>
                  <span class="type"> ${item.product.type}</span>
              </div>
              <div class="quantity">
                  Số lượng: ${item.quantity} <br>
                  Giá: ${item.product.price} VND
              </div>
          </div>
          <div class="card-end">
              <span class="price"> ${  parseInt(item.product.price.split(".").join("") * item.quantity).toLocaleString('vi', {style : 'currency', currency : 'VND'}) } </span>
          </div>`
        cards.appendChild(item_div);
      }
      document.getElementById("total_price").innerHTML =total_price.toLocaleString('vi', {style : 'currency', currency : 'VND'}) 

}

function run(){
    const carts = JSON.parse(localStorage.getItem("cart"))
    renderCart(carts)
}
run()

function payment(){
    localStorage.removeItem("cart")
    location.reload()
}