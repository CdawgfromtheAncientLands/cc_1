// U9414-0233
// 1. Calculate the Tip
// Determine the tip amount based on the bill using a ternary operator instead of if/else statements.

// the Bill Threshold is determined by Steven's culture. He will pay a 15% tip for bills inside the threshold and a 20% for others.
let initialBill = 275;
let billLowerThreshold = 50;
let billUpperThreshold = 300;
let thresholdTipPercent = 0.15;
let otherTippercent = 0.2;

function calcTip(startingBill) {
    return (startingBill >= billLowerThreshold && startingBill <= billUpperThreshold) ? startingBill * thresholdTipPercent : startingBill *otherTippercent;
}
//Created a function to convert numbers into display-worthy USD
function USDconvert(amount) {
    return(new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(amount))
}
//Tip amount determined, assigning to variable.
//Rounding the tip to its nearest two decimal places.
//Changed variable name to meet requirements.
let tipNum = calcTip(initialBill)
let tip = USDconvert(tipNum)

//2. Output Details
//Display a message in the console that includes the bill amount, the tip amount, and the total cost (bill plus tip).

totalCost = USDconvert(initialBill + tipNum)

console.log("The initial bill was $" + initialBill + ", and the tip was " + tip + ". The total cost came out to be " + totalCost + ".");

//3. Develop a function named calcTip that accepts any bill amount as an input and returns the calculated tip, 
// following the specified rules. 
// Test this function with a bill value of $100.

//Such a function has been made during my completion of step 1. Name updated to become calcTip.
//Testing function...
let testBill = 100;
testTip = USDconvert(calcTip(testBill));
console.log("The test tip for a test bill of $" + testBill + " is " + testTip + ".");

//4. Utilize Arrays
//Construct an array "bills" containing the test data values.
//Generate an array, "tips" where each entry is the result of calling your calcTip function for each corresponding bill value.
//Assemble an array "totals" that sums each bill with its respective tip.

const bills = [125, 555, 44, 275, 40, 430];

const tips = bills.map(calcTip)

const totals = [];
for (let index = 0; index < bills.length; index++) {
    totals.push(bills[index] + tips[index]);
};