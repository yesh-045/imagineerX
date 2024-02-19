document.addEventListener('DOMContentLoaded', function() {
    const signupForm = document.getElementById('signup-form');
    const emailInput = document.getElementById('email');
    const usernameInput = document.getElementById('username');
    const passwordInput = document.getElementById('new-password');
    const nameInput = document.getElementById('name');
    const addressInput = document.getElementById('address');
    const phoneInput = document.getElementById('phone');

    // Function to check if all mandatory fields are filled
    function checkMandatoryFields() {
        const emailValue = emailInput.value.trim();
        const usernameValue = usernameInput.value.trim();
        const passwordValue = passwordInput.value.trim();
        const nameValue = nameInput.value.trim();
        const addressValue = addressInput.value.trim();
        const phoneValue = phoneInput.value.trim();

        return emailValue !== '' &&
               usernameValue !== '' &&
               passwordValue !== '' &&
               nameValue !== '' &&
               addressValue !== '' &&
               phoneValue !== '';
    }

    // Function to enable or disable the "Become a Verified Seller" checkbox
    function updateVerifiedSellerStatus() {
        const verifiedSellerCheckbox = document.getElementById('verified-seller-checkbox');

        if (checkMandatoryFields()) {
            verifiedSellerCheckbox.disabled = false;
        } else {
            verifiedSellerCheckbox.disabled = true;
            verifiedSellerCheckbox.checked = false; // Uncheck the checkbox if disabled
        }
    }

    // Listen for changes in form fields
    signupForm.addEventListener('input', updateVerifiedSellerStatus);
});
