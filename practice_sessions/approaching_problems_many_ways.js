/*
JS Approaching Problems Many Ways Scratchpad

To run the code in this file, run the command:
  node practice_sessions/approaching_problems_many_ways.js
*/ 
// console.log("approaching_problems_many_ways.js is running")


/*  PROMPT:
Write a function findCheapToys that returns an array of toy names that cost less than $20.

Expected output => [ 'Tamagotchi', 'Super Soaker', 'Pogs' ]
*/

const ninetiesToys = [
  {
      name: "Tamagotchi",
      releaseYear: 1996,
      price: 15.99
  },
  {
      name: "Furby",
      releaseYear: 1998,
      price: 29.99
  },
  {
      name: "Super Soaker",
      releaseYear: 1989,
      price: 19.99
  },
  {
      name: "Pogs",
      releaseYear: 1991,
      price: 5.99
  },
  {
      name: "Game Boy",
      releaseYear: 1989,
      price: 89.99
  }
];

// ========== ROUND 1: Using forEach ============
/* Round 1: forEach
Solve the prompt using a forEach. You may not use any other iterator methods.
*/
function findCheapToys() {
    /*Step1 : Create an empty array to store cheap toy names*/
    const cheapToys = [];

    /*Step 3: Iterate over */
    ninetiesToys.forEach((toy) => {
        if (toy.price < 20) {
            cheapToys.push(toy.name); // Add toy name if price is less than
        }
    });

    // Step 4: Return the array of cheap toy names
    return cheapToys;
}

// ========= OUTPUT ===========
console.log(findCheapToys()); // Expected output => [ 'Tamagotchi', 'Super Soaker', 'Pogs' ]


// ========== ROUND 2: Using filter and map ============
/* Round 2: filter and map
Solve the prompt using a filter and map. You may not use any other iterator methods.
*/
function findCheapToys() {
    // Step 1: Filter the toys to only include those with a price less than $20
    const cheapToys = ninetiesToys.filter((toy) => {
        console.log("Filtering toy:", toy); // Debugging step to see toy being processed
        return toy.price < 20;
    });

    console.log("Filtered toys:", cheapToys); // Debugging to confirm filtered toys

    // Step 2: Map the filtered toys to extract their names
    const cheapToyNames = cheapToys.map((toy) => {
        console.log("Mapping toy name:", toy.name); // Debugging to see toy name being mapped
        return toy.name;
    });

    console.log("Cheap toy names:", cheapToyNames); // Debugging to confirm mapped names
    return cheapToyNames;
}

// ========= OUTPUT ===========
console.log(findCheapToys()); // Expected output => [ 'Tamagotchi', 'Super Soaker', 'Pogs' ]


/* Round 3: reduce
Solve the prompt using a reduce. You may not use any other iterator methods.
*/

// ========== ROUND 3: Using reduce ============
function findCheapToys() {
    return ninetiesToys.reduce((acc, toy) => {
        // Debugging: log the current toy and accumulator
        console.log("Current toy being processed:", toy);
        console.log("Current accumulator:", acc);

        // Check if the toy price is less than $20
        if (toy.price < 20) {
            // Add the toy name to the accumulator array
            acc.push(toy.name);

            // Debugging: log the updated accumulator
            console.log("Updated accumulator after adding:", acc);
        }
        return acc; // Return the accumulator for the next iteration
    }, []); // Initialize the accumulator as an empty array
}

// ========= OUTPUT ===========
console.log(findCheapToys()); // Expected output => [ 'Tamagotchi', 'Super Soaker', 'Pogs' ]