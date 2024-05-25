import numpy as np
import pandas as pd
import matplotlib.pyplot as plt

# Task 1
# 1. Import the numpy, pandas, and matplotlib.pyplot packages.
# Already done if you are running this script

# 2. Use numpy to create an array x of 100 numbers ranging from 0 to 20 (inclusive) using the linspace function.
x = np.linspace(0, 20, 100)

# 3. Create an array y which is the square of x.
y = x ** 2

# 4. Use matplotlib to plot x vs y.
plt.plot(x, y)

# 5. Your plot should have an appropriate title and labels for the x and y axes. You should also adjust the x and y limits to correctly show all the data.
plt.title('Square of x')
plt.xlabel('x')
plt.ylabel('y = x^2')
plt.xlim(0, 20)
plt.ylim(0, 400)

# 6. Save this plot as a .png file using savefig.
plt.savefig('task1_plot.png')
plt.show()

# Task 2
# 1. Import the dataset from the link using pandas and assign it to a variable ‘chipo’.
url = "https://raw.githubusercontent.com/justmarkham/DAT8/master/data/chipotle.tsv"
chipo = pd.read_csv(url, sep='\t')

# 2. Clean the item_price column and transform it into a float.
chipo['item_price'] = chipo['item_price'].apply(lambda x: float(x[1:]))

# 3. Create a scatter plot presenting the relationship between the price of items and the quantity ordered.
plt.scatter(chipo['item_price'], chipo['quantity'])

# 4. Your plot should have an appropriate title and labels for the x and y axes.
plt.title('Relationship between Price and Quantity Ordered')
plt.xlabel('Item Price ($)')
plt.ylabel('Quantity Ordered')

# 5. Save this plot as a .png file using savefig.
plt.savefig('task2_plot.png')
plt.show()

# Task 3
# 1. Group the ‘chipo’ data by item_name and calculate the total quantity for each item.
item_quantity = chipo.groupby('item_name')['quantity'].sum().sort_values(ascending=False)

# 2. Create a bar plot that presents the total quantities for the top 5 items.
top_5_items = item_quantity.head()
plt.bar(top_5_items.index, top_5_items.values)

# 3. Your plot should have an appropriate title and labels for the x and y axes.
plt.title('Total Quantities for Top 5 Items')
plt.xlabel('Item Name')
plt.ylabel('Total Quantity')

# 4. Save this plot as a .png file using savefig.
plt.savefig('task3_plot.png')
plt.show()
