import random

# Exercise 1
def display_message():
    print("I am learning about functions in this course.")

display_message()

# Exercise 2
def favorite_book(title):
    print(f"One of my favorite books is {title}.")

favorite_book("Alice in Wonderland")

# Exercise 3
def describe_city(city, country="Unknown"):
    print(f"{city} is in {country}.")

describe_city("Reykjavik", "Iceland")
describe_city("Dublin")

# Exercise 4
def compare_numbers(num1):
    num2 = random.randint(1, 100)
    print(f"Generated number: {num2}")
    if num1 == num2:
        print("Success! The numbers match.")
    else:
        print("Fail! The numbers do not match.")

compare_numbers(50)

# Exercise 5
def make_shirt(size="large", text="I love Python"):
    print(f"The size of the shirt is {size} and the text is '{text}'.")

make_shirt()
make_shirt("medium")
make_shirt("small", "Hello, World!")

# Bonus
make_shirt(size="medium", text="Hello, World!")

# Exercise 6
magician_names = ['Harry Houdini', 'David Blaine', 'Criss Angel']

def show_magicians(magicians):
    for magician in magicians:
        print(magician)

def make_great(magicians):
    for i in range(len(magicians)):
        magicians[i] += " the Great"

make_great(magician_names)
show_magicians(magician_names)
