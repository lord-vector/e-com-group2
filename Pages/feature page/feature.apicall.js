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
      <img src="${element.images[0]}" class="card-img-top" alt="..." />
      <div class="card-body">
        <h5 class="card-title">${element.title}</h5>
        <p class="card-text">
          ${element.description}
        </p>
        <a href="#" class="btn btn-primary">
          Go somewhere
        </a>
      </div>
    </div>`;
  });
  str += "</ul>";
  const frag = document.createRange().createContextualFragment(str);
  ele[0].appendChild(frag);
};

getText(queryString);
