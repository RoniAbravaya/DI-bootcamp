matrix_str = """7ii
Tsx
h%?
i #
sM 
$a 
#t%
^r!"""

# Split the matrix string into rows
rows = matrix_str.split('\n')

# Initialize a 2D list to store the matrix
matrix = []
for row in rows:
    matrix.append(list(row))

# Determine the number of columns
num_cols = len(matrix[0])

# Decrypt the matrix
secret_message = ""
for col in range(num_cols):
    alpha_chars = ""
    for row in range(len(matrix)):
        if matrix[row][col].isalpha():
            alpha_chars += matrix[row][col]
    secret_message += alpha_chars + " "

print("Secret Message:", secret_message)
