// --UI--
const ui = document.querySelector('.ui');
// Grid Setup
const grid = document.querySelector('.grid');
const num = 20;

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

// Grid Generation


for (let i = 0; i < num; i++) {
    // creating collumns
    const col = document.createElement('div');
    grid.append(col);
    col.className = 'col';

    for (let j = 0; j < num; j++) {
        // filling the collumns with rows (cells)
        const cell = document.createElement('div');
        cell.className = 'cell';
        col.append(cell);
        // adding event listener for coloring to every cell
        cell.addEventListener('mouseover', function () {
            cell.style.backgroundColor = color;
            cell.className += ' colored';
        });
    }
}

// --Functions--
// Get Color
function getColor(){
    let userInput = document.getElementById('colorChoice').value;
    return color = userInput;
}

// Erase All
btnErase.addEventListener('click', Erase);
function Erase(){
    const coloredCells = document.querySelectorAll('.cell.colored')
    coloredCells.forEach(cell => {
        cell.className = 'cell';
        cell.style.backgroundColor = 'white';
    });
    return;
}

// Eraser
btnEraser.addEventListener('click', Eraser);
function Eraser(){
    console.log('in Eraser');
    return color = 'white';
}
//----