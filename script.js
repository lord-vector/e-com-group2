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
/* <div class="card" style="width: 18rem;">
      <img src="${items[count].images[0]}" class="card-img-top" alt="..." />
      <div class="card-body">
        <h5 class="card-title">${items[count].title}</h5>
        <p class="card-text">
          ${items[count].description}
        </p>
        <a href="#" class="btn btn-primary">
          Go somewhere
        </a>
      </div>
    </div> */


    fetch(`https://dummyjson.com/products/`)
    .then((res) => {
      // console.log(res);
      res.json().then((data) => {
        console.log(data.products);
        load(data.products);
      });
    })
    .catch((err) => console.log(err));

function load(data){
  for(i=0;i<10;i++){
    
    var temp = Math.floor(Math.random()*30)

    mPcard = document.createElement("div")
    img = document.createElement("img")
    img.src = data[temp].images[0]
    mPcard.appendChild(img)

    title = document.createElement("h5")
    title.innerHTML = data[temp].title
    description = document.createElement("p")
    description.innerHTML = data[temp].description
    btn = document.createElement("button")
    btn.innerHTML = "Buy Now"

    mPcard.appendChild(title)
    mPcard.appendChild(description)
    mPcard.appendChild(btn)
    prod.appendChild(mPcard)
  }
  
}



