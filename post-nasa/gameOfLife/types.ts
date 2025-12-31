export type Cell = 0 | 1;
export type Grid = Cell[][];

export interface GameState {
	grid: Grid;
	rows: number;
	cols: number;
	generation: number;
}
