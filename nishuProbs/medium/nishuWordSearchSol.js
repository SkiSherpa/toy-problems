function wordSearch(board, word) {
    const numRows = board.length;
    const numCols = board[0].length;
    const progress = {};

    // Initialize progress for base case
    progress[-1] = [];
    for (let i = 0; i < numRows; i++) {
        progress[-1][i] = [];
        for (let j = 0; j < numCols; j++) {
            progress[-1][i][j] = new Set([""]);
        }
    }

    // Build progress for each character in the word
        // i,j are board coor, k is index from ip "word"
    for (let k = 0; k < word.length; k++) {
        progress[k] = []; // arr that holds all the sub-arrs
        for (let i = 0; i < numRows; i++) {
            progress[k][i] = []; // sub-arrs, 3 in this ex
            for (let j = 0; j < numCols; j++) {
                progress[k][i][j] = new Set(); // make an empty set for each cell
                // IF current cell equals current letter in 'word'
                    // add path coor to current set
                if (board[i][j] === word[k]) {
                    const prevProgress = progress[k - 1];
                    const directions = [
                        [i - 1, j], [i + 1, j], [i, j + 1], [i, j - 1]
                    ];
                    // console.log('prevProgress', prevProgress);
                    for (let d = 0; d < directions.length; d++) {
                        const [prevI, prevJ] = directions[d]; // deconstruct and set prevI & prevJ
                        // IF prev cell is IN of bounds?
                        if (prevI >= 0 && prevI < numRows && prevJ >=
0 && prevJ < numCols) {
                            console.log('prevI', prevI, 'prevJ', prevJ);
                            const paths = prevProgress[prevI][prevJ];
                            console.log('paths', paths);
                            // paths is a set of coor
                            for (let path of paths) {
                                // IF the path does NOT have the current cell
                                    // add the current cell to the prev cell that had a correct letter
                                if (!path.includes(`(${i}, ${j})`)) {
                                    const newPath = path + `(${i}, ${j})`;
                                    progress[k][i][j].add(newPath);
                                }
                            }
                        }
                    }
                }
            }
        }
    }
    console.log(progress);
    // Collect all valid paths from the last character's progress
    const finalProgressGrid = progress[word.length - 1]; // find set with length of target word
    const allValidPaths = [];
    // loop over all cells in the array of with a key that is length of target word
    for (let i = 0; i < numRows; i++) {
        for (let j = 0; j < numCols; j++) {
            // an if with out an if, if a the set of coor exist in a cell
                // add it the allValidPaths
            for (let path of finalProgressGrid[i][j]) {
                console.log("!!~!PATH", path);
                allValidPaths.push(path);
            }
        }
    }

    return allValidPaths;
}

// Example usage:
const board = [
    ["S", "B", "C", "E"],
    ["S", "S", "C", "S"],
    ["A", "E", "E", "E"]
];

const word = "SEE";
console.log(wordSearch(board, word));
