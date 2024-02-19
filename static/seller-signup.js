document.addEventListener('DOMContentLoaded', function() {
    const signupForm = document.getElementById('signup-form');
    const emailInput = document.getElementById('email');
    const newUsernameInput = document.getElementById('new-username');
    const newPasswordInput = document.getElementById('new-password');
    const fullNameInput = document.getElementById('full-name');
    const addressInput = document.getElementById('address');
    const addressProofInput = document.getElementById('address-proof');
    const bankAccountInput = document.getElementById('bank-account');
    const productDetailsInput = document.getElementById('product-details');
    const verifiedSellerCheckbox = document.getElementById('verified-seller');

    // Function to check if all mandatory fields are filled
    function checkMandatoryFields() {
        const emailValue = emailInput.value.trim();
        const newUsernameValue = newUsernameInput.value.trim();
        const newPasswordValue = newPasswordInput.value.trim();
        const fullNameValue = fullNameInput.value.trim();
        const addressValue = addressInput.value.trim();
        const bankAccountValue = bankAccountInput.value.trim();

        return emailValue !== '' &&
               newUsernameValue !== '' &&
               newPasswordValue !== '' &&
               fullNameValue !== '' &&
               addressValue !== '' &&
               bankAccountValue !== '';
    }

    // Function to check if address proof is uploaded
    function checkAddressProof() {
        return addressProofInput.files.length > 0;
    }

    // Function to enable or disable the "Become a Verified Seller" checkbox
    function updateVerifiedSellerStatus() {
        if (checkMandatoryFields() && checkAddressProof()) {
            verifiedSellerCheckbox.disabled = false;
        } else {
            verifiedSellerCheckbox.disabled = true;
            verifiedSellerCheckbox.checked = false; // Uncheck the checkbox if disabled
        }
    }

    // Listen for changes in form fields and address proof input
    signupForm.addEventListener('input', updateVerifiedSellerStatus);
    addressProofInput.addEventListener('change', updateVerifiedSellerStatus);
});
