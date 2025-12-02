let reviewCount = localStorage.getItem("reviewsCount");
reviewCount = reviewCount ? parseInt(reviewCount) + 1 : 1;


localStorage.setItem("reviewsCount", reviewCount);


document.addEventListener("DOMContentLoaded", () => {
  const counterDisplay = document.getElementById("counterDisplay");
  if (counterDisplay) {
    counterDisplay.textContent = `You have completed ${reviewCount} review(s).`;
  }
});