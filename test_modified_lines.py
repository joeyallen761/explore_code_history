'''
This file contains a simple use case of the functions by comparing a variable "before_code" to the variable "after_code", 
which represents a changed version of "before_code". Feel free to play around with the functions by defining your own "before"
code and "after" code and running tests on it.
'''

from diff_helper import get_diff, printDiff, get_modified_lineNums

before_code = """
// detect keypress (letter, backspace, other)

// Update "letters"

// Update tile markup

// Delete last letter

/*
- if keypress is a letter
  - update "letters" attribute
    - update tile markup based on "letters" value
- if keypress is backspace
  - delete last letter in “letters”
    - update tile markup based on "letters"
*/
"""


after_code = """
// detect keypress (letter, backspace, other)
document.addEventListener('keydown', () => {
  console.log('keypress');
});

// Update "letters"

// Update tile markup

// Delete last letter

/*
- if keypress is a letter
  - update "letters" attribute
    - update tile markup based on "letters" value
- if keypress is backspace
  - delete last letter in “letters”
    - update tile markup based on "letters"
*/
"""


if __name__ == "__main__":
  diff = get_diff(before_code, after_code)
  printDiff(diff)
  modified_lines = get_modified_lineNums(diff)
  print("modified lines:", len(modified_lines), ":", modified_lines)