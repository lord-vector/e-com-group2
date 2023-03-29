const queryString = window.location.search.split("=")[1];

const getText = (requestedData) => {   
  fetch(`https://dummyjson.com/products/category/${requestedData}`)
    .then((res) => {
      console.log(res);
      res.json().then((data) => {
        console.log(data.products);
        showItems(data.products);
      });
    })
    .catch((err) => console.log(err));
};
var count =0;
const ele = document.getElementsByClassName("abc");
const des = document.getElementById("des")
const showItems = (items) => {
  
  
  str = `<ul class="grid"><button onclick="back()"><</button>   
     <div class="card" style="width: 18rem;">
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
    </div>
    <button onclick="forward()">></button></ul>`;
  // });
  // str += ;
  const frag = document.createRange().createContextualFragment(str);  // why ?
  ele[0].appendChild(frag);
};

getText(queryString);

function forward(){
  if(count<4){
    count +=1
  }
  else{
    count = 0
  }
  ele[0].innerHTML = ""
  getText(queryString);
 console.log(count)
 return count
}
function back(){
  if(count>0){
    count -=1
  }
  else{
    count = 4
  }
  ele[0].innerHTML = ""
  getText(queryString);
 console.log(count)
 return count
}
// console.log(count)  