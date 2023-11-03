function renderCart(favorites){
    for( let item of favorites){
          let favorites = document.getElementById("favorite");
          let item_div = document.createElement("div")
          item_div.setAttribute("class", "favorite-card")
          item_div.innerHTML = `
          <img class="image" src="${item.product.image[0]}" alt="">
              <div class="favorite-mid">
                  <span class="name">${item.product.name}</span>
                  <div class="favorite-mid-type">
                      <span> Type: </span>
                      <span class="type"> ${item.product.type}</span>
                  </div>
          </div>`
          favorites.appendChild(item_div);
      }
}

function run(){
    const favorites = JSON.parse(localStorage.getItem("favorite"))
    renderCart(favorites)
}
run()

