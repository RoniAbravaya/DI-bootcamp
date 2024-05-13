import re

class AnagramChecker:
    def __init__(self, word_list_file):
        with open(word_list_file, 'r') as file:
            self.word_list = set(word.strip().lower() for word in file)

    def is_valid_word(self, word):
        word = word.strip().lower()
        return word in self.word_list

    def is_anagram(self, word1, word2):
        word1 = word1.lower()
        word2 = word2.lower()
        return sorted(word1) == sorted(word2)

    def get_anagrams(self, word):
        word = word.lower()
        anagrams = [w for w in self.word_list if self.is_anagram(word, w) and word != w]
        return anagrams


class AnagramsApp:
    def __init__(self, word_list_file):
        self.anagram_checker = AnagramChecker(word_list_file)

    def input_word(self):
        while True:
            user_input = input("Enter a word (or 'exit' to quit): ").strip()
            if user_input.lower() == 'exit':
                print("Goodbye!")
                break
            elif len(user_input.split()) > 1:
                print("Error: Only one word is allowed.")
            elif not re.match("^[a-zA-Z]+$", user_input):
                print("Error: Only alphabetic characters are allowed.")
            else:
                cleaned_word = user_input.strip()
                self.process_word(cleaned_word)

    def process_word(self, word):
        if self.anagram_checker.is_valid_word(word):
            print(f"\nYOUR WORD: '{word}'")
            print("This is a valid English word.")
            anagrams = self.anagram_checker.get_anagrams(word)
            if anagrams:
                print("Anagrams for your word:", ', '.join(anagrams))
            else:
                print("No anagrams found for your word.")
        else:
            print(f"'{word}' is not a valid English word.")

# Entry point for the program
if __name__ == "__main__":
    app = AnagramsApp("words.txt")
    app.input_word()
