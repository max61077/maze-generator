class Cell {
    constructor(i, j) {
        this.i = i;
        this.j = j;
        this.walls = [true, true, true, true]; // top, right, bottom, left
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
    }
}