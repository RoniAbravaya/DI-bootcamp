import string
from collections import Counter

class Text:
    def __init__(self, text):
        self.text = text

    def word_frequency(self, word):
        words = self.text.split()
        count = words.count(word)
        if count == 0:
            return f"The word '{word}' does not appear in the text."
        else:
            return f"The word '{word}' appears {count} times in the text."

    def most_common_word(self):
        words = self.text.split()
        word_count = Counter(words)
        return word_count.most_common(1)[0][0]

    def unique_words(self):
        words = self.text.split()
        return list(set(words))

    @classmethod
    def from_file(cls, file_path):
        with open(file_path, 'r') as file:
            text = file.read()
        return cls(text)


class TextModification(Text):
    def remove_punctuation(self):
        translator = str.maketrans('', '', string.punctuation)
        return self.text.translate(translator)

    def remove_stop_words(self):
        stop_words = set(["i", "me", "my", "myself", "we", "our", "ours", "ourselves", "you", "your", "yours", "yourself", "yourselves", "he", "him", "his", "himself", "she", "her", "hers", "herself", "it", "its", "itself", "they", "them", "their", "theirs", "themselves", "what", "which", "who", "whom", "this", "that", "these", "those", "am", "is", "are", "was", "were", "be", "been", "being", "have", "has", "had", "having", "do", "does", "did", "doing", "a", "an", "the", "and", "but", "if", "or", "because", "as", "until", "while", "of", "at", "by", "for", "with", "about", "against", "between", "into", "through", "during", "before", "after", "above", "below", "to", "from", "up", "down", "in", "out", "on", "off", "over", "under", "again", "further", "then", "once", "here", "there", "when", "where", "why", "how", "all", "any", "both", "each", "few", "more", "most", "other", "some", "such", "no", "nor", "not", "only", "own", "same", "so", "than", "too", "very", "s", "t", "can", "will", "just", "don", "should", "now"])
        words = self.text.split()
        return ' '.join(word for word in words if word.lower() not in stop_words)

    def remove_special_characters(self):
        return ''.join(char for char in self.text if char.isalnum())


# Testing Part I
text_string = "A good book would sometimes cost as much as a good house."
text = Text(text_string)
print(text.word_frequency("good"))
print("Most common word:", text.most_common_word())
print("Unique words:", text.unique_words())

# Testing Part II
text_from_file = Text.from_file('the_stranger.txt')
print("Most common word in 'The Stranger' text:", text_from_file.most_common_word())

# Testing Bonus
modified_text = TextModification(text_string)
print("Text without punctuation:", modified_text.remove_punctuation())
print("Text without stop words:", modified_text.remove_stop_words())
print("Text without special characters:", modified_text.remove_special_characters())
