import pandas as pd
import matplotlib.pyplot as plt

# Load the Starbucks dataset
url = "https://github.com/reisanar/datasets/raw/master/starbucks.csv"
starbucks = pd.read_csv(url)

# Display the first 10 entries of the DataFrame
print("First 10 entries of the DataFrame:")
print(starbucks.head(10))
print()

# Determine the total number of entries
total_entries = starbucks.shape[0]
print("Total number of entries in 'starbucks':", total_entries)
print()

# Print all the column names in the DataFrame
print("Column names in the DataFrame:")
print(starbucks.columns.tolist())
print()


# Find out how the DataFrame is indexed
print("Index of the DataFrame:")
print(starbucks.index)
print()

# Determine the drink that contains the most amount of sugar on average
most_sugar_drink = starbucks.groupby('Beverage')[' Sugars (g)'].mean().idxmax()
print("Drink that contains the most amount of sugar on average:", most_sugar_drink)
print()

# Find out how many different drink categories there are
num_categories = starbucks['Beverage_category'].nunique()
print("Number of different drink categories:", num_categories)
print()

# Identify the 5 most frequent drink categories
top_categories = starbucks['Beverage_category'].value_counts().head(5)
print("Top 5 most frequent drink categories:")
print(top_categories)
print()

# Find out the average calorie content per drink category
avg_calories_per_category = starbucks.groupby('Beverage_category')['Calories'].mean()
print("Average calorie content per drink category:")
print(avg_calories_per_category)
print()

# Create a new column 'caffeine_to_calories' representing the ratio of caffeine to calories
starbucks['caffeine_to_calories'] = starbucks[' Caffeine (mg)'] / starbucks[' Calories']

# Find the drink category that, on average, has the highest 'caffeine_to_calories' ratio
category_highest_caffeine_to_calories = starbucks.groupby('Beverage_category')['caffeine_to_calories'].mean().idxmax()
print("Drink category with the highest 'caffeine_to_calories' ratio:", category_highest_caffeine_to_calories)
print()

# Create a horizontal bar plot showing the average 'caffeine_to_calories' ratio for each drink category
plt.figure(figsize=(10, 6))
starbucks.groupby('Beverage_category')['caffeine_to_calories'].mean().plot(kind='barh')
plt.xlabel('Average Caffeine-to-Calories Ratio')
plt.ylabel('Drink Category')
plt.title('Average Caffeine-to-Calories Ratio for Each Drink Category')
plt.show()

# Plotting the relationship between sugar and caffeine across different drink categories
plt.figure(figsize=(10, 6))
for category, data in starbucks.groupby('Beverage_category'):
    plt.scatter(data[' Sugars (g)'], data[' Caffeine (mg)'], label=category)
plt.xlabel('Sugar (g)')
plt.ylabel('Caffeine (mg)')
plt.title('Relationship between Sugar and Caffeine across Different Drink Categories')
plt.legend()
plt.show()
