// --UI--
const ui = document.querySelector('.ui');
// Grid Setup
const grid = document.querySelector('.grid');
const cellCount = 32;

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
for (let i = 0; i < cellCount * cellCount; i++) {
    // 
    const cell = document.createElement('div');
    cell.className = 'cell';
    grid.append(cell);
    cell.addEventListener('mouseover', function () {
        cell.style.backgroundColor = color;
        cell.className += ' colored';
    });

    grid.style.setProperty('--cell-count', cellCount);

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
    return color = 'white';
}
//----