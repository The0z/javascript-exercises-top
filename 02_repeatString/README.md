# Exercise 02 - repeatString

Write a function that simply repeats the string a given number of times:

```javascript
repeatString('hey', 3) // returns 'heyheyhey'
```

This function will take two arguments, `string` and `num`.

*Note:* The exercises after this one will not have arguments provided as this one does - you will need to provide them yourself from now on. So read each exercise's README carefully to see what kinds of arguments will be expected.

You will notice in this exercise that there are multiple tests (see in file `repeatString.spec.js`). Only the first test is currently enabled. So after making sure that this first one passes, enable the others one by one by deleting the `.skip` from the `test.skip()` function.


## Hints

- Take note of the above function call- how exactly is it being called?

- You're going to want to use a loop for this one.

- Create a variable to hold the string you're going to return, create a loop that repeats the given number of times and add the given string to the result on each loop.

- If running `npm test repeatString.spec.js` returns results similar to the below, make sure you have enabled the rest of the tests, as described in the instructions above.

```
Test Suites: 1 passed, 1 total
Tests:       6 skipped, 1 passed, 7 total
```

## Personal Notes:
repeatString (str, num)
-returns the concatenated version of str in which it repeats num amount of times
-i.e. repeatString('hi',2) = 'hihi'
-num must be greater than or equal to 0.
- num = 0 will return an empty string, anything less than 0 will return an ERROR
- repeatString is a deceptive name as num=1 doesn't repeat it once, rather returns the original.
check if num is less than 0. If so return "Error"
start with a blank string
loop num amount of times,  each loop concatenate another copy of the string on
return string after loop (i.e. if loop runs zero times, blank string will be returned)