# Exercise 1
import numpy as np

# 1. Create a vector of zeros with size 10
vector_zeros = np.zeros(10)
print("Vector of zeros:", vector_zeros)

# 2. Compute the memory size of the array
memory_size = vector_zeros.size * vector_zeros.itemsize
print("Memory size of the array:", memory_size)

# 3. Retrieve the documentation of the numpy add function
# (Executed in the command line)
# python -c "import numpy as np; help(np.add)"

# 4. Create a vector with values ranging from 10 to 49
vector_range = np.arange(10, 50)
print("Vector with values ranging from 10 to 49:", vector_range)

# 5. Reverse a vector
vector_reversed = vector_range[::-1]
print("Reversed vector:", vector_reversed)

# 6. Create a 3x3 matrix with values ranging from 0 to 8
matrix_3x3 = np.arange(9).reshape(3, 3)
print("3x3 matrix with values from 0 to 8:\n", matrix_3x3)

# 7. Find indices of non-zero elements
non_zero_indices = np.nonzero([1, 2, 0, 0, 4, 0])
print("Indices of non-zero elements:", non_zero_indices)

# 8. Create a 3x3 identity matrix
identity_matrix = np.eye(3)
print("3x3 identity matrix:\n", identity_matrix)

# 9. Create a 5x5 matrix with row values ranging from 0 to 4
row_values_matrix = np.tile(np.arange(5), (5, 1))
print("5x5 matrix with row values from 0 to 4:\n", row_values_matrix)

# 10. Create a vector of size 10 with values ranging from 0 to 1, both excluded
vector_excluded_ends = np.linspace(0, 1, 12)[1:-1]
print("Vector of size 10 with values from 0 to 1 excluded:", vector_excluded_ends)

# 11. Create a random vector of size 10 and sort it
random_vector = np.random.random(10)
sorted_random_vector = np.sort(random_vector)
print("Sorted random vector:", sorted_random_vector)

# 12. Print the minimum and maximum representable value for each numpy scalar type
print("Minimum and maximum representable values:")
for dtype in [np.int8, np.int32, np.int64, np.float32, np.float64]:
    if np.issubdtype(dtype, np.integer):
        print(f"{dtype}: {np.iinfo(dtype).min} to {np.iinfo(dtype).max}")
    else:
        print(f"{dtype}: {np.finfo(dtype).min} to {np.finfo(dtype).max}")

# 13. Convert a float array into an integer array in place
float_array = np.random.rand(10).astype(np.float32)
print("Original float array:", float_array)
float_array = float_array.astype(np.int32, copy=False)
print("Converted integer array:", float_array)

# 14. Subtract the mean of each row of a matrix
matrix = np.random.rand(3, 3)
print("Original matrix:\n", matrix)
row_mean_subtracted = matrix - matrix.mean(axis=1, keepdims=True)
print("Matrix with row means subtracted:\n", row_mean_subtracted)

# 15. Sort an array by the nth column
array_to_sort = np.random.rand(3, 3)
sorted_by_column = array_to_sort[array_to_sort[:, 1].argsort()]
print("Original array:\n", array_to_sort)
print("Array sorted by the second column:\n", sorted_by_column)

# 16. Swap two rows of an array
array_to_swap = np.array([[0, 1, 2], [3, 4, 5], [6, 7, 8]])
print("Original array:\n", array_to_swap)
array_to_swap[[0, 1]] = array_to_swap[[1, 0]]
print("Array with first and second row swapped:\n", array_to_swap)

# 17. Given an array C that is a bincount, produce an array A
C = np.array([3, 2, 1])
A = np.repeat(np.arange(len(C)), C)
print("Bincount array C:", C)
print("Array A such that np.bincount(A) == C:", A)
