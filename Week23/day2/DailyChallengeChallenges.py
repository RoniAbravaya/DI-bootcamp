# Exercise 1: Counting Frequencies
def word_frequency(input_str):
    words = input_str.split()
    frequency_dict = {}
    for word in words:
        if word in frequency_dict:
            frequency_dict[word] += 1
        else:
            frequency_dict[word] = 1
    return frequency_dict

# Example usage for Exercise 1:
input_str = "apple orange apple banana orange apple"
result = word_frequency(input_str)
print(result)  # Output: {'apple': 3, 'orange': 2, 'banana': 1}

# Exercise 2: Longest Substring Without Repeating Characters
def longest_unique_substring(s):
    char_index = {}
    start = 0
    max_length = 0

    for i, char in enumerate(s):
        if char in char_index and char_index[char] >= start:
            start = char_index[char] + 1
        char_index[char] = i
        max_length = max(max_length, i - start + 1)

    return max_length

# Example usage for Exercise 2:
s = "abcabcbb"
result = longest_unique_substring(s)
print(result)  # Output: 3
