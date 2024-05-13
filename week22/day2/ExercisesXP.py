import json
import random

# Exercise 1: Random Sentence Generator

def get_words_from_file(file_path):
    with open(file_path, 'r') as file:
        words = file.read().splitlines()
    return words

def get_random_sentence(length):
    words = get_words_from_file("words.txt")
    random_words = random.choices(words, k=length)
    sentence = " ".join(random_words)
    return sentence.lower()

def main():
    print("Welcome to the Random Sentence Generator!")
    print("This program will generate a random sentence for you.")
    try:
        length = int(input("How long do you want the sentence to be (between 2 and 20)? "))
        if length < 2 or length > 20:
            raise ValueError("Length must be between 2 and 20.")
        sentence = get_random_sentence(length)
        print("Random Sentence:", sentence)
    except ValueError as ve:
        print("Error:", ve)

# Exercise 2: Working With JSON

sampleJson = """{ 
   "company":{ 
      "employee":{ 
         "name":"emma",
         "payable":{ 
            "salary":7000,
            "bonus":800
         }
      }
   }
}"""

def access_salary(json_string):
    data = json.loads(json_string)
    salary = data['company']['employee']['payable']['salary']
    return salary

def add_birth_date(json_string, birth_date):
    data = json.loads(json_string)
    data['company']['employee']['birth_date'] = birth_date
    return json.dumps(data, indent=4)

def save_to_file(json_data, file_name):
    with open(file_name, 'w') as file:
        json.dump(json_data, file, indent=4)

def main():
    # Exercise 1
    main()

    # Exercise 2
    salary = access_salary(sampleJson)
    print("Salary:", salary)

    json_with_birth_date = add_birth_date(sampleJson, "1990-01-01")
    print("JSON with Birth Date:", json_with_birth_date)

    save_to_file(json.loads(json_with_birth_date), "sample_with_birth_date.json")
