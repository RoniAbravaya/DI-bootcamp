import random

class RockPaperScissors:
    def __init__(self):
        self.outcomes = {'rock': 'scissors', 'paper': 'rock', 'scissors': 'paper'}
        self.user_wins = 0
        self.computer_wins = 0
        self.draws = 0

    def play_game(self):
        while True:
            user_choice = input("Enter your move (rock/paper/scissors) or type 'quit' to exit: ").lower()
            if user_choice == 'quit':
                break
            if user_choice not in self.outcomes:
                print("Invalid choice. Please choose 'rock', 'paper', or 'scissors'.")
                continue
            
            computer_choice = random.choice(list(self.outcomes.keys()))
            print(f"Computer's move: {computer_choice}")

            if user_choice == computer_choice:
                print("It's a tie!")
                self.draws += 1
            elif self.outcomes[user_choice] == computer_choice:
                print("You won!")
                self.user_wins += 1
            else:
                print("Computer won!")
                self.computer_wins += 1
        
        self.print_summary()

    def print_summary(self):
        print("\nGame summary:")
        print(f"Total games played: {self.user_wins + self.computer_wins + self.draws}")
        print(f"User wins: {self.user_wins}")
        print(f"Computer wins: {self.computer_wins}")
        print(f"Draws: {self.draws}")

if __name__ == "__main__":
    game = RockPaperScissors()
    game.play_game()
