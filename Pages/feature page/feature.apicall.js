const showItems = (items) => {
  const ele = document.getElementsByClassName("grid");
  str = "<ul>";
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
  console.log(typeof frag);
  console.log(ele[0]);
};

const getText = (category) => {
  fetch(`https://dummyjson.com/products/category/${category}`)
    .then((res) => {
      console.log(res);
      res.json().then((data) => {
        showItems(data.products);
        console.log(data.products);
        // window.location.href = "./Pages/feature page/feature.html";
      });
    })
    .catch((err) => console.log(err));
};
