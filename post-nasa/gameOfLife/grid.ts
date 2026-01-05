import { Cell, Grid } from "./types";

export function createEmptyGrid(rows: number, cols: number): Grid {
	return Array(rows)
		.fill(null)
		.map(() => Array(cols).fill(0));
}

export function copyGrid(grid: Grid): Grid {
	return grid.map((row) => [...row]);
}

export function setGridCell(
	grid: Grid,
	row: number,
	col: number,
	state: Cell
): Grid {
	const newGrid = copyGrid(grid);
	if (row >= 0 && row < grid.length && col >= 0 && col < grid[0].length) {
		newGrid[row][col] = state;
	}
	return newGrid;
}

export function randomizeGrid(
	rows: number,
	cols: number,
	probability: number = 0.3
): Grid {
	const grid = createEmptyGrid(rows, cols);
	for (let row = 0; row < rows; row++) {
		for (let col = 0; col < cols; col++) {
			grid[row][col] = Math.random() < probability ? 1 : 0;
		}
	}
	return grid;
}

export function printGrid(grid: Grid): void {
	console.log(
		grid
			.map((row) => row.map((cell) => (cell ? "█" : "·")).join(" "))
			.join("\n")
	);
	console.log("\n");
}
