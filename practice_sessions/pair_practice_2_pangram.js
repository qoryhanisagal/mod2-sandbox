/*
Pair Practice 2 - Pangram

To run the code in this file, run the command:
  node practice_sessions/pair_practice_2_pangram.js
*/ 
console.log("pair_practice_2_pangram.js is running")



const pangram = "the quick brown fox jumps over the lazy dog"
const quote = "sucking at something is the first step towards being kinda good at something"

/* LEVEL ONE
Write a function that takes in a string and counts how many words are in that string.

countWords(pangram) -->  9
countWords(quote) -->  13
*/





/* LEVEL TWO
Write a function that takes in a string and a number. The function should return the number of words in that string which are as long, or longer, than the given number.

countWordsByLength(pangram, 4) -->  5
countWordsByLength(quote, 5) -->  7
*/






/* LEVEL THREE
Write a function that takes in a string and returns the words in that string as a single object.  The object's keys will be numbers representing the length of each word.  The values will be arrays containing the appropriate words. 

reorganizeWords(panagram) -->  {
  '3': [ 'the', 'fox', 'the', 'dog' ],
  '4': [ 'over', 'lazy' ],
  '5': [ 'quick', 'brown', 'jumps' ]
}
reorganizeWords(quote) -->  {
  '2': [ 'at', 'is', 'at' ],
  '3': [ 'the' ],
  '4': [ 'step', 'good' ],
  '5': [ 'first', 'being', 'kinda' ],
  '7': [ 'sucking', 'towards' ],
  '9': [ 'something', 'something' ]
}
*/
