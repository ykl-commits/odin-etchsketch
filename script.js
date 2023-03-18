const gridContainer = document.querySelector('#grid-container');
let isRainbowGrid = false;


function createGrid(rows, columns, isRainbow) {
    gridContainer.innerHTML = '';
    let isMouseDown = false;

    if (isRainbow) {
        isRainbowGrid = true;
    } 
    for (let i = 0; i < rows; i++){
        for (let j = 0; j < columns; j++) {
            const gridSquare = document.createElement('div')
            gridSquare.classList.add('grid-square');
            gridSquare.style.border = '1px solid rgba(0, 0, 0, 0.5)';
            gridContainer.appendChild(gridSquare);

            gridSquare.addEventListener('mouseover', () => {
                if (isMouseDown) {
                    gridSquare.style.backgroundColor = 'white';
                } else {
                    if (isRainbow){
                        const randomColor = Math.floor(Math.random()*16777215).toString(16);
                        gridSquare.style.backgroundColor = '#' + randomColor;
                    } else {
                    gridSquare.style.backgroundColor = 'black'
                    }
                }
            });

            gridSquare.addEventListener('mousedown', () => {
                isMouseDown = true;
                gridSquare.style.backgroundColor = 'white';
            });

            gridSquare.addEventListener('mouseup', () => {
                isMouseDown = false;
            });
        }
    }

    gridContainer.style.gridTemplateRows = `repeat(${rows}, 1fr)`;
    gridContainer.style.gridTemplateColumns = `repeat(${columns}, 1fr)`;


}

const blackWhite = document.querySelector('#blackwhite');

blackWhite.addEventListener('click', () => {
    isRainbowGrid = false;
    const rows = parseInt(document.querySelector('#rows').value);
    const columns = parseInt(document.querySelector('#columns').value);

    createGrid(rows, columns);
});

const rainbowButton = document.querySelector('#rainbow');

rainbowButton.addEventListener('click', () => {
    const rows = parseInt(document.querySelector('#rows').value);
    const columns = parseInt(document.querySelector('#columns').value);

    createGrid(rows, columns, true);
});

const submitButton = document.querySelector(`#submit-button`);

submitButton.addEventListener('click', () => {
    const rows = parseInt(document.querySelector('#rows').value);
    const columns = parseInt(document.querySelector('#columns').value);

    if (rows >= 1 && rows <= 100 && columns >= 1 && columns <= 100) {
        createGrid(rows, columns, isRainbowGrid);
    } else {
        alert('Pleae enter values between 1 and 100.')
    }
});


const resetButton = document.querySelector('#reset-button');

resetButton.addEventListener('click', () => {

    const rows = parseInt(document.querySelector('#rows').value);
    const columns = parseInt(document.querySelector('#columns').value);
    createGrid(rows, columns);
})

function resetGrid () {
    const rows = parseInt(document.querySelector('#rows').value);
    const columns = parseInt(document.querySelector('#columns').value);
    if (isRainbowGrid) {
        createGrid(rows, columns, isRainbowGrid);
    } else {
        isRainbowGrid = false;
        createGrid(rows, columns);
    }

}

resetButton.addEventListener('click', resetGrid);


