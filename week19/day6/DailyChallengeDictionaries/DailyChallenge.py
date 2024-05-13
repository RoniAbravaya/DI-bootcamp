# Challenge 1
word = input("Enter a word: ")

word_dict = {}
for i, char in enumerate(word):
    if char not in word_dict:
        word_dict[char] = [i]
    else:
        word_dict[char].append(i)

print(word_dict)

# Challenge 2
items_purchase = {
    "Water": "$1",
    "Bread": "$3",
    "TV": "$1,000",
    "Fertilizer": "$20"
}

wallet = "$300"

# Convert wallet to a number
wallet_amount = int(wallet.replace("$", "").replace(",", ""))

affordable_items = []
for item, price in items_purchase.items():
    item_price = int(price.replace("$", "").replace(",", ""))
    if item_price <= wallet_amount:
        affordable_items.append(item)

if affordable_items:
    affordable_items.sort()
    print(affordable_items)
else:
    print("Nothing")
