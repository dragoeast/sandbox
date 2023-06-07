// Add up the positive numbers in the array.

const arr = [-2, 4, 5, -13, 10];

const positive_total = arr
    .filter(number => number > 0)
    .reduce((acc, num) => acc + num, 0)

console.log(arr);
console.log(positive_total);
