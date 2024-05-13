class Cat:
    def __init__(self, cat_name, cat_age):
        self.name = cat_name
        self.age = cat_age

cats = [Cat("Whiskers", 5), Cat("Fluffy", 7), Cat("Mittens", 3)]

def find_oldest_cat(cats):
    oldest_cat = max(cats, key=lambda cat: cat.age)
    return oldest_cat

oldest_cat = find_oldest_cat(cats)
print(f"The oldest cat is {oldest_cat.name}, and is {oldest_cat.age} years old.")




class Dog:
    def __init__(self, name, height):
        self.name = name
        self.height = height

    def bark(self):
        print(f"{self.name} goes woof!")

    def jump(self):
        print(f"{self.name} jumps {self.height * 2} cm high!")

davids_dog = Dog("Rex", 50)
print(f"David's dog is named {davids_dog.name} and is {davids_dog.height} cm tall.")
davids_dog.bark()
davids_dog.jump()

sarahs_dog = Dog("Teacup", 20)
print(f"Sarah's dog is named {sarahs_dog.name} and is {sarahs_dog.height} cm tall.")
sarahs_dog.bark()
sarahs_dog.jump()

if davids_dog.height > sarahs_dog.height:
    print(f"{davids_dog.name} is bigger.")
else:
    print(f"{sarahs_dog.name} is bigger.")




class Song:
    def __init__(self, lyrics):
        self.lyrics = lyrics

    def sing_me_a_song(self):
        for line in self.lyrics:
            print(line)

stairway = Song(["There’s a lady who's sure",
                 "all that glitters is gold",
                 "and she’s buying a stairway to heaven"])

stairway.sing_me_a_song()




class Zoo:
    def __init__(self, zoo_name):
        self.name = zoo_name
        self.animals = []

    def add_animal(self, new_animal):
        if new_animal not in self.animals:
            self.animals.append(new_animal)

    def get_animals(self):
        print("Animals in the zoo:")
        for animal in self.animals:
            print(animal)

    def sell_animal(self, animal_sold):
        if animal_sold in self.animals:
            self.animals.remove(animal_sold)
            print(f"{animal_sold} has been sold.")

    def sort_animals(self):
        sorted_animals = {}
        for animal in self.animals:
            first_letter = animal[0].upper()
            if first_letter not in sorted_animals:
                sorted_animals[first_letter] = []
            sorted_animals[first_letter].append(animal)
        return sorted_animals

    def get_groups(self):
        print("Groups of animals in the zoo:")
        sorted_animals = self.sort_animals()
        for key, value in sorted_animals.items():
            if len(value) == 1:
                print(f"{key}: {value[0]}")
            else:
                print(f"{key}: {value}")

ramat_gan_safari = Zoo("Ramat Gan Safari")
ramat_gan_safari.add_animal("Ape")
ramat_gan_safari.add_animal("Bear")
ramat_gan_safari.add_animal("Baboon")
ramat_gan_safari.add_animal("Cat")
ramat_gan_safari.add_animal("Cougar")
ramat_gan_safari.add_animal("Emu")
ramat_gan_safari.add_animal("Eel")

ramat_gan_safari.get_animals()
ramat_gan_safari.sell_animal("Baboon")
ramat_gan_safari.get_animals()
ramat_gan_safari.get_groups()



