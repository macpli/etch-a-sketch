/*
    1. create a grid:
        800px x 800px

        
    2. add event
*/
const grid = document.querySelector('.grid');
const num = 16;
let color = prompt('Chose color');

for(let i = 0; i < num; i++){
    const col = document.createElement('div');
    grid.append(col);
    col.className = 'col';

    console.log('creating col '+ i)

    for(let j = 0; j < num; j++){
        const cell = document.createElement('div');
        cell.className = 'cell';
        col.append(cell);
        cell.addEventListener('mouseover', function(){
            cell.style.backgroundColor = color;
        });

        console.log('creating row ' + j)
    }  
}
