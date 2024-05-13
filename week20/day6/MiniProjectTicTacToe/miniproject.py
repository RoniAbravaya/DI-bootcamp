# Function to display the Tic Tac Toe board
def display_board(board):
    print("  |   |")
    print(f"{board[0]} | {board[1]} | {board[2]}")
    print("  |   |")
    print("---------")
    print("  |   |")
    print(f"{board[3]} | {board[4]} | {board[5]}")
    print("  |   |")
    print("---------")
    print("  |   |")
    print(f"{board[6]} | {board[7]} | {board[8]}")
    print("  |   |")

# Function to get player input
def player_input(player):
    while True:
        position = input(f"Player {player}, choose a position (1-9): ")
        if position.isdigit():
            position = int(position)
            if 1 <= position <= 9:
                return position
        print("Invalid input. Please choose a number between 1 and 9.")

# Function to check for a win
def check_win(board, mark):
    # Check rows, columns, and diagonals for a win
    return ((board[0] == board[1] == board[2] == mark) or
            (board[3] == board[4] == board[5] == mark) or
            (board[6] == board[7] == board[8] == mark) or
            (board[0] == board[3] == board[6] == mark) or
            (board[1] == board[4] == board[7] == mark) or
            (board[2] == board[5] == board[8] == mark) or
            (board[0] == board[4] == board[8] == mark) or
            (board[2] == board[4] == board[6] == mark))

# Function to play the game
def play():
    board = [' '] * 9
    current_player = 'X'

    while True:
        display_board(board)
        position = player_input(current_player)
        board[position - 1] = current_player

        if check_win(board, current_player):
            display_board(board)
            print(f"Player {current_player} wins!")
            break

        if ' ' not in board:
            display_board(board)
            print("It's a tie!")
            break

        current_player = 'O' if current_player == 'X' else 'X'

# Start the game
play()
