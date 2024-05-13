# Part 1: Quizz

# What is a class?
# A class is a blueprint or template for creating objects. It defines the properties (attributes) and behaviors (methods) that objects of that class will have.

# What is an instance?
# An instance is a specific realization or example of a class. It represents a single, unique occurrence of the class, with its own set of attribute values.

# What is encapsulation?
# Encapsulation is the bundling of data (attributes) and methods that operate on that data into a single unit (i.e., a class). It hides the internal state of an object from the outside, allowing access only through defined interfaces (methods).

# What is abstraction?
# Abstraction is the process of simplifying complex systems by focusing on high-level functionality while hiding the implementation details. In object-oriented programming, abstraction involves defining classes with relevant attributes and methods without exposing the internal complexities to the user.

# What is inheritance?
# Inheritance is a mechanism in object-oriented programming that allows a class (subclass) to inherit attributes and methods from another class (superclass). It promotes code reusability and facilitates hierarchical organization of classes.

# What is multiple inheritance?
# Multiple inheritance is a feature in some object-oriented programming languages where a class can inherit attributes and methods from multiple parent classes. This allows a subclass to have characteristics of more than one parent class.

# What is polymorphism?
# Polymorphism is the ability of objects to take on multiple forms or have different behaviors based on their class or data type. In object-oriented programming, polymorphism allows methods to be implemented in different ways in subclasses while retaining the same method signature.

# What is method resolution order or MRO?
# Method Resolution Order (MRO) is the order in which a programming language resolves method calls for objects with multiple inheritance. It defines the sequence in which the methods of classes in the inheritance hierarchy are searched and invoked.


import random

class DeckOfCards:
    def __init__(self):
        self.suits = ['Hearts', 'Diamonds', 'Clubs', 'Spades']
        self.values = ['A', '2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K']
        self.deck = [(value, suit) for suit in self.suits for value in self.values]

    def shuffle(self):
        random.shuffle(self.deck)

    def deal(self):
        if len(self.deck) == 0:
            print("Deck is empty. No more cards to deal.")
            return None
        else:
            return self.deck.pop()

# Example usage:
deck = DeckOfCards()
deck.shuffle()
print("Dealing a card:", deck.deal())
