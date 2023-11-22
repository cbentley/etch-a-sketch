function drawGrid(gridSize=16) {
    grid.innerHTML = '';
    grid.style.gridTemplateColumns = `repeat(${gridSize}, 1fr)`;
    for (let i=1; i <= gridSize*gridSize; i++) {
        const gridItem = document.createElement('div');
        gridItem.addEventListener('mouseover', handleColorChange);
        grid.appendChild(gridItem);
    }
}

function handleClick() {
    const gridSizeStr = prompt("Enter grid size (whole number between 2 and 100):");
    const gridSizeInt = convertStrToIntOrNull(gridSizeStr);

    if (gridSizeInt && gridSizeInt > 1 && gridSizeInt < 101) {
        drawGrid(gridSizeInt);
    } else {
        alert("Your entry must be a whole number between 2 and 100");
    }
}

function handleColorChange(e) {
    // Set fixed color with CSS class:
    // e.target.classList.add('is-hovered');

    // Set fixed color with Javascript:
    e.target.style.backgroundColor = '#952a7f';

    // Set random color with Javascript:
    // const randomColor = Math.floor(Math.random() * 16777215).toString(16);
    // e.target.style.backgroundColor = `#${randomColor}`;

    // Get progressively darker
}

function convertStrToIntOrNull(str) {
    // Converts str to int, but only if str only contains an int, then return the int. Otherwise, returns null.

    // Try parsing the string as a float
    const floatNum = parseFloat(str);

    // Check if the parsed float is equal to its integer representation
    if (floatNum === parseInt(str, 10)) {
        // If true, return int
        return parseInt(str, 10);
    } else {
        // If not, it's a float, so return null
        return null;
    }
}

const button = document.querySelector('button');
const grid = document.getElementById('grid');

button.addEventListener('click', handleClick);

window.onload = () => drawGrid();