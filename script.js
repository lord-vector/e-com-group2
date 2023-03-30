const prevBtn = document.querySelector('.prev');
const nextBtn = document.querySelector('.next');
const cards = document.querySelectorAll('.card');

let currentCard = 0;

function showCard() {
  cards.forEach(card => {
    card.classList.remove('active');
  });
  cards[currentCard].classList.add('active');
}

function nextCard() {
  currentCard++;
  if (currentCard > cards.length - 1) {
    currentCard = 0;
  }
  showCard();
}

function prevCard() {
  currentCard--;
  if (currentCard < 0) {
    currentCard = cards.length - 1;
  }
  showCard();
}

let interval = setInterval(nextCard, 5000);

nextBtn.addEventListener('click', () => {
  clearInterval(interval);
  nextCard();
  interval = setInterval(nextCard, 5000);
});

prevBtn.addEventListener('click', () => {
  clearInterval(interval);
  prevCard();
  interval = setInterval(nextCard, 5000);
});

// Most Purchased section

const prod = document.getElementById("product")   

function load(data){
  
  // most purchased

  var mPcard = '<ul class="grid">'
  
  for(i=0;i<10;i++){
    
    var temp = Math.floor(Math.random()*30)
    console.log(temp)
    mPcard += `
      <div class="card style="width: 18rem;">
        <img src="${data[temp].images[0]}" class="card-img-top"/>
        <div class="card-body">
          <h5 class="card-title">${data[temp].title}</h5>
          <p class="card-text">
            ${data[temp].description}
          </p>
          <a href="#" class="btn btn-primary">
            Go somewhere
          </a>
        </div>
      </div>
      `
  }
    mPcard += "</ul>"
    let frag = document.createRange().createContextualFragment(mPcard);
    prod.appendChild(frag);

  // featured categories

  const fCat = document.getElementById("Featured-categories");
  let category = ''
  
  for(i=0;i<data.length-5;i+=5){
    
    category += `
      <a href="./Pages/feature page/feature.html?category=${data[i].category}">
        <div class="fCatCard">
          <img src="${data[i].thumbnail}" alt="">
        </div>
        <h5>${data[i].category}</h5>
      </a>`
  }
  
  let frag1 = document.createRange().createContextualFragment(category);
  fCat.appendChild(frag1);
  
}

fetch(`https://dummyjson.com/products/`)
    .then((res) => {
      // console.log(res);
      res.json().then((data) => {
        // console.log(data.products);
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


