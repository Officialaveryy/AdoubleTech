// Select cart elements
const cartItems = document.getElementById("cart-items");
const cartTotal = document.getElementById("cart-total");
const cartCount = document.getElementById("cart-count");
const cart = document.getElementById("shopping-cart");
const cartIcon = document.getElementById("cart-icon");

// Check if elements exist
if (cartItems && cartTotal && cartCount && cart && cartIcon) {
    // Event listener for "Add to Cart" buttons
    document.querySelectorAll(".add-to-cart").forEach(button => {
        button.addEventListener("click", () => {
            const productName = button.dataset.product || "Unnamed Product";
            const productPrice = parseFloat(button.dataset.price) || 0;
            const productImage = button.dataset.image || "placeholder.jpg"; // Fallback image

            // Create cart item container
            const cartItem = document.createElement("li");
            cartItem.classList.add("cart-item");

            // Create image element
            const img = document.createElement("img");
            img.src = productImage;
            img.alt = productName;
            img.classList.add("cart-item-image");

            // Create details container
            const details = document.createElement("div");
            details.classList.add("cart-item-details");

            // Product name and price
            const namePrice = document.createElement("p");
            namePrice.textContent = `${productName} - $${productPrice.toFixed(2)}`;

            // Append elements
            details.appendChild(namePrice);
            cartItem.appendChild(img);
            cartItem.appendChild(details);
            cartItems.appendChild(cartItem);

            // Update total
            const currentTotal = parseFloat(cartTotal.textContent) || 0;
            cartTotal.textContent = (currentTotal + productPrice).toFixed(2);

            // Update cart count
            const currentCount = parseInt(cartCount.textContent) || 0;
            cartCount.textContent = currentCount + 1;
        });
    });

    // Toggle cart visibility when the icon is clicked
    cartIcon.addEventListener("click", () => {
        cart.classList.toggle("open");
    });

    // Close cart when hovering off it
    cart.addEventListener("mouseleave", () => {
        cart.classList.remove("open");
    });
} else {
    console.error("Cart elements are not properly defined in your HTML.");
}
