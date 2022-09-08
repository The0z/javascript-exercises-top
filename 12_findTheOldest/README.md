# Exercise 12 - Find the Oldest

Given an array of objects representing people with a birth and death year, return the oldest person.

## Hints
- You should return the whole person object, but the tests mostly just check to make sure the name is correct.
- this can be done with a couple of chained array methods, or by using `reduce`.
- One of the tests checks for people with no death-date.. use JavaScript's Date function to get their age as of today.


## Notes:
Date.now() gets the date immediately
Date.getFullYear() gets the entire year -- better option
Use  this to compare who has the oldest age.
Reduce function holds on to the oldest value and keeps passing it along, it will then return that obj.
Check if the death property exists, if not the person is still living - compare age based on Date.getFullYear