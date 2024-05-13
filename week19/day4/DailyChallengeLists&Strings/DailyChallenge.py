# Challenge 1
number = int(input("Enter a number: "))
length = int(input("Enter the length of the list: "))

multiples = [number * i for i in range(1, length + 1)]
print(multiples)

# Challenge 2
user_word = input("Enter a word: ")
new_word = ""

for i in range(len(user_word)):
    if i == 0 or user_word[i] != user_word[i - 1]:
        new_word += user_word[i]

print("New word:", new_word)
