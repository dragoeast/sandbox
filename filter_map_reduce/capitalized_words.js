// Create a new array called `capitalizedWords` with the words 
// from the `words` array with the first letter of each word capitalized.

const words = ['coder', 'developer', 'analyst', 'success', 'peace', 'harmony'];

const capitalizedWords = words
    .map(word => `${word[0].toUpperCase()}${word.slice(1)}` );

console.log(words);
console.log(capitalizedWords);
