# Accept input sequence of words separated by commas
input_sequence = input("Enter a comma-separated sequence of words: ")

# Split the input sequence into a list of words
words = input_sequence.split(',')

# Sort the words alphabetically and join them back into a comma-separated string
sorted_words = sorted(words)

# Print the sorted words
print(','.join(sorted_words))




import re

def longest_word(sentence):
    # Split the sentence into words using regex to handle punctuation
    words = re.findall(r'\b\w+\b', sentence)
    
    # Find the longest word in the list of words
    longest = max(words, key=len)
    
    return longest

# Test cases
print(longest_word("Margaret's toy is a pretty doll."))  # ➞ "Margaret's"
print(longest_word("A thing of beauty is a joy forever."))  # ➞ "forever."
print(longest_word("Forgetfulness is by all means powerless!"))  # ➞ "Forgetfulness"
