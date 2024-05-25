import numpy as np
import matplotlib.pyplot as plt

# Exercise 1: Install Matplotlib and import it
# Already done if you are running this script

# Exercise 2: Create a basic line plot
x = [1, 2, 3, 4, 5]  # Prices
y = [5, 4, 3, 2, 1]  # Demand
plt.plot(x, y)
plt.xlabel('Price')
plt.ylabel('Demand')
plt.title('Product Demand vs Price')
plt.show()

# Exercise 3: Create a basic scatter plot
x = [1, 2, 3, 4, 5]  # Age
y = [75, 80, 88, 95, 105]  # Height in cm
plt.scatter(x, y)
plt.xlabel('Age (years)')
plt.ylabel('Height (cm)')
plt.title("Children's Height vs Age")
plt.show()

# Exercise 4: Modify line plot to include title and labels
plt.plot(x, y)
plt.xlabel('Price')
plt.ylabel('Demand')
plt.title('Product Demand vs Price')
plt.show()

# Exercise 5: Modify scatter plot to include title and labels
plt.scatter(x, y)
plt.xlabel('Age (years)')
plt.ylabel('Height (cm)')
plt.title("Children's Height vs Age")
plt.show()

# Exercise 6: Save plots as .png files
plt.plot(x, y)
plt.xlabel('Price')
plt.ylabel('Demand')
plt.title('Product Demand vs Price')
plt.savefig('product_demand_vs_price.png')

plt.scatter(x, y)
plt.xlabel('Age (years)')
plt.ylabel('Height (cm)')
plt.title("Children's Height vs Age")
plt.savefig('childrens_height_vs_age.png')

# Exercise 7: Create line plot and scatter plot for favorite mathematical functions
x = np.linspace(-10, 10, 1000)
y1 = np.sin(x)
y2 = np.cos(x)

plt.plot(x, y1, color='tab:blue')
plt.scatter(x, y2, marker='x')
plt.xlabel('X')
plt.ylabel('Y')
plt.title('Favorite Mathematical Functions')
plt.show()

# Exercise 8: Plot line plot and scatter plot on the same figure using subplots
fig, (ax1, ax2) = plt.subplots(1, 2)

ax1.plot(x, y1, color='tab:blue')
ax1.set_title('Line Plot')
ax1.set_xlabel('X')
ax1.set_ylabel('Y')

ax2.scatter(x, y2, marker='x')
ax2.set_title('Scatter Plot')
ax2.set_xlabel('X')
ax2.set_ylabel('Y')

plt.tight_layout()
plt.show()

# Exercise 9: Add legend to the plots from Exercise 8
fig, (ax1, ax2) = plt.subplots(1, 2)

ax1.plot(x, y1, color='tab:blue', label='sin(x)')
ax1.set_title('Line Plot')
ax1.set_xlabel('X')
ax1.set_ylabel('Y')
ax1.legend()

ax2.scatter(x, y2, marker='x', label='cos(x)')
ax2.set_title('Scatter Plot')
ax2.set_xlabel('X')
ax2.set_ylabel('Y')
ax2.legend()

plt.tight_layout()
plt.show()

# Exercise 10: Plot a histogram
grades = [88, 90, 95, 92, 88, 90, 88, 85, 93, 92, 90, 87, 95, 90, 88]
plt.hist(grades, bins=5, edgecolor='black')
plt.xlabel('Grades')
plt.ylabel('Frequency')
plt.title('Distribution of Grades in a Class')
plt.show()
