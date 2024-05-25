import pandas as pd
import numpy as np
import matplotlib.pyplot as plt

# Load the Data
url = "https://web.stanford.edu/class/archive/cs/cs109/cs109.1166/stuff/titanic.csv"
df = pd.read_csv(url)

# Explore the Data
print("Preview of the Data:")
print(df.head())

print("\nStatistical Summary:")
print(df.describe())

print("\nMetadata:")
print(df.info())

# Visualize the Data
# Pie chart for the ratio of male to female passengers
gender_counts = df['Sex'].value_counts()
plt.figure(figsize=(6, 6))
plt.pie(gender_counts, labels=gender_counts.index, autopct='%1.1f%%', startangle=90)
plt.title('Ratio of Male to Female Passengers')
plt.show()

# Histogram for the distribution of passenger ages
plt.figure(figsize=(8, 6))
plt.hist(df['Age'].dropna(), bins=20, color='skyblue', edgecolor='black')
plt.xlabel('Age')
plt.ylabel('Frequency')
plt.title('Distribution of Passenger Ages')
plt.show()

# Bar plot for the number of passengers who survived and didn’t survive
survival_counts = df['Survived'].value_counts()
plt.figure(figsize=(6, 6))
plt.bar(survival_counts.index, survival_counts.values, color=['blue', 'red'])
plt.xlabel('Survived')
plt.ylabel('Count')
plt.title('Number of Passengers who Survived and Didn’t Survive')
plt.xticks([0, 1], ['No', 'Yes'])
plt.show()

# Stacked bar plot for the number of passengers who survived and didn’t survive, split by gender
survival_gender_counts = df.groupby(['Sex', 'Survived']).size().unstack()
survival_gender_counts.plot(kind='bar', stacked=True, color=['red', 'blue'], figsize=(8, 6))
plt.xlabel('Gender')
plt.ylabel('Count')
plt.title('Survival Count by Gender')
plt.legend(['Did not Survive', 'Survived'])
plt.xticks(rotation=0)
plt.show()

# Scatter plot for the correlation between fare and age
plt.figure(figsize=(8, 6))
plt.scatter(df['Age'], df['Fare'], color='green', alpha=0.5)
plt.xlabel('Age')
plt.ylabel('Fare')
plt.title('Correlation between Fare and Age')
plt.show()

# Preprocess the Data
# Handle missing values in the ‘Age’ column by replacing them with the median age
median_age = df['Age'].median()
df['Age'].fillna(median_age, inplace=True)

# Normalize the ‘Fare’ column using min-max scaling
df['Fare'] = (df['Fare'] - df['Fare'].min()) / (df['Fare'].max() - df['Fare'].min())

# Convert the ‘Sex’ column into numerical representation using one-hot encoding
df = pd.get_dummies(df, columns=['Sex'])

# Data Analysis
# Calculate the survival rate for different genders
survival_rate_gender = df.groupby('Sex_female')['Survived'].mean()
print("\nSurvival Rate by Gender:")
print(survival_rate_gender)

# Calculate the survival rate for different passenger classes
survival_rate_class = df.groupby('Pclass')['Survived'].mean()
print("\nSurvival Rate by Passenger Class:")
print(survival_rate_class)

# Identify the passenger with the highest fare
passenger_highest_fare = df.loc[df['Fare'].idxmax()]
print("\nPassenger with the Highest Fare:")
print(passenger_highest_fare)
