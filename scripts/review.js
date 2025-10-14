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