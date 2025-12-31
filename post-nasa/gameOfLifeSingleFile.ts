type Cell = 0 | 1; // 0 = dead, 1 = alive
type Grid = Cell[][];

class GameOfLife {
	private grid: Grid;
	private rows: number;
	private cols: number;

	constructor(rows: number, cols: number, initialGrid?: Grid) {
		this.rows = rows;
		this.cols = cols;

		if (initialGrid) {
			this.grid = initialGrid;
		} else {
			// Initialize with empty grid
			this.grid = this.createEmptyGrid();
		}
	}

	private createEmptyGrid(): Grid {
		return Array(this.rows)
			.fill(null)
			.map(() => Array(this.cols).fill(0));
	}

	/**
	 * Count live neighbors for a given cell
	 */
	private countLiveNeighbors(row: number, col: number): number {
		let count = 0;

		// Check all 8 adjacent cells
		for (let i = -1; i <= 1; i++) {
			for (let j = -1; j <= 1; j++) {
				// Skip the cell itself
				if (i === 0 && j === 0) continue;

				const newRow = row + i;
				const newCol = col + j;

				// Check boundaries
				if (
					newRow >= 0 &&
					newRow < this.rows &&
					newCol >= 0 &&
					newCol < this.cols
				) {
					count += this.grid[newRow][newCol];
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
	private getNextCellState(row: number, col: number): Cell {
		const currentState = this.grid[row][col];
		const liveNeighbors = this.countLiveNeighbors(row, col);

		if (currentState === 1) {
			// Cell is alive
			return liveNeighbors === 2 || liveNeighbors === 3 ? 1 : 0;
		} else {
			// Cell is dead
			return liveNeighbors === 3 ? 1 : 0;
		}
	}

	/**
	 * Advance the game by one generation
	 */
	public tick(): void {
		const newGrid: Grid = this.createEmptyGrid();

		for (let row = 0; row < this.rows; row++) {
			for (let col = 0; col < this.cols; col++) {
				newGrid[row][col] = this.getNextCellState(row, col);
			}
		}

		this.grid = newGrid;
	}

	/**
	 * Get current grid state
	 */
	public getGrid(): Grid {
		return this.grid.map((row) => [...row]); // Return a copy
	}

	/**
	 * Set a cell to alive or dead
	 */
	public setCell(row: number, col: number, state: Cell): void {
		if (row >= 0 && row < this.rows && col >= 0 && col < this.cols) {
			this.grid[row][col] = state;
		}
	}

	/**
	 * Randomize the grid
	 */
	public randomize(probability: number = 0.3): void {
		for (let row = 0; row < this.rows; row++) {
			for (let col = 0; col < this.cols; col++) {
				this.grid[row][col] = Math.random() < probability ? 1 : 0;
			}
		}
	}

	/**
	 * Clear the grid
	 */
	public clear(): void {
		this.grid = this.createEmptyGrid();
	}

	/**
	 * Print grid to console (useful for testing)
	 */
	public print(): void {
		console.log(
			this.grid
				.map((row) => row.map((cell) => (cell ? "█" : "·")).join(" "))
				.join("\n")
		);
		console.log("\n");
	}
}

// Example usage:
const game = new GameOfLife(10, 10);

// Create a glider pattern
game.setCell(1, 2, 1);
game.setCell(2, 3, 1);
game.setCell(3, 1, 1);
game.setCell(3, 2, 1);
game.setCell(3, 3, 1);

console.log("Initial state:");
game.print();

// Run a few generations
for (let i = 1; i <= 5; i++) {
	game.tick();
	console.log(`Generation ${i}:`);
	game.print();
}
