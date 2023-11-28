// Function to create custom puzzle and open a new page
function createCustomPuzzle() {
    numRows = parseInt(document.getElementById('rows').value);
    numCols = parseInt(document.getElementById('cols').value);

    const puzzleState = generatePuzzleState();
    const puzzleLink = `puzzle.html?state=${puzzleState.join(',')}`;

    // Open a new window or tab with the puzzle
    window.open(puzzleLink, '_blank');
}

// Function to generate puzzle state
function generatePuzzleState() {
    const puzzleState = [];
    const totalPieces = numRows * numCols;

    for (let i = 0; i < totalPieces; i++) {
        puzzleState.push(i);
    }

    // Shuffle the puzzle state
    for (let i = totalPieces - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [puzzleState[i], puzzleState[j]] = [puzzleState[j], puzzleState[i]];
    }

    return puzzleState;
}
