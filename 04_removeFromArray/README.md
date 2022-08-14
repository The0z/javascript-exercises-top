# Exercise 04 - removeFromArray

Implement a function that takes an array and some other arguments then removes the other arguments from that array:

```javascript
removeFromArray([1, 2, 3, 4], 3); // should remove 3 and return [1,2,4]
```

## Hints

The first test on this one is fairly easy, but there are a few things to think about(or google) here for the later tests:

- how to remove a single element from an array
- how to deal with multiple optional arguments in a javascript function
- [Check this link](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/arguments).  Scroll down to the bit about `Array.from` or the spread operator. - [Or this link](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/rest_parameters).
  
## Personal Notes:
removeFromArray
- takes an array
- removes elements from array
- takes in at least one non array element, but can optionally take more (kwargs or args) 
    - Called the rest parameter in JS
- Assumption Array is unique, no duplicates exist within the array
- Loop through each number to find until no more remain. Loop throughout the array until the element is found, splice the arr to remove the element. Use indexOf() function to check if element exists in the array. If -1, element doesn't exist, move on, else splice at that index.
