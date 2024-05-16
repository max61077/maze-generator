let canvasWidth = 400;
let canvasHeight = 400;
let rows = 0, cols = 0;
let cellWidth = 40;

const grid = [];
/**
 * This Function runs only once
 */

function setup() {
    createCanvas(canvasWidth, canvasHeight);

    rows = floor(canvasHeight / cellWidth);
    cols = floor(canvasWidth / cellWidth);

    populateGrid(grid, rows, cols);
}

/**
 * This function runs infinitely
 */

function draw() {
    background(51);

    for(let i = 0; i < grid.length; i++) {
        grid[i].show();
    }
}