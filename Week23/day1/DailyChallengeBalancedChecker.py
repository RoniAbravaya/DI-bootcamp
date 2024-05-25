def is_balanced(expr: str) -> bool:
    # Stack to keep track of opening parentheses
    stack = []
    
    # Dictionary to match opening and closing parentheses
    matching_parentheses = {')': '(', ']': '[', '}': '{'}
    
    for char in expr:
        # If it's an opening parenthesis, push it onto the stack
        if char in matching_parentheses.values():
            stack.append(char)
        # If it's a closing parenthesis
        elif char in matching_parentheses.keys():
            # Check if the stack is not empty and the top of the stack matches
            if stack and stack[-1] == matching_parentheses[char]:
                stack.pop()
            else:
                return False
    
    # If the stack is empty, all parentheses were matched
    return len(stack) == 0

# Test cases
print(is_balanced("(1 + 2) * {[(3 / 4) - 5]}"))  # Output: True
print(is_balanced("[1 + 2) * (3 - 4)]"))          # Output: False
print(is_balanced("((1 + 2)"))                    # Output: False




def is_balanced_extended(expr: str) -> bool:
    stack = []
    matching_parentheses = {')': '(', ']': '[', '}': '{'}
    quotes = {'"': '"', "'": "'"}
    in_quote = None
    
    for char in expr:
        # Handle quotes
        if char in quotes:
            if in_quote is None:
                in_quote = char
            elif in_quote == char:
                in_quote = None
        elif in_quote is None:
            # If it's an opening parenthesis, push it onto the stack
            if char in matching_parentheses.values():
                stack.append(char)
            # If it's a closing parenthesis
            elif char in matching_parentheses.keys():
                if stack and stack[-1] == matching_parentheses[char]:
                    stack.pop()
                else:
                    return False
    
    return len(stack) == 0 and in_quote is None

# Test cases
print(is_balanced_extended('(1 + 2) * {[(3 / 4) - 5]}'))  # Output: True
print(is_balanced_extended('[1 + 2) * (3 - 4)]'))          # Output: False
print(is_balanced_extended('((1 + 2)'))                    # Output: False
print(is_balanced_extended('"((1 + 2))"'))                 # Output: True
print(is_balanced_extended("'((1 + 2))'"))                 # Output: True
print(is_balanced_extended("'(1 + 2)' * \"{[(3 / 4) - 5]}\"")) # Output: True
