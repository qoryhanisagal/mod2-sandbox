/*
Scratchie
Use this file as a blank scratchpad.  
You can copy/paste in whatever exercises you want as needed.

To run the code in this file, run the command:
  node practice_sessions/scratchie.js
*/ 
console.log("scratchie.js is running")

// //======== Step 1: Calculate Discount Function=======//
// // Function to calculate the discount amount
// function calculateDiscount(cartTotal, discount) {
//   if (discount < 0) {
//     return "Invalid discount rate.";
//   }

//   return (cartTotal * discount) / 100;
// }

// //======== Step 2-5: Main Function with Validation=======//
// // Main function to calculate the total
// function calculateTotal(cartTotal, discount = 0, taxRate = 5) {
//   // Step 1: Validate Inputs
//   if (cartTotal <= 0) {
//     return "Invalid cart total.";
//   }
//   if (discount < 0 || taxRate < 0) {
//     return "Invalid discount or tax rate.";
//   }

//   // Step 2: Calculate Discount
//   const discountAmount = calculateDiscount(cartTotal, discount);
//   const discountedTotal = cartTotal - discountAmount;

//   // Step 3: Calculate Tax
//   const taxAmount = (discountedTotal * taxRate) / 100;

//   // Step 4: Add Tax to Discounted Total
//   const finalTotal = discountedTotal + taxAmount;

//   // Debugging steps (optional, can be removed later)
//   console.log(`Discounted Total: ${discountedTotal}`);
//   console.log(`Tax Amount: ${taxAmount}`);
//   console.log(`Final Total: ${finalTotal}`);

//   // Step 5: Return Final Amount
//   return finalTotal.toFixed(2); // Return the final total as a string with 2 decimal places
// }

// //======== Example Calls=======//
// console.log(calculateTotal(200, 15, 8)); // Expected Output: 183.60
// console.log(calculateTotal(100, 10, 5)); // Expected Output: 94.50
// console.log(calculateTotal(50, 0, 10));  // Expected Output: 55.00
// console.log(calculateTotal(100, 10, 0)); // Expected Output: 90.00
// console.log(calculateTotal(0, 10, 5));   // Expected Output: "Invalid cart total."
// console.log(calculateTotal(-50, 10, 5)); // Expected Output: "Invalid cart total."
// console.log(calculateTotal(100, -10, 5));// Expected Output: "Invalid discount or tax rate."
// console.log(calculateTotal(100, 10, -5));// Expected Output: "Invalid discount or tax rate."

// Define
function addTwoNumbers(num1, num2) {
  // Explain
  // This function takes two numbers and returns their sum

  // Fetch Parameters
  // Add the two numbers

  // I - Implement the Logic:
  const sum = num1 + num2;

  // Name the return value:
  // Return the result
  return sum;
}

// Execute by calling:
console.log(addTwoNumbers(3, 5)); // Expected Output: 8
console.log(addTwoNumbers(10, 20)); // Expected Output: 30
console.log(addTwoNumbers(-2, 4)); // Expected Output: 2