import numpy as np

# Create the data matrix
data = np.array(np.random.randint(1, 100, size=25)).reshape(5, 5)
print("Original data matrix:\n", data)

# 1. Swap the second and fourth rows
data[[1, 3]] = data[[3, 1]]
print("After swapping second and fourth rows:\n", data)

# 2. Normalize all elements in the data matrix
normalized_data = (data - np.min(data)) / (np.max(data) - np.min(data))
print("Normalized data matrix:\n", normalized_data)

# 3. Z-score normalization
z_score_data = (data - np.mean(data)) / np.std(data)
print("Z-score normalized data matrix:\n", z_score_data)

# 4. Reshape data matrix into a vector and split into five equal-sized sub-arrays
sub_arrays = np.split(np.ravel(data), 5)
print("Sub-arrays after splitting:\n", sub_arrays)

# 5. Compute the dot product of two vectors
vector1 = np.array([3, 5, 6, 7, 8])
vector2 = np.array([2, 4, 6, 8, 10])
dot_product = np.dot(vector1, vector2)
print("Dot product of the two vectors:", dot_product)

# 6. Create another 3x3 matrix (data2) and perform matrix multiplication
data2 = np.random.randint(1, 100, size=(3, 3))
print("Second 3x3 matrix (data2):\n", data2)
matrix_multiplication_result = np.dot(data[:3, :3], data2)
print("Result of matrix multiplication:\n", matrix_multiplication_result)

# 7. Compute the inverse of a 3x3 identity matrix multiplied by 2
identity_matrix = np.eye(3) * 2
inverse_matrix = np.linalg.inv(identity_matrix)
print("Inverse of the identity matrix multiplied by 2:\n", inverse_matrix)

# 8. Compute eigenvalues and eigenvectors for the first 3x3 part of the data matrix
eigenvalues, eigenvectors = np.linalg.eig(data[:3, :3])
print("Eigenvalues:", eigenvalues)
print("Eigenvectors:\n", eigenvectors)

# 9. Replace random 5 elements with NaN and find their indices
nan_indices = np.unravel_index(np.random.choice(range(25), size=5, replace=False), data.shape)
data_with_nans = data.astype(float)
data_with_nans[nan_indices] = np.nan
print("Data matrix with NaNs:\n", data_with_nans)
print("Indices of missing values:", nan_indices)

# 10. Replace missing values with the mean of the matrix
mean_without_nans = np.nanmean(data_with_nans)
data_with_nans[np.isnan(data_with_nans)] = mean_without_nans
print("Data matrix with missing values replaced by mean:\n", data_with_nans)
