/**
A substring is a contiguous (non-empty) sequence of characters within a string.

A vowel substring is a substring that only consists of vowels ('a', 'e', 'i', 'o', and 'u') and has all five vowels present in it.

Given a string word, return the number of vowel substrings in word.

Example 1:

Input: word = "aeiouu"
Output: 2
Explanation: The vowel substrings of word are as follows (underlined):
- "aeiou u"
- "aeiouu"

Example 2:
Input: word = "unicornarihan"
Output: 0
Explanation: Not all 5 vowels are present, so there are no vowel substrings.

Example 3:
Input: word = "cuaieuouac"
Output: 7
Explanation: The vowel substrings of word are as follows (inbetween dashes):
- "c-uaieuo-uac"
- "c-uaieuou-ac"
- "c-uaieuoua-c"
- "cu-aieuo-uac"
- "cu-aieuou-ac"
- "cu-aieuoua-c"
- "cua-ieuoua-c"


Constraints:

1 <= word.length <= 100
word consists of lowercase English letters only.
 * @param {string} word
 * @return {number}
 */
// IP: string - a word
// OP: a number - number of substring that consist of all 5 vowels
// can have more than 5 letters to count
// It has to be vowels in a row.

// loop throught word
    // IF current is a non-vowel
        // slice at that letter and start from there
    // check for a,e,i,o,u
        // if found mark found
    // IF all are found
        // make count go up by one

    // at end, slice off index zero letter and start again

var _countVowelSubstrings = function(word) {
    if (word.length < 5) {
        return 0;
    }
    let len = word.length;
    let count = 0;
    let a = false;
    let e = false;
    let i = false;
    let o = false;
    let u = false;
    let countedStrings = new Map();
    let firstVowelIndex = 0;
    function countForMe (newWord) {
        for (let j = 0; j < len; j++) {
            if (/[^aeiou]/.test(newWord[j])) {
                console.log('not v')
                a = false;
                e = false;
                i = false;
                o = false;
                u = false;
                firstVowelIndex = j+1;
            }
            if (/[a]/.test(newWord[j])) {
                a = true;
            } else if (/[e]/.test(newWord[j])) {
                e = true;
            } else if (/[i]/.test(newWord[j])) {
                i = true;
            } else if (/[o]/.test(newWord[j])) {
                o = true;
            } else if (/[u]/.test(newWord[j])) {
                u = true;
            }
            console.log(a, e, i, o, u);
            if (a && e && i && o && u) {
                if (!countedStrings.has(newWord.slice(firstVowelIndex, j))) {
                    count++;
                    countedStrings.set(newWord.slice(firstVowelIndex, j));
                }
            }
        }
    }
    // slice off first letter and do again
    let k = 0;
    let newWord = word;
    while (newWord.length > 5) {
        a = false;
        e = false;
        i = false;
        o = false;
        u = false;
        countForMe(newWord)
        newWord = newWord.slice(1, newWord.length);

    }
    return count;
};

const countVowelSubstrings = word => {
    const vowels = new Set(['a', 'e', 'i', 'o', 'u']);
    const set = new Set();
    let count = 0;

    for (let i = 0; i < word.length; i += 1) {
      set.clear();

      for (let j = 0; j + i < word.length && vowels.has(word[j + i]); j += 1) {
        set.add(word[i + j]);

        if (set.size === vowels.size) {
          count += 1;
        }
      }
    }

    return count;
  };

// console.log(countVowelSubstrings("bbaeixoubb"), 0);
console.log(countVowelSubstrings("cuaieuouac"), 7);
// first was overcounting with c, then starting from u
// now i'm under... with the map.
// sols on leetcode are much simpiler, probably the way to go.
