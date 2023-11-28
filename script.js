function createCustomPuzzle() {
    const imageInput = document.getElementById('imageInput');
    const file = imageInput.files[0];

    if (!file) {
        alert("Please choose an image.");
        return;
    }

    const reader = new FileReader();
    reader.onload = function (e) {
        console.log("Image loaded successfully:", e.target.result);

        const puzzleState = generatePuzzleState();
        const puzzleLink = `puzzle.html?state=${puzzleState.join(',')}&image=${encodeURIComponent(e.target.result)}`;

        console.log("Puzzle link:", puzzleLink);

        // Open a new window or tab with the puzzle
        window.open(puzzleLink, '_blank');
    };

    reader.readAsDataURL(file);
}
