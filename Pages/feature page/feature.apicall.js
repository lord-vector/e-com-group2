const queryString = window.location.search.split("=")[1];

const getText = (requesedData) => {
  fetch(`https://dummyjson.com/products/category/${requesedData}`)
    .then((res) => {
      console.log(res);
      res.json().then((data) => {
        console.log(data.products);
        showItems(data.products);
      });
    })
    .catch((err) => console.log(err));
};

const showItems = (items) => {
  const ele = document.getElementsByClassName("grid");
  str = '<ul class="grid">';
  items.forEach((element) => {
    str += `<div class="card" style="width: 18rem;">
      <img src="${
        element.images[0]
      }" class="card-img-top imageShadow" alt="..." />
      <div class="card-body">
        <h5 class="card-title">${element.title}</h5>
        <p class="card-text">
          ${element.description}
        </p>
        <div class="actionButtons">
            <button href="#" class="btn btn-primary" onclick="add(this)" name="${element.id}">
            Add to Cart
            </button>
            <div href="#" class="btn btn-primary">
            Favourites
            </div>
        </div>
      </div>
    </div>`;
  });
  str += "</ul>";
  const frag = document.createRange().createContextualFragment(str);
  ele[0].appendChild(frag);
};

getText(queryString);


// checkout section

let arr = []

const add = (btn) => {
  arr.push(btn.name)
  document.getElementById("noOfItems").innerHTML = arr.length
  cart()
}
let total = 0

const cart = () => {
  console.log(queryString)
  fetch(`https://dummyjson.com/products/`)
    .then((res) => {
      // console.log(res);
      res.json().then((data) => {
        // console.log(data.products);
        temp = data.products
        // console.log(temp[0].title)
        let x = ""
        var item = document.getElementById("cart")
        // item.style.backgroundColor ="red"
        let qty = document.getElementsByClassName("qty")
        console.log(qty.value)
        let i = parseInt(arr[arr.length-1])-1
        let finalPrice = Math.round((temp[i].price)-((temp[i].price)*(temp[i].discountPercentage)/100))
        
        total += finalPrice
          
          x += `
          <div class = "cart-items">
            <img src="${temp[i].images[0]}"/>
            <h5>${temp[i].title}</h5>
            <div class="pricing">
              <h5 class="discountedPrice">$${finalPrice}</h5>
              <p class="price">$${(temp[i].price)}</p>
            </div>
          </div>
          <hr>`
          document.getElementById("checkoutPrice").innerHTML = total
        const frag2 = document.createRange().createContextualFragment(x);
        item.appendChild(frag2);
      });
    })
    .catch((err) => console.log(err));   
}

const openCheckout = () => {
  document.getElementById("cart").style.right = "0"
  // document.body.style.backdropFilter = 
  document.getElementById("cart").style.boxShadow = "5px 5px 1500px black"
}
const closeCart = () => {
  document.getElementById("cart").style.right = "-500px"
  document.getElementById("cart").style.boxShadow = "none"
}

const hooray = () => {
  document.getElementsByClassName("cart-items")[0].innerHTML = "Order Successfully placed!<br>Thank you for shopping with us :)"
}
