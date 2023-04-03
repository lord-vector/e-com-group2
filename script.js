// const prevBtn = document.querySelector(".prev");
// const nextBtn = document.querySelector(".next");
// const cards = document.querySelectorAll(".card");

// let currentCard = 0;

// function showCard() {
//   cards.forEach((card) => {
//     card.classList.remove("active");
//   });
//   cards[currentCard].classList.add("active");
// }

// function nextCard() {
//   currentCard++;
//   if (currentCard > cards.length - 1) {
//     currentCard = 0;
//   }
//   showCard();
// }

// function prevCard() {
//   currentCard--;
//   if (currentCard < 0) {
//     currentCard = cards.length - 1;
//   }
//   showCard();
// }

// let interval = setInterval(nextCard, 5000);

// nextBtn.addEventListener("click", () => {
//   clearInterval(interval);
//   nextCard();
//   interval = setInterval(nextCard, 5000);
// });

// prevBtn.addEventListener("click", () => {
//   clearInterval(interval);
//   prevCard();
//   interval = setInterval(nextCard, 5000);
// });

// Most Purchased section

const prod = document.getElementsByClassName("prod")[0];

function load(data) {
  // most purchased

  //var mPcard = '<ul class="grid">';
  var mPcard = "";

  for (i = 0; i < 10; i++) {
    var temp = Math.floor(Math.random() * 30);
    console.log(temp);
    mPcard += `
    <div class="carousel-item ${i === 0 && "active"}">
    <img
      class="d-block img-fluid w-100"
      src=${data[i].images[0]}
      alt="first slide"
    />
    <div class="carousel-caption">
      <h3>${data[i].title}</h3>
      <p>${data[i].description}</p>
    </div>
  </div>
      `;
  }
  //mPcard += "</ul>";
  let frag = document.createRange().createContextualFragment(mPcard);
  console.log(mPcard);
  prod.appendChild(frag);

  // featured categories

  const fCat = document.getElementById("Featured-categories");
  let category = "";

  for (i = 0; i < data.length - 5; i += 5) {
    category += `
      <a href="./Pages/feature page/feature.html?category=${data[i].category}" class="featuredCategoryblock">
        <div class="fCatCard">
          <img src="${data[i].thumbnail}" alt="">
        </div>
        <h5>${data[i].category}</h5>
      </a>`;
  }

  let frag1 = document.createRange().createContextualFragment(category);
  fCat.appendChild(frag1);
}

fetch(`https://dummyjson.com/products/`)
  .then((res) => {
    // console.log(res);
    res.json().then((data) => {
      console.log(data.products);
      load(data.products);
    });
  })
  .catch((err) => console.log(err));

// mPcard = document.createElement("div")
// img = document.createElement("img")
// img.src = data[temp].images[0]
// title = document.createElement("h5")
// title.innerHTML = data[temp].title
// description = document.createElement("p")
// description.innerHTML = data[temp].description
// btn = document.createElement("button")
// btn.innerHTML = "Buy Now"

// mPcard.appendChild(img)
// mPcard.appendChild(title)
// mPcard.appendChild(description)
// mPcard.appendChild(btn)
