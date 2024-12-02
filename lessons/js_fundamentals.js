// /*
// JS Fundamentals Lesson Scratchpad

// To run the code in this file, run the command:
//       node lessons/js_fundamentals.js
// */ 
// // console.log("js_fundamentals.js is running")


// /*
// JS Variables & Data Types Examples
// */ 

// var firstName = 'Koiree';
// var age = 37;
// const isNice = true;

// const policeSketchDescription = {
//   hair: 'blond',
//   eyes: 'brown',
//   isTall: false,
//   visibleTattoos: 1
// }

// let favoriteFoods = ['pizza', 'blueberries', 'ice cream', 'sushi']

// let partnerName = null;
// let jobTitle; // you can declare a variable without assigning it a value immediately

// // console.log('favoriteFoods:', favoriteFoods)
// // console.log('partnerName:', partnerName)
// // console.log('jobTitle: ', jobTitle)

// /* NOTES:
// - Simple Data Types: BUNNS
// - Complex Data Types: objects, arrays


// - There are TWO ways to access data within an object in JS:
// 1) dot notation
// 2) bracket notation

// - Often, I 'll ise bracket motation with a parameter tio access data in an object dynamically.
// /*


// // console.log('policeSketchDescription:', policeSketchDescription)
// // //log the hair color

// // console.log('psd hair:', policeSketchDescription.hair)

// // //log the number of visible tattoos
// // console.log('psd tattoos:', policeSketchDescription.visibleTattoos)

// // //print first element in the favorityFoods array - 'pizza'

// // console.log('fav food 1st:', favoriteFoods[0])

// // //print last element in the favorityFoods array - 'sushi'
// // console.log('fav food last:', favoriteFoods[0])

// // console.log('num:', favoriteFoods.length - 1)
// // console.log('fav food last:', favoriteFoods[favoriteFoods.length - 1])

// //declare 2 variables - quantity & mythicalCreature
// let quantity = 15;
// let mythicalCreature = 'unicorns';

// let creatureCount- quantity + '' + mythicalCreature
// // 15
// console.log('creatureCount)

// Example Concatenation and Interpolation
//   */

// // function sayName() { }

// // sayName();

// //   console.log('heather')

// //====================================Greet Person Function===============================//
// function greetPerson(firstName, lastName) {
//   console.log(`Hello, ${firstName} ${lastName}! Welcome!`);
// }

// // Invoking the function
// greetPerson('Koiree', 'Descoteaux'); // Output: Hello, Koiree Smith! Welcome!

// //====================================Greet Person Function Edge Cases===============================//
// // Normal case
// greetPerson('Koiree', 'Descoteaux'); // Output: Hello, Koiree Descoteaux! Welcome!

// // Missing first name
// greetPerson(null, 'Descoteaux'); // Output: Hello, Guest Descoteaux! Welcome!
// greetPerson(undefined, 'Descoteaux'); // Output: Hello, Guest Descoteaux! Welcome!

// // Missing last name
// greetPerson('Koiree', null); // Output: Hello, Koiree ! Welcome!
// greetPerson('Koiree', undefined); // Output: Hello, Koiree ! Welcome!

// // No arguments provided
// greetPerson(); // Output: Hello, Guest ! Welcome!

// // Invalid data types
// greetPerson(123, 'Descoteaux'); // Output: Hello, Guest Descoteaux! Welcome!
// greetPerson('Koiree', { last: 'Descoteaux' }); // Output: Hello, Koiree ! Welcome!

// // Empty strings
// greetPerson('', 'Descoteaux'); // Output: Hello, Guest Descoteaux! Welcome!
// greetPerson('Koiree', ''); // Output: Hello, Koiree ! Welcome!
// greetPerson('', ''); // Output: Hello, Guest ! Welcome!

// //====================================Greet Person Function Refactored===============================//
// function greetPerson(firstName, lastName) {
//   if (!firstName || typeof firstName !== "string") {
//     firstName = "Guest";
//   }
//   if (!lastName || typeof lastName !== "string") {
//     lastName = "";
//   }

//   console.log(`Hello, ${firstName} ${lastName}! Welcome!`);
// }


// //===========================Invoking the function========================================//
// greetPerson("Koiree", "Descoteaux"); // Example invocation
// greetPerson(); // Testing default values
// greetPerson("John", null); // Testing edge case

// //==================================== Add Numbers Function===============================//

// function addNumbers(num1, num2, num3, num4) {
//   const total = num1 + num2 + num3 + num4;
//   console.log(`The total is: ${total}`);
// }

// //===========================Invoking the function========================================//
// addNumbers(10, 20, 30, 40); // Output: The total is: 100
// addNumbers(1, 2, 3, 4); // Output: 10

// //==================================== Add Numbers Function Simple Edge Cases===============================//

// function addNumbers(num1, num2, num3, num4) {
//   if (
//     typeof num1 !== "number" ||
//     typeof num2 !== "number" ||
//     typeof num3 !== "number" ||
//     typeof num4 !== "number"
//   ) {
//     return "All inputs must be numbers.";
//   }

//   return num1 + num2 + num3 + num4;
// }

// //==================================== Add Numbers Function Edge Cases Breakout Room===============================//

// // Happy Path
// console.log(addNumbers(1, 2, 3, 4)); // Output: 10

// // Test cases Non-Numeric Inputs
// console.log(addNumbers(1, 2, "three", 4)); // Output: All inputs must be numbers.
// // Negative Numbers
// console.log(addNumbers(-10, 20, 30, 40)); // Output: 80
// // Zero Values
// console.log(addNumbers(0, 0, 0, 0)); // Output: 0
// // Decimal Numbers
// console.log(addNumbers(1.1, 2.2, 3.3, 4.4)); // Output: 11
// // Large Numbers
// console.log(addNumbers(1000000, 2000000, 3000000, 4000000)); // Output: 10000000
// //	Undefined or Missing Arguments
// console.log(addNumbers(1, 2, 3)); // Output: All inputs must be numbers.
// console.log(addNumbers(1, undefined, 3, 4)); // Output: All inputs must be numbers.


// //==================================== Apply Discount Function===============================//
// function applyDiscount(price, discountAmount) {
//   const salePrice = price - discountAmount;
//   console.log(`The sale price is: $${salePrice}`);
// }


// //===========================Invoking the function========================================//
// applyDiscount(100, 25); // Output: The sale price is: $75

// function applyDiscount(price, discountAmount) {
//   if (discountAmount > price) {
//     return "Discount cannot exceed price.";
//   }
//   return price - discountAmount;
// }
// //==================================== Apply Discount Function Edge Cases===============================//
// console.log(applyDiscount(100, 25)); // Expected Output: 75
// console.log(applyDiscount(100, 150)); // Expected Output: "Discount cannot exceed price."
// console.log(applyDiscount(0, 0)); // Expected Output: 0

// //====================================Showing the Return Value so user can see==============================//
// function applyDiscount(price, discountAmount) {
//   const salePrice = price - discountAmount;
//   return salePrice; // Return the sale price for further use
// }

// //==================================== Announce Sale Function====================================//
// function announceSale(item, price, discountAmount) {
//   const salePrice = applyDiscount(price, discountAmount); // Reuse applyDiscount function
//   console.log(`Great news! The ${item} is now on sale for $${salePrice}!`);
// }

// //===========================Invoking the function========================================//
// announceSale("Laptop", 1000, 200); // Output: Great news! The Laptop is now on sale for $800!
// announceSale("Headphones", 150, 50); // Output: Great news! The Headphones is now on sale for $100!

// //==================================== Announce Sale Function Edge Cases===============================//
// function applyDiscount(price, discountAmount) {
//   if (price <= 0 || discountAmount < 0) {
//     return "Invalid price or discount amount.";
//   }
//   if (discountAmount > price) {
//     return "Discount cannot exceed price.";
//   }
//   return price - discountAmount;
// }

// function announceSale(item, price, discountAmount) {
//   const salePrice = applyDiscount(price, discountAmount);
//   if (typeof salePrice === "string") {
//     // Handle error messages from applyDiscount
//     console.log(`Cannot announce sale: ${salePrice}`);
//   } else {
//     console.log(`Great news! The ${item} is now on sale for $${salePrice}!`);
//   }
// }

// // Test cases
// announceSale("Table", 500, 600); // Output: Cannot announce sale: Discount cannot exceed price.
// announceSale("Chair", -100, 50); // Output: Cannot announce sale: Invalid price or discount amount.
// announceSale("Desk", 300, 50); // Output: Great news! The Desk is now on sale for $250!

// // JS Conditionals
// //==================================== Class Examples===============================//

// function identifyCookie(cookie) {
//   if (cookie === "chocolate chip") {
//     console.log("This cookie is a chocolate chip cookie!");
//   } else if (cookie === "oatmeal raisin") {
//     console.log("This should not even be called a cookie :(");
//   } else {
//     console.log("I bet you wish you had a chocolate chip cookie");
//   }
// }

// // identifyCookie("chocolate chip")
// // identifyCookie("oatmeal raisin")
// // identifyCookie("sugar")

// function evaluateSleep(hoursOfSleep) {  

// }

// // evaluateSleep(8)
// // evaluateSleep(4)

//==================================== Breakout Room 2===============================//
// //Use an if...else statement to compare the hoursOfSleep value with 6.//

// // //==================================== hoursOfSleep Function====================================//
// function evaluateSleep(hoursOfSleep) {
//   if (hoursOfSleep < 6) {
//     console.log("I am groggy.");
//   } else {
//     console.log("I feel fantastic!");
//   }
// }

// //====================================Invoking the function with different values====================================//
// evaluateSleep(8); // Output: I feel fantastic!
// evaluateSleep(4); // Output: I am groggy.

// //==================================== checkAge Function====================================//
// //Use an if...else if...else statement to handle the different age ranges.//
// function checkAge(age) {
//   if (age < 18) {
//     console.log("Unfortunately, you do not meet our age requirements.");
//   } else if (age >= 18 && age <= 64) {
//     console.log("Welcome to AAA!");
//   } else if (age >= 65) {
//     console.log("Welcome to AAA! You’re eligible for our senior discount!");
//   }
// }

// //====================================Invoking the function with different values====================================//
// checkAge(16); // Output: Unfortunately, you do not meet our age requirements.
// checkAge(30); // Output: Welcome to AAA!
// checkAge(70); // Output: Welcome to AAA! You’re eligible for our senior discount!


// //===================================Full Exercise===================================//

// // Exercise 1: evaluateSleep
// function evaluateSleep(hoursOfSleep) {
//   if (hoursOfSleep < 6) {
//     console.log("I am groggy.");
//   } else {
//     console.log("I feel fantastic!");
//   }
// }

// evaluateSleep(8); // Output: I feel fantastic!
// evaluateSleep(4); // Output: I am groggy.

// // Exercise 3: checkAge
// function checkAge(age) {
//   if (age < 18) {
//     console.log("Unfortunately, you do not meet our age requirements.");
//   } else if (age >= 18 && age <= 64) {
//     console.log("Welcome to AAA!");
//   } else if (age >= 65) {
//     console.log("Welcome to AAA! You’re eligible for our senior discount!");
//   }
// }

// checkAge(16); // Output: Unfortunately, you do not meet our age requirements.
// checkAge(30); // Output: Welcome to AAA!
// checkAge(70); // Output: Welcome to AAA! You’re eligible for our senior discount!


function checkAge(age) {
  if (age < 18) {
    console.log("Unfortunately, you do not meet our age requirements.");
  } else if (age > 18 && age < 64) {
    console.log("Welcome to AAA!");
  } else if (age > 65) {
    console.log("Welcome to AAA! You’re eligible for our senior discount!");
  }
}

checkAge(18); // Output: (Nothing happens)
checkAge(64); // Output: (Nothing happens)
checkAge(65); // Output: Welcome to AAA! You’re eligible for our senior discount!