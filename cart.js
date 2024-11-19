// Select cart elements
const cartItems = document.getElementById("cart-items");
const cartTotal = document.getElementById("cart-total");
const cartCount = document.getElementById("cart-count");

// Event listener for "Add to Cart" buttons
document.querySelectorAll(".add-to-cart").forEach(button => {
    button.addEventListener("click", () => {
        const productName = button.dataset.product;
        const productPrice = parseFloat(button.dataset.price);

        // Add item to cart
        const cartItem = document.createElement("li");
        cartItem.textContent = `${productName} - $${productPrice}`;
        cartItems.appendChild(cartItem);

        // Update total
        const currentTotal = parseFloat(cartTotal.textContent);
        cartTotal.textContent = (currentTotal + productPrice).toFixed(2);

        // Update cart count
        const currentCount = parseInt(cartCount.textContent);
        cartCount.textContent = currentCount + 1;
    });
});

// Scroll to cart when the icon is clicked
document.getElementById("cart-icon").addEventListener("click", () => {
    document.querySelector(".cart").scrollIntoView({ behavior: "smooth" });
});
