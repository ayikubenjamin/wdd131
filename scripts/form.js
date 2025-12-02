const currentyear = document.querySelector('#currentyear')
const lastmodified = document.querySelector('#lastmodified')
const today = new Date()
const datetime = today.toLocaleString("en-Us")
currentyear.innerHTML = today.getFullYear()
lastmodified.innerHTML = `Last Modified : ${datetime}`


const products = [
  {
    id: "fc-1888",
    name: "flux capacitor",
    averagerating: 4.5
  },
  {
    id: "fc-2050",
    name: "power laces",
    averagerating: 4.7
  },
  {
    id: "fs-1987",
    name: "time circuits",
    averagerating: 3.5
  },
  {
    id: "ac-2000",
    name: "low voltage reactor",
    averagerating: 3.9
  },
  {
    id: "jj-1969",
    name: "warp equalizer",
    averagerating: 5.0
  }
];

const selectProduct = document.querySelector("#productoptions")

products.forEach(product => {
    const option = document.createElement('option')
    option.value = product.id
    option.textContent = product.name
    selectProduct.appendChild(option)
})


let reviewCount = localStorage.getItem("reviewsCount");
reviewCount = reviewCount ? parseInt(reviewCount) + 1 : 1;

// Update localStorage
localStorage.setItem("reviewsCount", reviewCount);

// Display updated count
document.addEventListener("DOMContentLoaded", () => {
  const counterDisplay = document.getElementById("counterDisplay");
  if (counterDisplay) {
    counterDisplay.textContent = `You have completed ${reviewCount} review(s).`;
  }
});