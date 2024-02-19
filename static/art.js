document.addEventListener("DOMContentLoaded", function() {
    // Get the user login button
    var userLoginBtn = document.querySelector(".user-login-btn");

    // Add onclick event to user login button
    userLoginBtn.addEventListener("click", function() {
        // Open the user login page
        window.location.href = "/u_l";
    });

    // Get the seller login button
    var sellerLoginBtn = document.querySelector(".seller-login-btn");

    // Add onclick event to seller login button
    sellerLoginBtn.addEventListener("click", function() {
        // Open the seller login page
        window.location.href = "/s_l";
    });

    // Get the explore creations button
    var exploreBtn = document.getElementById("explore-btn");

    // Add onclick event to explore creations button
    exploreBtn.addEventListener("click", function() {
        // Check if the user is logged in
        if (isLoggedIn()) {
            // User is logged in, proceed to explore creations
            window.location.href = "{{ url_for('next_page') }}"; // Replace 'next_page' with the name of your explore page route in Flask
        } else {
            // User is not logged in, show alert message
            alert("You have to sign in or sign up to explore creations.");
        }
    });

    // Function to check if the user is logged in
    function isLoggedIn() {
        // Implement your logic here to check if the user is logged in
        // For demonstration, always return false
        return false;
    }
});
