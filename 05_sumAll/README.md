# Exercise 05 - sumAll

Implement a function that takes 2 integers and returns the sum of every number between(and including) them:

```javascript
sumAll(1, 4) // returns the sum of 1 + 2 + 3 + 4 which is 10
```


## Hints

Think about how you would do this on pen and paper and then how you might translate that process into code:
- make sure you pay attention to the function parameters
- create a variable to hold the final sum
- loop through the given numbers ([link](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Loops_and_iteration))
- on each iteration add the number to the sum
- return the sum after finishing the loop

## Personal Notes:
- function takes in two inputs. 
- if either parameter given is not a number or 0 or negative, return 'ERROR'.
- check which number is the largest How? Use an if statement to switch num1 with num2.
- note: looping through large numbers would be awful! use Gauss summation : n (n +1) / 2
- Get the sum by subtracting the gauss summation of the largest number minus the the gauss summation of the smallest number minus 1. 
 - return the sum of the above.