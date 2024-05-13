import random

# Ask the user for a string of 10 characters
try:
    user_string = input("Enter a string of exactly 10 characters: ")
except ValueError:
    print("Please enter a valid string.")

# Check the length of the string
if len(user_string) < 10:
    print("String not long enough.")
elif len(user_string) > 10:
    print("String too long.")
else:
    print("Perfect string!")

# Print the first and last characters of the string
print("First character:", user_string[0])
print("Last character:", user_string[-1])

# Construct the string character by character
print("Constructing the string character by character:")
for i in range(1, len(user_string) + 1):
    print(user_string[:i])

# Bonus: Shuffle the string
user_list = list(user_string)
random.shuffle(user_list)
jumbled_string = ''.join(user_list)
print("Jumbled string:", jumbled_string)
