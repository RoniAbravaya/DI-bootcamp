# Exercise 1: Convert Lists Into Dictionaries
keys = ['Ten', 'Twenty', 'Thirty']
values = [10, 20, 30]
dictionary = dict(zip(keys, values))
print(dictionary)

# Exercise 2: Cinemax #2
family = {"rick": 43, 'beth': 13, 'morty': 5, 'summer': 8}
total_cost = sum([0 if age < 3 else 10 if 3 <= age <= 12 else 15 for age in family.values()])
print("Total cost for the family:", total_cost)

# Exercise 3: Zara
brand_info = {
    "name": "Zara",
    "creation_date": 1975,
    "creator_name": "Amancio Ortega Gaona",
    "type_of_clothes": ["men", "women", "children", "home"],
    "international_competitors": ["Gap", "H&M", "Benetton"],
    "number_stores": 7000,
    "major_color": {
        "France": "blue",
        "Spain": "red",
        "US": {"pink", "green"}
    }
}

brand_info["number_stores"] = 2
print("Zara's clients are men, women, children, and home.")
brand_info["country_creation"] = "Spain"
if "international_competitors" in brand_info:
    brand_info["international_competitors"].append("Desigual")
del brand_info["creation_date"]
print("Last international competitor:", brand_info["international_competitors"][-1])
print("Major clothes colors in the US:", brand_info["major_color"]["US"])
print("Number of key-value pairs in the dictionary:", len(brand_info))
print("Keys of the dictionary:", list(brand_info.keys()))

more_on_zara = {"creation_date": 1975, "number_stores": 10000}
brand_info.update(more_on_zara)
print("Value of the key 'number_stores':", brand_info["number_stores"])

# Exercise 4: Disney Characters
users = ["Mickey", "Minnie", "Donald", "Ariel", "Pluto"]

# Recreate the 1st result
disney_users_A = {}
for i, user in enumerate(users):
    disney_users_A[user] = i
print("Result 1:", disney_users_A)

# Recreate the 2nd result
disney_users_B = {}
for i, user in enumerate(users):
    disney_users_B[i] = user
print("Result 2:", disney_users_B)

# Recreate the 3rd result
disney_users_C = dict(sorted(disney_users_A.items(), key=lambda x: x[0]))
print("Result 3:", disney_users_C)

# Recreate the 1st result for characters with names containing the letter "i"
disney_users_I = {}
for i, user in enumerate(users):
    if 'i' in user:
        disney_users_I[user] = i
print("Result 1 for characters with names containing 'i':", disney_users_I)

# Recreate the 1st result for characters with names starting with "m" or "p"
disney_users_M_P = {}
for i, user in enumerate(users):
    if user[0].lower() in ['m', 'p']:
        disney_users_M_P[user] = i
print("Result 1 for characters with names starting with 'M' or 'P':", disney_users_M_P)
