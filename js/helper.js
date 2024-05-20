function populateGrid (grid, rows, cols) {
    for(let i = 0; i < rows; i++) {
        grid[i] = new Array(cols).fill(null);
    }

    for(let i = 0; i < rows; i++) {
        for(let j = 0; j < cols; j++) {
            const cell = new Cell(+i, +j);

            grid[i][j] = cell;
        }
    }
}

function removeWalls (cellA, cellB) {
    const hd = cellA.i - cellB.i; // Horizontal distance

    if (hd === 1) {
        cellA.walls[3] = false;
        cellB.walls[1] = false;
    } else if (hd === -1) {
        cellA.walls[1] = false;
        cellB.walls[3] = false;
    }

    const vd = cellA.j - cellB.j; // Vertical Distance

    if (vd === 1) {
        cellA.walls[0] = false;
        cellB.walls[2] = false;
    } else if (vd === -1) {
        cellA.walls[2] = false;
        cellB.walls[0] = false;
    }
}