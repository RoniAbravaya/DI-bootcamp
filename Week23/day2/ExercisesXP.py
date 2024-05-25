from collections import deque

# Exercise 1: Task Scheduler
class Task:
    def __init__(self, description, priority):
        self.description = description
        self.priority = priority

    def __repr__(self):
        return f"({self.description}, {self.priority})"

class TaskScheduler:
    def __init__(self):
        self.queue = deque()

    def add_task(self, description, priority):
        task = Task(description, priority)
        self.queue.append(task)
        self.queue = deque(sorted(self.queue, key=lambda x: x.priority))

    def execute_task(self):
        if self.queue:
            task = self.queue.popleft()
            print(f"Executing task: {task.description}")
        else:
            print("No tasks to execute.")

    def show_tasks(self):
        print(f"Task Queue: {list(self.queue)}")

# Exercise 2: Palindrome Checker
def check_palindrome(phrase):
    queue = deque()
    for char in phrase:
        if char.isalnum():
            queue.append(char.lower())
    
    while len(queue) > 1:
        if queue.popleft() != queue.pop():
            return False
    return True

# Exercise 3: Merge Two Sorted Linked Lists
class Node:
    def __init__(self, value):
        self.value = value
        self.next = None

class LinkedList:
    def __init__(self):
        self.head = None

    def append(self, value):
        new_node = Node(value)
        if self.head is None:
            self.head = new_node
        else:
            current = self.head
            while current.next:
                current = current.next
            current.next = new_node

    def __repr__(self):
        values = []
        current = self.head
        while current:
            values.append(current.value)
            current = current.next
        return ' -> '.join(map(str, values))

def merge_sorted_linked_lists(list1, list2):
    dummy = Node(0)
    tail = dummy

    p1 = list1.head
    p2 = list2.head

    while p1 and p2:
        if p1.value < p2.value:
            tail.next = p1
            p1 = p1.next
        else:
            tail.next = p2
            p2 = p2.next
        tail = tail.next

    if p1:
        tail.next = p1
    if p2:
        tail.next = p2

    merged_list = LinkedList()
    merged_list.head = dummy.next
    return merged_list

# Example usage for Task Scheduler:
print("Task Scheduler Example:")
scheduler = TaskScheduler()
scheduler.add_task("Clean room", 2)
scheduler.add_task("Do homework", 1)
scheduler.execute_task()  # Output: Executing task: Do homework
scheduler.show_tasks()    # Output: Task Queue: [("Clean room", 2)]
print()

# Example usage for Palindrome Checker:
print("Palindrome Checker Example:")
print(check_palindrome("Racecar"))  # Output: True
print(check_palindrome("hello"))    # Output: False
print()

# Example usage for Merge Two Sorted Linked Lists:
print("Merge Two Sorted Linked Lists Example:")
list1 = LinkedList()
list1.append(1)
list1.append(3)
list1.append(5)

list2 = LinkedList()
list2.append(2)
list2.append(4)
list2.append(6)

merged_list = merge_sorted_linked_lists(list1, list2)
print(merged_list)  # Output: 1 -> 2 -> 3 -> 4 -> 5 -> 6
