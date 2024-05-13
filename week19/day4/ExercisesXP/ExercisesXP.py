# Exercise 1: Favorite Numbers
my_fav_numbers = {1, 3, 7}
my_fav_numbers.add(9)
my_fav_numbers.add(11)
my_fav_numbers.remove(11)

friend_fav_numbers = {2, 4, 6}
our_fav_numbers = my_fav_numbers.union(friend_fav_numbers)

# Exercise 2: Tuple
# Tuples are immutable, meaning you cannot change their contents after creation.
# You can create a new tuple by concatenating with another tuple.

# Exercise 3: List
basket = ["Banana", "Apples", "Oranges", "Blueberries"]
basket.remove("Banana")
basket.remove("Blueberries")
basket.append("Kiwi")
basket.insert(0, "Apples")
apples_count = basket.count("Apples")
basket.clear()
print(basket)

# Exercise 4: Floats
# A float is a data type that represents real numbers, with decimals.
# An integer represents whole numbers.
# Another way to generate a sequence of floats is using list comprehension.

sequence_floats = [float(i) for i in range(1, 6)]

# Exercise 5: For Loop
for num in range(1, 21):
    print(num)

for num in range(1, 21):
    if num % 2 == 0:
        print(num)

# Exercise 6: While Loop
name = ""
while name != "John":
    name = input("Enter your name: ")

# Exercise 7: Favorite Fruits
favorite_fruits = input("Enter your favorite fruit(s) separated by space: ").split()
chosen_fruit = input("Enter a fruit: ")
if chosen_fruit in favorite_fruits:
    print("You chose one of your favorite fruits! Enjoy!")
else:
    print("You chose a new fruit. I hope you enjoy")

# Exercise 8: Who Ordered A Pizza ?
toppings = []
while True:
    topping = input("Enter a topping (enter 'quit' to finish): ")
    if topping.lower() == 'quit':
        break
    else:
        print(f"Adding {topping} to your pizza.")
        toppings.append(topping)

print("Toppings on your pizza:", toppings)
print("Total price:", 10 + 2.5 * len(toppings))

# Exercise 9: Cinemax
family_ages = [int(input("Enter age for person {}: ".format(i+1))) for i in range(int(input("Enter number of people in family: ")))]
total_cost = sum([0 if age < 3 else 10 if 3 <= age <= 12 else 15 for age in family_ages])
print("Total cost for the family:", total_cost)

# Exercise 10: Sandwich Orders
sandwich_orders = ["Tuna sandwich", "Pastrami sandwich", "Avocado sandwich", "Pastrami sandwich", "Egg sandwich", "Chicken sandwich", "Pastrami sandwich"]
while "Pastrami sandwich" in sandwich_orders:
    sandwich_orders.remove("Pastrami sandwich")

finished_sandwiches = []
while sandwich_orders:
    sandwich = sandwich_orders.pop(0)
    finished_sandwiches.append(sandwich)
    print("I made your", sandwich.lower())

