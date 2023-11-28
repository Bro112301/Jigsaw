const puzzleContainer = document.getElementById('puzzle-container');

// Number of rows and columns in the puzzle
const numRows = 3;
const numCols = 3;

// Function to create puzzle pieces
function createPuzzle() {
    const pieceWidth = puzzleContainer.offsetWidth / numCols;
    const pieceHeight = puzzleContainer.offsetHeight / numRows;

    for (let i = 0; i < numRows; i++) {
        for (let j = 0; j < numCols; j++) {
            const piece = document.createElement('div');
            piece.classList.add('puzzle-piece');
            piece.style.width = `${pieceWidth}px`;
            piece.style.height = `${pieceHeight}px`;
            piece.style.backgroundImage = `url('your_image.jpg')`;
            piece.style.backgroundSize = `${numCols * 100}% ${numRows * 100}%`;
            piece.style.backgroundPosition = `-${j * (100 / (numCols - 1))}% -${i * (100 / (numRows - 1))}%`;
            piece.draggable = true;

            puzzleContainer.appendChild(piece);
        }
    }

    // Add drag and drop event listeners
    puzzleContainer.addEventListener('dragstart', (e) => {
        e.dataTransfer.setData('text/plain', '');
    });

    puzzleContainer.addEventListener('dragover', (e) => {
        e.preventDefault();
    });

    puzzleContainer.addEventListener('drop', (e) => {
        e.preventDefault();
        const draggedPiece = document.querySelector('.dragging');
        const target = e.target;

        if (target.classList.contains('puzzle-piece')) {
            puzzleContainer.insertBefore(draggedPiece, target);
        } else {
            puzzleContainer.appendChild(draggedPiece);
        }

        draggedPiece.classList.remove('dragging');
    });
}

// Initialize puzzle
createPuzzle();
