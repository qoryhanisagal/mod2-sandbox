/*
Pair Practice 2 - Pangram

To run the code in this file, run the command:
  node practice_sessions/pair_practice_2_pangram.js
*/ 
console.log("pair_practice_2_pangram.js is running")



const pangram = "the quick brown fox jumps over the lazy dog"
const quote = "sucking at something is the first step towards being kinda good at something"

//================LEVEL ONE===============//
/*Write a function that takes in a string and counts how many words are in that string.*/

// countWords(pangram) -->  9
// countWords(quote) -->  13
//

// DEFINE: Count Words in a String
function countWords(string) {
  // D - Define:
  // This function takes a string and counts how many words are in it.

  // E - Explain:
  // Split the string by spaces and count the resulting words.

  // F - Fetch Parameters:
  // - string: The input string to count words from.

  // I - Implement the Logic:
  // I - Implement the Logic:
  const words = string.trim().split(" "); // Split the trimmed string into an array of words
  const wordCount = words.length;  // Get the length of the array

  //===============Ask which should I do?===============//
  // const words = string.split(" "); // Split the string into an array of words
  // const wordCount = words.length // Get the length of the array

  // N - Name the Return Value:
  // The word count as a number.

  // E - Execute by Returning the Value:
  return wordCount
}

// Execute the Function
console.log(countWords("the quick brown fox jumps over the lazy dog")); // Expected Output: 9
console.log(countWords("sucking at something is the first step towards being kinda good at something")); // Expected Output: 13
console.log(countWords("   "));              // Expected: 0 (empty string)


//===============LEVEL TWO===============//
/*Write a function that takes in a string and a number. The function should return the number of words in that string which are as long, or longer, than the given number.*?

countWordsByLength(pangram, 4) -->  5
countWordsByLength(quote, 5) -->  7
*/

// DEFINE: Count Words by Length
function countWordsByLength(string, minLength) {
  // D - Define:
  // This function counts the words in a string that are as long or longer than a specified length.

  // E - Explain:
  // Split the string into words, filter for words that meet or exceed the minimum length, and count them.

  // F - Fetch Parameters:
  // - string: The input string containing words.
  // - minLength: The minimum word length to filter.

  // I - Implement the Logic:
  const words = string.trim().split(" "); // Split the trimmed string into an array of words
  const filteredWords = words.filter((word) => word.length >= minLength); // Filter words by length

  //===============Ask which should I do?===============//
  // const words = string.split(" "); // Split string into an array of words
  // const filteredWords = words.filter((word) => word.length >= minLength); // Filter words by length

  // N - Name the Return Value:
  const wordCount = filteredWords.length; // Count the filtered words

  // E - Execute by Returning the Value:
  return wordCount;
}

// Execute the Function
console.log(countWordsByLength("the quick brown fox jumps over the lazy dog", 4)); // Expected Output: 5
console.log(countWordsByLength("sucking at something is the first step towards being kinda good at something", 5)); // Expected Output: 7
console.log(countWordsByLength("", 4));     // Expected: 0 (empty string)

// DEFINE: Reorganize Words by Length Using Reduce
function reorganizeWords(string) {
  // D - Define:
  // This function takes a string and returns an object where keys are word lengths,
  // and values are arrays containing words of that length.

  // E - Explain:
  // - Split the string into words.
  // - Use reduce to build an object where keys are word lengths.
  // - Push words into arrays under the corresponding key.

  // F - Fetch Parameters:
  // - string: The input string to process.

  // I - Implement the Logic:
  const words = string.split(" "); // Split the string into an array of words

  const wordGroups = words.reduce((acc, word) => {
    const length = word.length; // Get the length of the word

    // Initialize the key if it doesn't exist
    if (!acc[length]) {
      acc[length] = [];
    }

    // Add the word to the correct array
    acc[length].push(word);

    // Return the accumulator for the next iteration
    return acc;
  }, {});  // Start with an empty object

  // N - Name the Return Value:
  // Return the object containing words grouped by length.

  // E - Execute by Returning the Value:
  return wordGroups;
}

// Execute the Function
console.log(reorganizeWords("the quick brown fox jumps over the lazy dog"));
/*
Expected Output: 
{
  '3': [ 'the', 'fox', 'the', 'dog' ],
  '4': [ 'over', 'lazy' ],
  '5': [ 'quick', 'brown', 'jumps' ]
}
*/

console.log(reorganizeWords("sucking at something is the first step towards being kinda good at something"));
/*
Expected Output:
{
  '2': [ 'at', 'is', 'at' ],
  '3': [ 'the' ],
  '4': [ 'step', 'good' ],
  '5': [ 'first', 'being', 'kinda' ],
  '7': [ 'sucking', 'towards' ],
  '9': [ 'something', 'something' ]
}
*/

console.log(reorganizeWords("hello")); // Expected Output: { '5': ['hello'] }