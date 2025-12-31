import { GameState, Grid } from "./types";
import {
	createEmptyGrid,
	copyGrid,
	setCell as setGridCell,
	randomizeGrid,
} from "./grid";
import { computeNextGeneration } from "./rules";

export function createGame(
	rows: number,
	cols: number,
	initialGrid?: Grid
): GameState {
	return {
		grid: initialGrid || createEmptyGrid(rows, cols),
		rows,
		cols,
		generation: 0,
	};
}

export function tick(state: GameState): GameState {
	return {
		...state,
		grid: computeNextGeneration(state.grid),
		generation: state.generation + 1,
	};
}

export function setCell(
	state: GameState,
	row: number,
	col: number,
	cellState: 0 | 1
): GameState {
	return {
		...state,
		grid: setGridCell(state.grid, row, col, cellState),
	};
}

export function randomize(
	state: GameState,
	probability: number = 0.3
): GameState {
	return {
		...state,
		grid: randomizeGrid(state.rows, state.cols, probability),
		generation: 0,
	};
}

export function clear(state: GameState): GameState {
	return {
		...state,
		grid: createEmptyGrid(state.rows, state.cols),
		generation: 0,
	};
}

export function getGrid(state: GameState): Grid {
	return copyGrid(state.grid);
}
