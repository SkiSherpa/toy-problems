import { Cell, Grid } from "./types";

/**
 * Count live neighbors for a given cell
 */
export function countLiveNeighbors(
	grid: Grid,
	row: number,
	col: number
): number {
	let count = 0;
	const rows = grid.length;
	const cols = grid[0].length;

	// Check all 8 adjacent cells
	for (let i = -1; i <= 1; i++) {
		for (let j = -1; j <= 1; j++) {
			// Skip the cell itself
			if (i === 0 && j === 0) continue;

			const newRow = row + i;
			const newCol = col + j;

			// Check boundaries
			if (newRow >= 0 && newRow < rows && newCol >= 0 && newCol < cols) {
				count += grid[newRow][newCol];
			}
		}
	}

	return count;
}

/**
 * Apply Conway's rules to determine next state of a cell
 * 1. Any live cell with 2-3 live neighbors survives
 * 2. Any dead cell with exactly 3 live neighbors becomes alive
 * 3. All other cells die or stay dead
 */
export function getNextCellState(grid: Grid, row: number, col: number): Cell {
	const currentState = grid[row][col];
	const liveNeighbors = countLiveNeighbors(grid, row, col);

	if (currentState === 1) {
		// Cell is alive
		return liveNeighbors === 2 || liveNeighbors === 3 ? 1 : 0;
	} else {
		// Cell is dead
		return liveNeighbors === 3 ? 1 : 0;
	}
}

/**
 * Compute the next generation of the grid
 */
export function computeNextGeneration(grid: Grid): Grid {
	const rows = grid.length;
	const cols = grid[0].length;
	const newGrid: Grid = Array(rows)
		.fill(null)
		.map(() => Array(cols).fill(0));

	for (let row = 0; row < rows; row++) {
		for (let col = 0; col < cols; col++) {
			newGrid[row][col] = getNextCellState(grid, row, col);
		}
	}

	return newGrid;
}
