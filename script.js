// JavaScript code for basic functionality

// Function to handle button click
function addToCart(productName) {
    alert('Added ' + productName + ' to cart!');
}

// Example of using the function
document.addEventListener('DOMContentLoaded', function() {
    // Select all 'Add to Cart' buttons
    var addToCartButtons = document.querySelectorAll('.add-to-cart');

    // Add click event listener to each button
    addToCartButtons.forEach(function(button) {
        button.addEventListener('click', function(event) {
            // Get the product name from the data-product attribute
            var productName = event.target.getAttribute('data-product');
            
            // Call addToCart function with the product name
            addToCart(productName);
        });
    });
});
