
const price = 120000;

let quantity = 1;
let cartCount = 0;
let liked = false;

// HTML elementlar
const quantityText = document.getElementById("quantity");
const totalPrice = document.getElementById("totalPrice");
const cartCountText = document.getElementById("cartCount");

const plus = document.getElementById("plus");
const minus = document.getElementById("minus");

const likeBtn = document.getElementById("likeBtn");
const navLike = document.getElementById("navLike");

const themeBtn = document.getElementById("themeBtn");
const addCart = document.getElementById("addCart");

// Narx va sonni yangilash
function updateProduct() {
    quantityText.textContent = quantity;

    totalPrice.textContent =
        (quantity * price).toLocaleString("uz-UZ");
}

// Plus
plus.addEventListener("click", () => {
    quantity++;
    updateProduct();
});

// Minus
minus.addEventListener("click", () => {
    if (quantity > 1) {
        quantity--;
        updateProduct();
    }
});

// Like
likeBtn.addEventListener("click", () => {
    liked = !liked;

    likeBtn.textContent = liked ? "♥" : "♡";
    likeBtn.classList.toggle("active", liked);

    navLike.textContent = liked ? "❤️" : "🤍";
});

// Navbar like
navLike.addEventListener("click", () => {
    liked = !liked;

    likeBtn.textContent = liked ? "♥" : "♡";
    likeBtn.classList.toggle("active", liked);

    navLike.textContent = liked ? "❤️" : "🤍";
});

// Dark / Light mode
themeBtn.addEventListener("click", () => {
    document.body.classList.toggle("dark");

    themeBtn.textContent =
        document.body.classList.contains("dark") ? "☀️" : "🌙";
});

// Savatchaga qo'shish
addCart.addEventListener("click", () => {
    cartCount += quantity;

    cartCountText.textContent = cartCount;

    alert(quantity + " ta krossovka savatchaga qo'shildi!");
});

// Savatcha
document.getElementById("cartBtn").addEventListener("click", () => {
    alert("Savatchada " + cartCount + " ta mahsulot bor!");
});

// Boshlang'ich hisob
updateProduct();
