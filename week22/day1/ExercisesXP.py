class Currency:
    def __init__(self, currency, amount):
        self.currency = currency
        self.amount = amount

    def __str__(self):
        return f"{self.amount} {self.currency}"

    def __int__(self):
        return self.amount

    def __repr__(self):
        return f"{self.amount} {self.currency}"

    def __add__(self, other):
        if isinstance(other, int):
            return self.amount + other
        elif isinstance(other, Currency):
            if self.currency != other.currency:
                raise TypeError(f"Cannot add between Currency type <{self.currency}> and <{other.currency}>")
            return self.amount + other.amount
        else:
            raise TypeError(f"Unsupported operand type(s) for +: 'Currency' and '{type(other).__name__}'")

    def __iadd__(self, other):
        if isinstance(other, int):
            self.amount += other
        elif isinstance(other, Currency):
            if self.currency != other.currency:
                raise TypeError(f"Cannot add between Currency type <{self.currency}> and <{other.currency}>")
            self.amount += other.amount
        else:
            raise TypeError(f"Unsupported operand type(s) for +=: 'Currency' and '{type(other).__name__}'")
        return self

c1 = Currency('dollar', 5)
c2 = Currency('dollar', 10)
c3 = Currency('shekel', 1)
c4 = Currency('shekel', 10)

print(str(c1))
print(int(c1))
print(repr(c1))
print(c1 + 5)
print(c1 + c2)
print(c1)
c1 += 5
print(c1)
c1 += c2
print(c1)
try:
    print(c1 + c3)
except TypeError as e:
    print(e)



def add(a, b):
    result = a + b
    print(f"The sum of {a} and {b} is {result}")




import string
import random

def generate_random_string(length=5):
    characters = string.ascii_letters
    return ''.join(random.choice(characters) for _ in range(length))

print(generate_random_string())



from datetime import datetime

def display_current_date():
    current_date = datetime.now()
    print("Current date:", current_date.strftime("%Y-%m-%d"))

display_current_date()



from datetime import datetime

def time_until_january_1st():
    current_date = datetime.now()
    january_1st = datetime(current_date.year + 1, 1, 1)
    time_difference = january_1st - current_date
    print(f"The 1st of January is in {time_difference.days} days and {time_difference.seconds//3600} hours.")

time_until_january_1st()



from datetime import datetime

def minutes_lived(birthdate):
    birthdate = datetime.strptime(birthdate, "%Y-%m-%d")
    current_date = datetime.now()
    time_difference = current_date - birthdate
    minutes = time_difference.days * 24 * 60 + time_difference.seconds // 60
    print(f"You have lived {minutes} minutes so far.")

minutes_lived('1990-01-01')



from faker import Faker
import random

fake = Faker()

users = []

def add_user():
    user = {
        'name': fake.name(),
        'address': fake.address(),
        'language_code': random.choice(['en_US', 'fr_FR', 'es_ES', 'de_DE'])
    }
    users.append(user)

for _ in range(5):
    add_user()

print(users)
