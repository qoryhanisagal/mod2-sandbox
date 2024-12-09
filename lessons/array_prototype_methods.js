/*
JS Array Prototype Methods Lesson Scratchpad

To run the code in this file, run the command:
  node lessons/array_prototype_methods.js
*/ 
// console.log("array_prototype_methods.js is running")

// const names = ['nick', 'ben', 'trisha', 'john', 'dustin'];

// Key Points About.filter()
// 1.	What.filter() Does:
// 	•	It iterates over each element in the array(names in this case).
// 	•	For each element, it runs the provided callback function.
// 	•	If the callback function returns true, the element is included in the resulting array.
// 	•	If the callback function returns false or undefined, the element is excluded.
//  Filter has the if/else included add criteria to return
// Loook at your OneNoe
// names.filter(() => {
//  return
// })

// console.log('filteredNames: ', filterNames)

// //Code Example
// const names = ['nick', 'ben', 'trisha', 'john', 'dustin'];

// const filteredNames = names.filter((name) => {
//   return name.length > 4;
// });

// console.log(filteredNames); // Output: ['trisha', 'dustin']


//each array prototype methid MUST RETURN
//something  specific in order tow ork
//if you forget to RETURN, it wont work


//Keep writinh your functions how you always have
//BUT, in your iterator methods, use arrow syntax


// function doStuff1() {
//   console.log('dostuff with fucntion keyword ES5')
// }

// const doStuff2 = () => {
//  console.log('doStuff arrow ES6')
// }


// Example #2
//Create a new array of living beatles using the filter method and store them in a livingBeatles variable.

// var beatles = [
//   { name: 'John', living: false, instruments: ['guitar', 'bass', 'piano'] },
//   { name: 'Paul', living: true, instruments: ['bass', 'guitar', 'piano'] },
//   { name: 'George', living: false, instruments: ['guitar', 'sitar'] },
//   { name: 'Ringo', living: true, instruments: ['drums', 'bongos'] },
// ]

//Understanding the Data

// The beatles array contains objects.Each object represents a member of the Beatles with the following properties:
// 	•	name: The name of the Beatle.
// 	•	living: A boolean(true or false) indicating whether the Beatle is alive.
// 	•	instruments: An array of instruments the Beatle plays.

const beatles = [
  { name: 'John', living: false, instruments: ['guitar', 'bass', 'piano'] },
  { name: 'Paul', living: true, instruments: ['bass', 'guitar', 'piano'] },
  { name: 'George', living: false, instruments: ['guitar', 'sitar'] },
  { name: 'Ringo', living: true, instruments: ['drums', 'bongos'] },
];

const livingBeatles = beatles.filter((beatle) => {
  return beatle.living === true;
});

console.log(livingBeatles);
// Output:
// [
//   { name: 'Paul', living: true, instruments: ['bass', 'guitar', 'piano'] },
//   { name: 'Ringo', living: true, instruments: ['drums', 'bongos'] }
// ]

//var verison

var beatles = [
  { name: 'John', living: false, instruments: ['guitar', 'bass', 'piano'] },
  { name: 'Paul', living: true, instruments: ['bass', 'guitar', 'piano'] },
  { name: 'George', living: false, instruments: ['guitar', 'sitar'] },
  { name: 'Ringo', living: true, instruments: ['drums', 'bongos'] },
];

var livingBeatles = beatles.filter(function (beatle) {
  return beatle.living === true;
});

console.log(livingBeatles);
// Output:
// [
//   { name: 'Paul', living: true, instruments: ['bass', 'guitar', 'piano'] },
//   { name: 'Ringo', living: true, instruments: ['drums', 'bongos'] }
// ]
