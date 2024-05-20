class Cell {
    constructor(i, j) {
        this.i = i;
        this.j = j;
        this.visited = false;
        this.walls = [true, true, true, true]; // top, right, bottom, left
    }

    checkNeighbors () {
        const neighbors = [];

        const x = this.i, y = this.j;

        let top = null, right = null, bottom = null, left = null;

        if (x - 1 >= 0) {
            top = grid[x - 1][y];
        }

        if (y < cols) {
            right = grid[x][y + 1];
        }

        if (x + 1 < rows) {
            bottom = grid[x + 1][y];
        }

        if (y - 1 >= 0) {
            left = grid[x][y - 1];
        }

        if (top && !top.visited) {
            neighbors.push(top);
        }

        if (right && !right.visited) {
            neighbors.push(right);
        }

        if (bottom && !bottom.visited) {
            neighbors.push(bottom);
        }

        if (left && !left.visited) {
            neighbors.push(left);
        }

        if (neighbors.length > 0) {
            let r = floor(random(0, neighbors.length));

            return neighbors[r];
        }

        return null;
    }

    show () {
        const x = this.i * cellWidth;
        const y = this.j * cellWidth;

        stroke(255);
        noFill();

        /** Drawing 4 lines in clockwise manner */

        if (this.walls[0]) {
            line(x, y, x + cellWidth, y); // Top Line
        }

        if (this.walls[1]) {
            line(x + cellWidth, y, x + cellWidth, y + cellWidth); // Right Line
        }

        if (this.walls[2]) {
            line(x + cellWidth, y + cellWidth, x, y + cellWidth); // Bottom Line
        }

        if (this.walls[3]) {
            line(x, y + cellWidth, x, y); // Left Line
        }

        if (this.visited) {
            noStroke();
            fill(0, 0, 255, 200);
            rect(x, y, cellWidth, cellWidth);
        }
    }

    highlight() {
        const x = this.i * cellWidth;
        const y = this.j * cellWidth;

        noStroke();

        fill(255, 0, 0);

        rect(x, y, cellWidth, cellWidth);
    }
}