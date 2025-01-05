// Dapatkan elemen pop-up dan tombol close
const popup = document.getElementById("product-popup");
const closeBtn = document.querySelector(".close-btn");

// Fungsi untuk menampilkan pop-up
function showPopup(title, description) {
    document.getElementById("popup-title").textContent = title;
    document.getElementById("popup-description").textContent = description;
    popup.style.display = "block";
}

// Fungsi untuk menutup pop-up
closeBtn.onclick = function () {
    popup.style.display = "none";
};

// Tutup pop-up jika area luar pop-up diklik
window.onclick = function (event) {
    if (event.target === popup) {
        popup.style.display = "none";
    }
};
