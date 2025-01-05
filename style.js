// Add interactivity if needed
document.querySelector('.banner button').addEventListener('click', () => {
    alert('Shop Now Clicked!');
  });

  document.addEventListener("DOMContentLoaded", () => {
    const cartButtons = document.querySelectorAll(".add-to-cart");
  
    cartButtons.forEach((button) => {
      button.addEventListener("click", () => {
        alert("Item added to cart!");
      });
    });
  })

  // Dapatkan elemen pop-up dan tombol close
const popup = document.getElementById("product-popup");
const closeBtn = document.querySelector(".close-btn");

// Fungsi untuk menampilkan pop-up
function showPopup(title, description) {
    document.getElementById("popup-title").textContent = title;
    document.getElementById("popup-description").textContent = description;
    popup.style.display = "block";
}