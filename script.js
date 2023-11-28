// Function to load user-uploaded image
function loadImage() {
    const imageInput = document.getElementById('imageInput');
    const file = imageInput.files[0];

    if (file) {
        const reader = new FileReader();
        reader.onload = function (e) {
            puzzleContainer.style.backgroundImage = `url('${e.target.result}')`;
        };
        reader.readAsDataURL(file);
    }
}
