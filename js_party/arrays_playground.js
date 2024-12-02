/* To run the code in this file, run the command:
      node js_party/arrays_playground.js
*/

console.log("arrays_playground.js is running")

// PART 1: How do we access values in an array?

var people = ['Brad', 'Dante', 'Amy', 'Louis', 'Stephanie'];

// 1a. First, predict what each console.log below is going to print to the console. Then, uncomment each console.log and check your predictions. Did anything surprise you? 

// console.log(people);

console.log(people[3]);

// console.log(people[10]);

var lotteryNumbers = [12, 33, 51, 62, 74, 88];

// 1b. Log the entire lotteryNumbers array to the console

// 1c. Log the first number to the console

// 1d. Use interpolation or concatenation (google this!) to print the following string: 
// "The second number is...33!"


// PART 2: What type of information should arrays hold?

var dog = ['Cappy', 'three years old', 'loves treats', 'is really cute'];
// 2a. This array is a bad example of an array. Why?

// 2b. Create an object that represents that data in a more organized way. Try to have at least one string, number, and boolean value in your object's key:value pairs


// PART 3: Does formatting matter?
var modOneLessonsV1 = [
  'JS: Data Types, Variables, Conditionals',
  'JS: Intro to Functions',
  'JS: Intro to Unit Testing',
  'Dev Skills: Merge Conflicts',
  'HTML: Intro to HTML Elements',
  'CSS: Flexbox'
];

var modOneLessonsV2 = ['JS: Data Types, Variables, Conditionals', 'JS: Intro to Functions', 'JS: Intro to Unit Testing', 'Dev Skills: Merge Conflicts', 'HTML: Intro to HTML Elements', 'CSS: Flexbox'];

// 3a. Do you prefer the formatting of modOneLessonsV1 or V2 better? Why?

// 3b. When might you choose to put a line break between each element of an array?


// PART 4: Reassigning array values
var favoriteCandy = ['skittles', 'm&ms', 'snickers', 'sour patch kids'];

favoriteCandy[1] = 'swedish fish';

// 4a. What do you think the console log below will show?
// console.log(favoriteCandy)

// 4b. Reassign snickers to be your favorite candy. Then print the array to the console to check that it worked.

favoriteCandy[10] = 'almond joy';

// 4c. What do you think the console log below will show?
// console.log(favoriteCandy)


// PART 5: Can you have an array of arrays?

var numbers = [[1, 2, 3], [4, 5], [6, [7, 8, 9], 10]];

// Oof! That looks gnarly. Let's mess around with this a bit.

// 5z. First, predict what each console.log below is going to print to the console. Then, uncomment each console.log and check your predictions. Did anything surprise you? 

// console.log(numbers[0]);

// console.log(numbers[2][1][2]);
// ^^ Woah. Let's sit with this one for a minute. Break it down:
    // console.log(numbers[2]);
    // console.log(numbers[2][1]);
    // console.log(numbers[2][1][2]);

// 5b. How would you access the number 10 in the numbers array?


// PART 6: More nested data!
var instructors = [
  { name: 'Will', program: 'FE', modsTaught: [1, 2, 3, 4] },
  { name: 'Hannah', program: 'FE', modsTaught: [1, 2] },
  { name: 'Heather', program: 'FE', modsTaught: [1] },
  { name: 'Ian', program: 'BE', modsTaught: [1, 2, 3, 4] }
];

// 6a. First, predict what each console.log below is going to print to the console. Then, uncomment each console.log and check your predictions. Did anything surprise you? 

// console.log(instructors[0]);

// console.log(instructors[1].name);

// console.log(instructors[2].modsTaught[0]);

// 6b. Hannah just switched to the backend program!

instructors[1].program = 'BE';

// console.log(instructors[1]);

var pets = [
  { 
    name: 'Cap', 
    age: 2, 
    isCute: true, 
    isNice: true, 
    favoriteTreats: [
      { name: 'milkbones', causesBadBreath: true }, 
      { name: 'carrots', causesBadBreath: false }]
  }, { 
    name: 'Pepper', 
    age: 10, 
    isCute: true, 
    isNice: false, 
    favoriteTreats: [
      { name: 'tuna', causesBadBreath: true }
    ]
  }, { 
    name: 'Luna', 
    age: 4, 
    isCute: true, 
    isNice: true, 
    favoriteTreats: [
      { name: 'bully sticks', causesBadBreath: true }, 
      { name: 'cheese', causesBadBreath: false }
    ]
  },
]

pets[1].favoriteTreats[0].name = 'chicken';

// console.log(pets[1]);

// 6c. Print all of the pet objects to the console

// 6d. Print the string of Cap to the console

// 6e. Print Luna's age to the console

// 6f. Print all of Cap's favorite treats to the console (the array)

// 6g. Print only the string of chicken to the console


//NOTES: 
// var array = ['dog', 8, false] //<--- GROSS
// console.log(array)

// Anytime we want to bundle data together, we have two choices:
// - array: a list of elements that are the same date type and decribe the same type of time
// - object: a bundle of information that describes one thing; use different data types


// arrays are lists 
// each element of an array should be consistent with data type and content 
// if it's hard to name your array, your data is probably not consistent


