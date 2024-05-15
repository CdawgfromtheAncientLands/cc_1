// 1. Calculate the Tip
// Determine the tip amount based on the bill using a ternary operator instead of if/else statements.

// the Bill Threshold is determined by Steven. He will pay a 15% tip for bills inside the threshold and a 20% for others.
let initialBill = 275;
let billLowerThreshold = 50;
let billUpperThreshold = 300;
let thresholdTipPercent = 0.15;
let otherTippercent = 0.2;

function tipFunc(startingBill) {
    return (startingBill >= billLowerThreshold && startingBill <= billUpperThreshold) ? startingBill * thresholdTipPercent : startingBill *otherTippercent;
}

//Tip amount determined, assigning to variable.
//Rounding the top to its nearest two decimal places.
let roundedTip = (Math.round((tipFunc(initialBill) + Number.EPSILON) * 100) / 100);

//2. Output Details
//Display a message in the console that includes the bill amount, the tip amount, and the total cost (bill plus tip).

totalCost = (initialBill + roundedTip);
//Ensured that numbers would go out to 2 decimal places. Not necessary for intialBill.
console.log("The initial bill was $" + initialBill + ", and the tip was $" + roundedTip.toFixed(2) + ". The total cost came out to be $" + totalCost.toFixed(2) + ".");