# Snippet 1
for i in range(10):
    print(i)

# Snippet 2
n = 5  # Define n before using it
for a in range(n):
    for b in range(n):
        print(a, b)

# Insertion Sort
def insertion_sort(numbers: list) -> None:
    for i in range(1, len(numbers)):
        key = numbers[i]
        j = i - 1
        while j >= 0 and key < numbers[j]:
            numbers[j + 1] = numbers[j]
            j -= 1
        numbers[j + 1] = key

numbers = [5, 2, 9, 1, 5, 6]
insertion_sort(numbers)  # sorts the numbers list
print(numbers)  # check that the sorting is successful

# Binary Search
def binary_search(numbers: list, value: int) -> int:
    low, high = 0, len(numbers) - 1
    while low <= high:
        mid = (low + high) // 2
        if numbers[mid] == value:
            return mid
        elif numbers[mid] < value:
            low = mid + 1
        else:
            high = mid - 1
    return -1  # Value not found

numbers = [1, 3, 5, 7, 9, 11]
index = binary_search(numbers, 7)  # returns 3
print(index)  # check that the search is successful
