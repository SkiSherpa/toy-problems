/*
I want you to design tic-tac-toe. Specifically, I want you to write something that implements a function `make_move(player, position)` and returns the state of the board. `player` is one of ‘X’ and ‘O’

the state of the board should be like this:

{
    board: {whatever your board representation is},
    winner: ‘X’ if X has won, ‘O’ if O has won, ‘Tie’ if done and tied, null otherwise
}

you should prevent illegal moves (including the same player going twice in a row, or going after the game is done)
you decide how to represent the board and `position`
Ah, and one more thing: should have a `start_new_game` function too
*/
/*
[
    [ , , ],
    [ , , ],
    [ , , ]
]
*/
// X is going to start first
// ititial state of winner is set to null



// change the value for winner in the state of the board obj
// return the winner state: null, "X", "O", "tie"
// loop through each row
    // IF all items in a row are equal
        // return first item in row
// [
//     ["00","01","02"],
//     ["10","11","12"],
//     ["20","21","22"],
// ]
// loop through j
    // loop through i
        // IF all items in col are equal
            // return first item in that col
// get hard code for diagnols
    // return first item in diagnols if all equal
// loop through all cells
    // IF any cell is a space
        // return null
// return "tie"
const isWin = function (board) {
    console.log('isWin board', board);
    // rows
    for (let i = 0; i < 3; i++) {
        // console.log('[i][0]', board[i][0], board[i][1], board[i][2]);
        if (board[i][0] === board[i][1] && board[i][0] === board[i][2] && board[i][1] === board[i][2]) {
            console.log("rows");
            return board[i][0];
        }
    }
    // cols
    for (let j = 0; j < 3; j++) {
        if (board[0][j] === board[1][j] && board[0][j] === board[2][j] && board[1][j] === board[2][j]) {
            console.log('cols');
            return board[0][j];
        }
    }
    // diag
    if (board[0][0] === board[1][1] && board[0][0] === board[2][2] && board[1][1] === board[2][2] ) {
        console.log('diag1', board[0][0], board[1][1], board[2][2]);

        return board[0][0];
    }
    if (board[2][0] === board[1][1] && board[2][0] === board[0][2] && board[1][1] === board[0][2]) {
        console.log('diag2');
        return board[2][0];
    }
    // check for on going game, checking for spaces
    for (let i = 0; i < 3; i++) {
        for (let j = 0; j < 3; j++) {
            if (board[i][j] === " ") {
                return null;
            }
        }
    }
    // its a tie
    return "tie";
}

// call a new boardState save to var
// return that var
const startNewGame = function () {
    let newBoardState = new boardState();
    return newBoardState;
}

// shows the winner value
// return "X", "O", "tie", null
const displayBoardState = function (boardState) {
    if (boardState.winner === "tie") {
        console.log("Cats game. The game is tie");
    } else {
        console.log(`The winner is ${boardState.winner}!`);
    }
}

class boardState {
    constructor () {
        this.board = [[" ", " ", " "],[" ", " ", " "],[" ", " ", " "]];
        this.winner = null;
    }
    // place current play char into board at given i, j
    // return the board with the char in place
    makeMove (player, pos) {
        // it needs to check for illegal moves

        let i = pos[0];
        let j = pos[1];
        this.board[i][j] = player;
        // check if someone won
        return {board: deepcopy(this.board), winner: this.winner};
    }
    startNewGame () {
        let newBoardState = new boardState();
        return newBoardState;
    }
}

// save startNewGame to var "curBoard"
// make a array to hold every next move
// X will go first
// loop through moves
    // call makeMove (current move in moves, i, j, board) save to "curBoard"
    // call isWin(curBoard)
    // IF the boardState winner value is Not null
        // break the loop
// set board state winner to tie

const game = function () {
    let boardState = startNewGame();
    let moves = ["X", "O", "X", "O", "X", "O", "X", "O", "X"];
    let i = 0;
    let j = 0;
    boardState.board = [
        ["X", "O", "X"],
        ["X", "O", "O"],
        ["O", "X", "O"]
    ];
    for (let k = 0; k < 9; k++) {
        // Input from the front here to select i and j
        boardState.board = makeMove(moves[k], [i,j]);
        if (k === 0) {
            console.log("k is zero", boardState.board);
        }
        boardState.winner = isWin(boardState.board);
        if (boardState.winner !== null) {
            break;
        }
    }
    displayBoardState(boardState);
}

console.log(game());
// (1) no illegal moves
// (2) funciton signature is makeMove(player, position) -> {board: <board state>, winnder: null | 'X' | 'O' | 'Tie'}

// read: https://medium.com/front-end-weekly/understanding-pass-by-value-and-pass-by-reference-in-javascript-8e2a0806b175

// story always working, even if ftx failed it wasn't bc of nishu's neglect. We did all this
