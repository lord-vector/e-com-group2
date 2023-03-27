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