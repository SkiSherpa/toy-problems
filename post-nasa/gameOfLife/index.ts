export * from "./types";
export * from "./grid";
export * from "./rules";
export * from "./game";

// Example usage:
import { createGame, tick, setCell } from "./game";
import { printGrid } from "./grid";

let game = createGame(10, 10);

// Create a glider pattern
game = setCell(game, 1, 2, 1);
game = setCell(game, 2, 3, 1);
game = setCell(game, 3, 1, 1);
game = setCell(game, 3, 2, 1);
game = setCell(game, 3, 3, 1);

console.log("Initial state:");
printGrid(game.grid);

// Run a few generations
for (let i = 1; i <= 5; i++) {
	game = tick(game);
	console.log(`Generation ${i}:`);
	printGrid(game.grid);
}
