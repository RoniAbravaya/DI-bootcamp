import random

# Exercise 1
def get_random_temp(season):
    if season == 'winter':
        return round(random.uniform(-10, 16), 1)
    elif season == 'spring':
        return round(random.uniform(-5, 23), 1)
    elif season == 'summer':
        return round(random.uniform(16, 32), 1)
    elif season == 'autumn' or season == 'fall':
        return round(random.uniform(5, 23), 1)

def main():
    season = input("Enter the season (summer, autumn, winter, spring): ").lower()
    temp = get_random_temp(season)
    print(f"The temperature right now is {temp} degrees Celsius.")
    if temp < 0:
        print("Brrr, that’s freezing! Wear some extra layers today.")
    elif 0 <= temp <= 16:
        print("Quite chilly! Don’t forget your coat.")
    elif 16 < temp <= 23:
        print("Nice weather, enjoy!")
    elif 23 < temp <= 32:
        print("It's warm outside.")
    else:
        print("It's hot! Stay cool.")

main()

# Exercise 2
data = [
    {"question": "What is Baby Yoda's real name?", "answer": "Grogu"},
    {"question": "Where did Obi-Wan take Luke after his birth?", "answer": "Tatooine"},
    {"question": "What year did the first Star Wars movie come out?", "answer": "1977"},
    {"question": "Who built C-3PO?", "answer": "Anakin Skywalker"},
    {"question": "Anakin Skywalker grew up to be who?", "answer": "Darth Vader"},
    {"question": "What species is Chewbacca?", "answer": "Wookiee"}
]

def star_wars_quiz():
    correct_answers = 0
    wrong_answers = []
    for q in data:
        user_ans = input(q["question"] + " ")
        if user_ans.lower() == q["answer"].lower():
            correct_answers += 1
        else:
            wrong_answers.append({"question": q["question"], "user_answer": user_ans, "correct_answer": q["answer"]})
    print(f"You got {correct_answers} correct and {len(wrong_answers)} incorrect answers.")
    if len(wrong_answers) > 3:
        print("You got more than 3 wrong answers. You can play again.")

star_wars_quiz()

# Exercise 3
def get_age(year, month, day):
    current_year = 2024
    current_month = 5
    age = current_year - year
    if month > current_month or (month == current_month and day > 5):
        age -= 1
    return age

def can_retire(gender, date_of_birth):
    year, month, day = map(int, date_of_birth.split('/'))
    age = get_age(year, month, day)
    if gender == 'm':
        return age >= 67
    elif gender == 'f':
        return age >= 62
    else:
        return False

gender = input("Enter your gender (m/f): ").lower()
dob = input("Enter your date of birth (yyyy/mm/dd): ")
if can_retire(gender, dob):
    print("Congratulations! You can retire.")
else:
    print("Sorry, you can't retire yet.")

# Exercise 4
def calculate_X(X):
    return X + int(str(X) * 2) + int(str(X) * 3) + int(str(X) * 4)

X = int(input("Enter a number: "))
print("Result:", calculate_X(X))
