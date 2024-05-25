import pandas as pd

# Exercise 1: Getting & Knowing Your Data (Chipo)
# 1. Retrieve the dataset
chipo_url = "https://raw.githubusercontent.com/justmarkham/DAT8/master/data/chipotle.tsv"
chipo = pd.read_csv(chipo_url, sep='\t')

# 2. Display the first 10 rows
print(chipo.head(10))

# 3. Total number of entries
print("Total number of entries:", chipo.shape[0])

# 4. Total number of columns
print("Total number of columns:", chipo.shape[1])

# 5. Print all column names
print("Column names:", chipo.columns.tolist())

# 6. Index information
print("Index:", chipo.index)

# 7. Most ordered item
print("Most ordered item:\n", chipo['item_name'].value_counts().head(1))

# 8. Total number of items ordered
print("Total number of items ordered:", chipo['quantity'].sum())

# 9. Most ordered item from choice_description
print("Most ordered item from choice_description:\n", chipo['choice_description'].value_counts().head(1))

# 10. Convert 'item_price' to float
chipo['item_price'] = chipo['item_price'].apply(lambda x: float(x.replace('$', '')))

# 11. Total revenue
print("Total revenue:", chipo['item_price'].sum())

# 12. Total number of orders
print("Total number of orders:", chipo['order_id'].nunique())

# 13. Average order value
print("Average order value:", chipo['item_price'].sum() / chipo['order_id'].nunique())

# 14. Total number of unique items sold
print("Total number of unique items sold:", chipo['item_name'].nunique())

# Exercise 2: Filtering & Sorting (Chipo)
# 1. Count of products that cost more than $10
print("Count of products that cost more than $10:", (chipo['item_price'] > 10).sum())

# Exercise 3: Grouping (Users)
# 1. Retrieve the dataset
users_url = "https://raw.githubusercontent.com/justmarkham/DAT8/master/data/u.user"
users = pd.read_csv(users_url, sep='|')

# 2. Mean age per occupation
print("Mean age per occupation:\n", users.groupby('occupation')['age'].mean())

# Exercise 4: Merge (All_data, All_data_col, Data3)
# 1. Create DataFrames
data1 = pd.DataFrame({'ID': [1, 2, 3], 'Name': ['A', 'B', 'C']})
data2 = pd.DataFrame({'ID': [4, 5, 6], 'Name': ['D', 'E', 'F']})
data3 = pd.DataFrame({'ID': [1, 2, 3], 'Score': [80, 90, 85]})

# 2. Merge data1 and data2 along rows
all_data = pd.concat([data1, data2])

# 3. Merge data1 and data2 along columns
all_data_col = pd.concat([data1, data2], axis=1)

# Exercise 5: Deleting (Iris)
# 1. Retrieve the dataset
iris_url = "https://archive.ics.uci.edu/ml/machine-learning-databases/iris/iris.data"
iris = pd.read_csv(iris_url, header=None)

# 2. Assign appropriate column names
iris.columns = ['sepal_length', 'sepal_width', 'petal_length', 'petal_width', 'species']

# 3. Check for missing values
print("Missing values in iris dataset:\n", iris.isnull().sum())

# Exercise 6: Creating Series And DataFrames (Pokemon)
# 1. Create DataFrame
pokemon_dict = {'evolution': ['Ivysaur', 'Charmeleon', 'Wartortle', 'Metapod'],
                'hp': [45, 39, 44, 45],
                'name': ['Bulbasaur', 'Charmander', 'Squirtle', 'Caterpie'],
                'pokedex': ['yes', 'no', 'yes', 'no'],
                'type': ['grass', 'fire', 'water', 'bug']}
pokemon = pd.DataFrame(pokemon_dict)

# 2. Rearrange columns
pokemon = pokemon[['name', 'type', 'hp', 'evolution', 'pokedex']]

# Exercise 7: Descriptive Statistics (Baby_names)
# 1. Retrieve the dataset
baby_names_url = "https://raw.githubusercontent.com/guipsamora/pandas_exercises/master/06_Stats/US_Baby_Names/US_Baby_Names_right.csv"
baby_names = pd.read_csv(baby_names_url)

# 2. Display first 10 entries
print("First 10 entries of baby_names:\n", baby_names.head(10))

# 3. Drop 'Unnamed: 0' and 'Id'
baby_names.drop(columns=['Unnamed: 0', 'Id'], inplace=True)

# Exercise 8: Handling Time Series Data (Investor_data)
# 1. Create the dataset
temperature = [30, 31, 29, 32, 33, 34, 28, 27, 25, 35]
humidity = [80, 75, 70, 85, 90, 80, 75, 60, 65, 70]
wind_speed = [5, 6, 7, 8, 9, 4, 10, 5, 6, 7]
date_rng = pd.date_range(start='2021-01-01', end='2021-01-10', freq='D')
weather_data = pd.DataFrame({'Date': date_rng,
                             'Temperature': temperature,
                             'Humidity': humidity,
                             'Wind_Speed': wind_speed})

# 2. Determine the frequency of the dataset
frequency = pd.infer_freq(weather_data['Date'])
print("The frequency of the dataset is", frequency)

# 3. Set 'Date' as index
weather_data.set_index('Date', inplace=True)

