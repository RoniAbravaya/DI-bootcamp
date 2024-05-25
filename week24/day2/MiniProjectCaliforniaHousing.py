import pandas as pd
import numpy as np
import matplotlib.pyplot as plt
from sklearn.datasets import fetch_california_housing
from sklearn.preprocessing import MinMaxScaler

# Part I
# Load the Data
data = fetch_california_housing()
df = pd.DataFrame(data['data'], columns=data['feature_names'])
df['Target'] = data['target']

# Explore the Data
print("Statistical Summary:")
print(df.describe())

print("\nPreview of the Data:")
print(df.head())

print("\nMetadata:")
print(df.info())

# Preprocess the Data
print("\nCheck for Missing Data:")
print(df.isnull().sum())

print("\nNormalize Continuous Variables:")
scaler = MinMaxScaler()
df[df.columns] = scaler.fit_transform(df[df.columns])

# Categorical Variables
print("\nSimulate a Categorical Variable:")
df['HouseAge_Category'] = pd.cut(df['HouseAge'], bins=[0, 10, 30, np.inf], labels=['New', 'Old', 'Very Old'])
df = pd.get_dummies(df, columns=['HouseAge_Category'])

# Correlations
print("\nCorrelation Matrix:")
corr_matrix = df.corr()
plt.matshow(corr_matrix)
plt.xticks(range(len(corr_matrix.columns)), corr_matrix.columns, rotation=90)
plt.yticks(range(len(corr_matrix.columns)), corr_matrix.columns)
plt.colorbar()
plt.title('Correlation Matrix')
plt.show()

# Feature Engineering
print("\nFeature Engineering:")
df['New_Feature'] = df['MedInc'] + df['AveRooms']

# Part II
# Analyse the Relationship between Property Age and Price
# Boolean Indexing for Age Groups
new_houses = df[df['HouseAge'] <= 10]['Target']
old_houses = df[(df['HouseAge'] > 10) & (df['HouseAge'] <= 30)]['Target']
very_old_houses = df[df['HouseAge'] > 30]['Target']

# Plotting Histograms
plt.hist([new_houses, old_houses, very_old_houses], bins=30, label=['New', 'Old', 'Very Old'])
plt.xlabel('Price')
plt.ylabel('Frequency')
plt.title('Histogram of Property Age vs. Price')
plt.legend()
plt.show()

# Part III
# Analyse the Neighborhood Crime Rate Impact on Prices
# Creating Binned Income
df['MedInc_Bins'] = pd.cut(df['MedInc'], bins=5)

# Grouping by Binned Income
income_groups = df.groupby('MedInc_Bins')['Target'].mean()

# Plotting Line Plot
plt.plot(income_groups.index, income_groups.values, marker='o')
plt.xlabel('Median Income Bins')
plt.ylabel('Average Price')
plt.title('Neighborhood Crime Rate Impact on Prices')
plt.xticks(rotation=45)
plt.show()
