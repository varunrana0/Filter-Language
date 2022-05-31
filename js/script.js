const searchBar = document.querySelector(".search");
const boxes = document.querySelectorAll(".box");

searchBar.addEventListener("input", findBoxValue);

function findBoxValue(e) {
  // first grab the input that work as search
  let value = e.target.value.toLowerCase();

  // now grab the h3 element of every box
  boxes.forEach((item) => {
    let itemValue = item.firstElementChild.textContent.toLowerCase();
    if (itemValue.indexOf(value) !== -1) {
      item.style.display = "flex";
    } else {
      item.style.display = "none";
    }
  });
}
