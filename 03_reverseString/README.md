# Exercise 03 - Reverse a String

Pretty simple, write a function called `reverseString` that returns its input, reversed!

```javascript
reverseString('hello there') // returns 'ereht olleh'
```

You will notice in this exercise that there are multiple tests, after making the first one pass, enable the others one by one by deleting the `.skip` in front the `test.skip()` function.

## Hints
Strings in JavaScript cannot be reversed directly so you're going to have to split it into something else first.. do the reversal and then join it back together into a string.

reverseString
- works with multiple words, single words, punctuation/numbers, and empty strings. 
- use split to split the string into an array
- run through the array in reverse order using a for loop that counts down from array.length - 1.]
- takes in a str
- returns the reversed str