// 1. Calculate the Tip
// Determine the tip amount based on the bill using a ternary operator instead of if/else statements.

// the Bill Threshold is determined by Steven. He will pay a 15% tip for bills inside the threshold and a 20% for others.
let initialBill = 1000;
let billLowerThreshold = 50;
let billUpperThreshold = 300;
let thresholdTipPercent = 0.15;
let otherTippercent = 0.2;

function tip(startingBill) {
    return (startingBill >= billLowerThreshold && startingBill <= billUpperThreshold) ? startingBill * thresholdTipPercent : startingBill *otherTippercent;
}

//Tip amount determined, assigning to variable.
let tip = tip(initialBill)