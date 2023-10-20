# Given an array of strings words, return the words that can be typed using letters of the alphabet on only one row of American keyboard like the image below.
# In the American keyboard:

# the first row consists of the characters "qwertyuiop",
# the second row consists of the characters "asdfghjkl", and
# the third row consists of the characters "zxcvbnm".
# words	Output
# ["Hello","Alaska","Dad","Peace"] ->	["Alaska","Dad"]
# ["omk"]	-> []
# ["adsdf","sfd"] ->	["adsdf","sfd"]
def mine_keyboard_words(words):
    row1 = "qwertyuiop"
    row2 = "asdfghjkl"
    row3 = "zxcvbnm"
    results = []
    # loop thro IP word
    # IF current letter is in row1
        # in_row1 = True
        # IF i == length of IP word
            # add IP word to results
        # contiue - to keep row2&3 checks from running
    # ELIF current letter is in row2 AND !in_row1
        # in_row2 = True
        # IF i == length of IP word
            # add IP word to results
    # ELIF current letter is in row3 AND !in_row1 AND !in_row2
        # IF i == length of IP word
            # add IP word to results
    for word in words:
        in_row1 = False
        in_row2 = False
        in_row3 = False
        for i in range(len(word)):
            print("top looop,", word[i])
            if word[i].lower() in row1:
                print("row1 IF", word[i])
                in_row1 = True
                in_row2 = False
                in_row3 = False
                if i == len(word) - 1 and not in_row2 and not in_row3:
                    print("row1 Append")
                    results.append(word)
            elif word[i].lower() in row2 and not in_row1:
                print("2row2 IF: ", word[i])
                in_row2 = True
                in_row1 = False
                in_row3 = False
                if i == len(word) - 1 and not in_row1 and not in_row3:
                    print("row2 Append")
                    results.append(word)
            elif word[i].lower() in row3 and not in_row1 and not in_row2:
                print("333row333: ", word[i])
                in_row3 = True
                in_row1 = False
                in_row2 = False
                if i == len(word) - 1 and not in_row2 and not in_row1:
                    print("row3 Append")
                    results.append(word)
    return results

# print(keyboard_words(["Alaska"]))
# print(keyboard_words(["Peace"]))
# print(keyboard_words(["Hello","Alaska","Dad","Peace"]))
# Learn's Solution
def _keyboard_words(words):
    results = []
    for word in words:
        original_word = word
        word = word.lower()
        first_letter = word[0]
        on_a_row = True
        if first_letter in "qwertyuiop":
            for letter in word:
                if letter not in "qwertyuiop":
                    on_a_row = False
                    break
        elif first_letter in "asdfghjkl":
            for letter in word:
                if letter not in "asdfghjkl":
                    on_a_row = False
                    break
        elif first_letter in "zxcvbnm":
            for letter in word:
                if letter not in "zxcvbnm":
                    on_a_row = False
                    break
        if on_a_row:
            results.append(original_word)
    return results

# Classmate's SOL:
def _keyboard_words(words):
    op = []
    for word in words:
        row1 = 0
        row2 = 0
        row3 = 0
        original = word
        word = word.lower()
        for w in word:
            if w in "qwertyuiop":
                row1 += 1
            if w in "asdfghjkl":
                row2 += 1
            if w in "zxcvbnm":
                row3 += 1
        if len(word) == row1 or len(word) == row2 or len(word) == row3:
            op.append(original)
    return op

# Carmen's Sol:
def carmens_keyboard_words(words):
    result = []
    set1 = set("qwertyuiop")
    set2 = set("asdfghjkl")
    set3 = set("zxcvbnm")
    for word in words:
        word_set = set(word.lower())
        if word_set.issubset(set1) == True:
            result.append(word)
        elif word_set.issubset(set2) == True:
            result.append(word)
        elif word_set.issubset(set3) == True:
            result.append(word)
    return result

# Tanner's Sol, close to yours:
def keyboard_words(words):
    row_1 = "qwertyuiop"
    row_2 = "asdfghjkl"
    row_3 = "zxcvbnm"
    result = []
    for word in words:
        row1_word = True
        row2_word = True
        row3_word = True
        for char in word:
            char = char.lower()
            if char not in row_1:
                row1_word = False
            if char not in row_2:
                row2_word = False
            if char not in row_3:
                row3_word = False
        if row1_word:
            result.append(word)
        if row2_word:
            result.append(word)
        if row3_word:
            result.append(word)
    return result

print(keyboard_words(["Hello","Alaska","Dad","Peace"]))
