def compute_division():
    try:
        result = 5 / 0
        print("Result:", result)
    except ZeroDivisionError:
        print("Error: Division by zero is not allowed.")

compute_division()
