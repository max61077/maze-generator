let canvasWidth = 400;
let canvasHeight = 400;
let rows = 0, cols = 0;
let cellWidth = 20;

const grid = [];

let currentCell = null;

const stack = [];

/**
 * This Function runs only once
 */

function setup() {
    createCanvas(canvasWidth, canvasHeight);

    rows = floor(height / cellWidth);
    cols = floor(width / cellWidth);

    populateGrid(grid, rows, cols);

    currentCell = grid[0][0];

    frameRate(15);
}

/**
 * This Function runs infinitely
 */

function draw() {
    background(51);

    grid.forEach(row => row.forEach(cell => cell.show()))

    currentCell.visited = true;
    currentCell.highlight();

    const nextCell = currentCell.checkNeighbors();

    if (nextCell) {
        nextCell.visited = true;

        stack.push(currentCell);

        removeWalls(currentCell, nextCell);

        currentCell = nextCell;
    } else if (stack.length > 0) {
        currentCell = stack.pop();
    }
}