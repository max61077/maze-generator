function populateGrid (grid, rows, cols) {

    for(let i = 0; i < rows; i++) {
        for(let j = 0; j < cols; j++) {
            const cell = new Cell(i, j);

            grid.push(cell);
        }
    }
}