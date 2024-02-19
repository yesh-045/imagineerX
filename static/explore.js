// Wait for the DOM content to load
document.addEventListener("DOMContentLoaded", function() {
    // Get all product cards
    const productCards = document.querySelectorAll('.product-card');

    // Loop through each product card
    productCards.forEach(card => {
        // Add click event listener to each card
        card.addEventListener('click', function() {
            // Simulate product details display
            alert(`Product Name: ${card.querySelector('h3').textContent}\nDescription: ${card.querySelector('p').textContent}`);
        });
    });
});
function toggleCategories() {
    var categories = document.getElementById("categories");
    if (categories.style.display === "block") {
        categories.style.display = "none";
    } else {
        categories.style.display = "block";
    }
}
function showCategory(category) {
    // Hide all product cards
    const productCards = document.querySelectorAll('.product-card');
    productCards.forEach(card => {
        card.style.display = 'none';
    });

    // Show product cards of the selected category
    const categoryCards = document.querySelectorAll('.' + category);
    categoryCards.forEach(card => {
        card.style.display = 'block';
    });
    function filterProducts() {
        // Get the search input value
        var searchQuery = document.getElementById("searchInput").value.toLowerCase();
    
        // Get all product cards
        var productCards = document.querySelectorAll(".product-card");
    
        // Loop through each product card
        productCards.forEach(function(card) {
            // Get the product name from the card
            var productName = card.querySelector("h3").innerText.toLowerCase();
    
            // Check if the product name contains the search query
            if (productName.includes(searchQuery)) {
                // If the product name matches the search query, display the card
                card.style.display = "block";
            } else {
                // If the product name does not match the search query, hide the card
                card.style.display = "none";
            }
        });
    }
    


}
function viewProductDetails(productName) {
    window.location.href = `product-details.html?product=${encodeURIComponent(productName)}`;
}
// Get the container element where cart items will be displayed
const cartContainer = document.getElementById('cart-items');

// Function to add a product to the cart
function addToCart(productName, productPrice) {
    // Create a new cart item element
    const cartItem = document.createElement('div');
    cartItem.classList.add('cart-item');

    // Construct the HTML content for the cart item
    cartItem.innerHTML = `
        <p>${productName}</p>
        <p>$${productPrice}</p>
    `;

    // Append the cart item to the cart container
    cartContainer.appendChild(cartItem);

    // Update the total price
    updateTotalPrice(productPrice);
}

// Function to update the total price in the cart
function updateTotalPrice(price) {
    // Get the total price element
    const totalPriceElement = document.getElementById('total-price');

    // Get the current total price
    let totalPrice = parseFloat(totalPriceElement.textContent);

    // Add the price of the added product to the total price
    totalPrice += parseFloat(price);

    // Update the total price element with the new total
    totalPriceElement.textContent = totalPrice.toFixed(2); // Format total price to two decimal places
}

// Function to handle the "Add to Cart" button click
function addToCartClicked(productName, productPrice) {
    // Call the addToCart function to add the product to the cart
    addToCart(productName, productPrice);
}



