// UI
const grid = document.querySelector('.grid');
const btnErase = document.querySelector('.btnErase');
const num = 16;

let color = document.getElementById('colorChoice');
color.addEventListener('input', getColor)
//

// Grid generation
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


// Erase feature
btnErase.addEventListener('click', Erase);

function getColor(){
    let userInput = document.getElementById('colorChoice').value;
    return color = userInput;
}

function Erase(){
    const coloredCells = document.querySelectorAll('.cell.colored')
    coloredCells.forEach(cell => {
        cell.className = 'cell';
        cell.style.backgroundColor = 'white';
    });
    return;
}