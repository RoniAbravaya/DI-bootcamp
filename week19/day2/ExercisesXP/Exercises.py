print("Hello world\n" * 4, end="")

result = (99 ** 3) * 8
print(result)

print(5 < 3)          # Output: False
print(3 == 3)         # Output: True
print(3 == "3")       # Output: False
# The following line would raise a TypeError, so commenting it out
# print("3" > 3)
print("Hello" == "hello")  # Output: False

computer_brand = "Dell"  # You should replace "Dell" with your computer's brand name
print("I have a {} computer.".format(computer_brand))

computer_brand = "Dell"  # You should replace "Dell" with your computer's brand name
print(f"I have a {computer_brand} computer.")

# Step 1: Define variables
name = "John"
age = 30
shoe_size = 10

# Step 2: Create the info sentence using the variables
info = f"My name is {name}. I am {age} years old and my shoe size is {shoe_size}."

# Step 3: Print the info message
print(info)

# Step 1: Define variables
a = 10
b = 5

# Step 2: Compare the values of a and b
if a > b:
    print("Hello World")

# Ask the user for a number
number = int(input("Enter a number: "))

# Check if the number is odd or even
if number % 2 == 0:
    print("The number is even.")
else:
    print("The number is odd.")

# Predefined name
my_name = "ChatGPT"

# Ask the user for their name
user_name = input("What's your name? ")

# Check if the user's name matches the predefined name
if user_name == my_name:
    print("Hey, we have the same name! We must be twins separated at birth.")
else:
    print(f"Nice to meet you, {user_name}! But sorry, you don't have the coolest name like mine.")



# Ask the user for their height in centimeters
height_cm = int(input("What is your height in centimeters? "))

# Check if the user is tall enough to ride
if height_cm > 145:
    print("You are tall enough to ride!")
else:
    print("Sorry, you need to grow some more to ride.")

