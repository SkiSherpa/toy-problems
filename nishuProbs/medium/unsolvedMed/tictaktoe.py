# I want you to design tic-tac-toe. Specifically, I want you to write something that implements a function `make_move(player, position)` and returns the state of the board. `player` is one of ‘X’ and ‘O’

# the state of the board should be like this:

# {
#     board: {whatever your board representation is},
#     winner: ‘X’ if X has won, ‘O’ if O has won, ‘Tie’ if done and tied, null otherwise
# }

# you should prevent illegal moves (including the same player going twice in a row, or going after the game is done)
# you decide how to represent the board and `position`
# Ah, and one more thing: should have a `start_new_game` function too

# game state:
    # [
    #     [,,],
    #     [,,],
    #     [,,]
    # ]

# no illegal moves,
    # player going twice
    # making a move after game is over
    # going in a spot already choosen

# X will go first
    # make a count - if odd its X's turn
class Game:
    def __init__(self):
        self.board = [['','',''],['','',''],['','','']]
        self.winner = None

    def play_game(self):
        game = self.start_new_game()
        count = 0
        while count < 10:
            # keep track of player's turn
            if count % 2 == 0:
                player = 'X'
            else:
                player = 'O'

            pos = (0,0) # normally input from the front
            print("It's player " + player + "'s turn")
            game = self.make_move(player, pos)
            if game != None:
                count += 1

            # check for winner
            game = self.is_win(game)
            if game.winner == 'X':
                print("X has won")
                return
            elif game.winner == 'O':
                print("O has won")
                return
            elif game.winner == 'Tie':
                print("Cats Game, it's a Tie")
                return

    def make_move(self, player, pos):
        # must return the state of the board
        # IF there is not an empty space in board
            # print game is over you cant make a move
            # return
        cell_count = 0
        for row in self.board:
            for cell in row:
                if cell == ' ':
                    cell_count += 1
        if cell_count == 9:
            # check win state
            print('game is over, cannot make a move')

        # pull out i and j position from pos
        i,j = pos
        # IF current position is an empty str
            # add player to current position
        # otherwise,
            # IF cur Pos is not an empty str
                # print 'that spot is chosen'
        # return state of the board/winner
        if self.board[i][j] == ' ':
            self.board[i][j] == player
        else:
            print('that spot is chosen')
            return None
        return {self.board, self.winner}

    # col
        # j is fixed at 0, 1, 2
        # loop through board
            # row[i]
            # IF each row at 0,1,2 are all equal
                # cur_player = cur_row[j]
                # change state to winner for cur_player
    def is_win(self):
        # col
        for i in range(0,2):
            cur_row = self.board[i]
            if cur_row[0] == cur_row[1] == cur_row[2]:
                winning_player = cur_row[0]
                self.winner = winning_player
                return {self.board, self.winner}
        # row
        for i in range(0,2):
            if self.board[i][0] == self.board[i][1] == self.board[i][2]:
                winning_player = self.board[i][0]
                self.winner = winning_player
                return {self.board, self.winner}
        # diag
        if self.board[0][0] == self.board[1][1] == self.board[2][2]:
            winning_player = self.board[0][0]
            self.winner = winning_player
            return {self.board, self.winner}
        if self.board[2][0] == self.board[1][1] == self.board[0][2]:
            winning_player = self.board[2][0]
            self.winner = winning_player
            return {self.board, self.winner}
        # tie
        for i in range(0,2):
            cur_row = self.board[i]
            for j in range(0,2):
                cur_cell = cur_row[j]
                # IF space found return state of board - game should continur
                if cur_cell == ' ':
                    return {self.board, self.winner}
        return 'Tie'

    def start_new_game(self):
        self.board = [['','',''],['','',''],['','','']]
        self.winner = None
