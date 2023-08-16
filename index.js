// --UI--
const ui = document.querySelector('.ui');

// Buttons
const btnErase = document.createElement('button');
btnErase.className = ('btn btnErase');
btnErase.textContent = 'Erase';
ui.append(btnErase);

const btnEraser = document.createElement('button');
btnEraser.className = ('btn btnEraser');
btnEraser.textContent = 'Eraser';
ui.append(btnEraser);

// Color Input
let color = document.getElementById('colorChoice');
color.addEventListener('input', getColor);
//----

// --Functions--
// Generate Grid
function generateGrid() {
    const grid = document.querySelector('.grid');
    grid.innerHTML = ""; // this clears the previous grid
    const cellCount = parseInt(document.getElementById('cellCount').value);

    // Custom CSS property
    grid.style.setProperty('--cell-count', cellCount);

    for (let i = 0; i < cellCount * cellCount; i++) {
        // Generate Cells 
        console.log("cellCount = " + cellCount);
        const cell = document.createElement('div');
        cell.classList.add('cell');
        grid.appendChild(cell);
        cell.addEventListener('mouseover', function () {
            cell.style.backgroundColor = color;
            cell.className += ' colored';
        });
    }
    console.log('in generateGrid');
}

// Get Color
function getColor() {
    let userInput = document.getElementById('colorChoice').value;
    return color = userInput;
}

// Erase All
btnErase.addEventListener('click', Erase);

function Erase() {
    const coloredCells = document.querySelectorAll('.cell.colored')
    coloredCells.forEach(cell => {
        cell.className = 'cell';
        cell.style.backgroundColor = 'white';
    });
    return;
}

// Eraser
btnEraser.addEventListener('click', Eraser);

function Eraser() {
    return color = 'white';
}
//----

generateGrid();