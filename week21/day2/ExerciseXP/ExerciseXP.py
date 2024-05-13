import random

# Exercise 1: Pets
class Pets:
    def __init__(self, animals):
        self.animals = animals

    def walk(self):
        for animal in self.animals:
            print(animal.walk())

class Cat:
    is_lazy = True

    def __init__(self, name, age):
        self.name = name
        self.age = age

    def walk(self):
        return f'{self.name} is just walking around'

class Bengal(Cat):
    def sing(self, sounds):
        return f'{sounds}'

class Chartreux(Cat):
    def sing(self, sounds):
        return f'{sounds}'

class Siamese(Cat):  # Exercise 1 bonus
    def sing(self, sounds):
        return f'{sounds}'

all_cats = [Bengal("Bengal", 3), Chartreux("Chartreux", 5), Siamese("Siamese", 4)]
sara_pets = Pets(all_cats)
sara_pets.walk()

# Exercise 2: Dogs
class Dog:
    def __init__(self, name, age, weight):
        self.name = name
        self.age = age
        self.weight = weight

    def bark(self):
        return f"{self.name} is barking"

    def run_speed(self):
        return self.weight / self.age * 10

    def fight(self, other_dog):
        if self.run_speed() * self.weight > other_dog.run_speed() * other_dog.weight:
            return f"{self.name} wins the fight!"
        elif self.run_speed() * self.weight < other_dog.run_speed() * other_dog.weight:
            return f"{other_dog.name} wins the fight!"
        else:
            return "It's a tie!"

dog1 = Dog("Rex", 5, 20)
dog2 = Dog("Buddy", 3, 15)
dog3 = Dog("Max", 4, 18)
print(dog1.bark())
print(dog2.run_speed())
print(dog3.fight(dog1))

# Exercise 3: Dogs Domesticated
class PetDog(Dog):
    def __init__(self, name, age, weight):
        super().__init__(name, age, weight)
        self.trained = False

    def train(self):
        print(self.bark())
        self.trained = True

    def play(self, *args):
        dog_names = ", ".join(args)
        print(f"{dog_names} all play together")

    def do_a_trick(self):
        if self.trained:
            tricks = ["does a barrel roll", "stands on his back legs", "shakes your hand", "plays dead"]
            trick = random.choice(tricks)
            return f"{self.name} {trick}"
        else:
            return "The dog is not trained yet."

pet_dog = PetDog("Buddy", 3, 15)
pet_dog.train()
print(pet_dog.do_a_trick())
pet_dog.play("Rex", "Max")

# Exercise 4: Family
class Family:
    def __init__(self, last_name, members):
        self.last_name = last_name
        self.members = members

    def born(self, **kwargs):
        self.members.append(kwargs)
        print(f"Congratulations! {kwargs['name']} was born into the {self.last_name} family.")

    def is_18(self, name):
        for member in self.members:
            if member['name'] == name and member['age'] >= 18:
                return True
        return False

    def family_presentation(self):
        print(f"The {self.last_name} family")
        for member in self.members:
            print(f"Name: {member['name']}, Age: {member['age']}, Gender: {member['gender']}, Child: {member['is_child']}")

members = [
    {'name':'Michael','age':35,'gender':'Male','is_child':False},
    {'name':'Sarah','age':32,'gender':'Female','is_child':False}
]

family = Family("Smith", members)
family.born(name='Jack', age=0, gender='Male', is_child=True)
print(family.is_18('Michael'))
family.family_presentation()

# Exercise 5: TheIncredibles Family
class TheIncredibles(Family):
    def __init__(self, last_name, members):
        super().__init__(last_name, members)

    def use_power(self, name):
        for member in self.members:
            if member['name'] == name and member['age'] >= 18:
                print(f"{member['name']}'s power is {member['power']}")
                return
        raise ValueError("Member is not over 18 years old.")

    def incredible_presentation(self):
        print("Here is our powerful family")
        super().family_presentation()

incredibles_members = [
    {'name':'Michael','age':35,'gender':'Male','is_child':False,'power': 'fly','incredible_name':'MikeFly'},
    {'name':'Sarah','age':32,'gender':'Female','is_child':False,'power': 'read minds','incredible_name':'SuperWoman'}
]

incredibles = TheIncredibles("Incredibles", incredibles_members)
incredibles.use_power('Michael')
incredibles.incredible_presentation()
incredibles.born(name='Baby Jack', age=0, gender='Male', is_child=True, power='Unknown Power')
incredibles.incredible_presentation()
