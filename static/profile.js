document.addEventListener('DOMContentLoaded', function() {
    const editProfileButton = document.getElementById('edit-profile-btn');
    const profileName = document.getElementById('profile-name');
    const profileEmail = document.getElementById('profile-email');
    const profileBio = document.getElementById('profile-bio');

    editProfileButton.addEventListener('click', function() {
        const newName = prompt('Enter your new name:');
        const newEmail = prompt('Enter your new email:');
        const newBio = prompt('Enter your new bio:');

        if (newName && newEmail && newBio) {
            profileName.textContent = newName;
            profileEmail.textContent = newEmail;
            profileBio.textContent = newBio;
        }
    });
});
