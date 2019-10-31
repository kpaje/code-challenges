// Mr. Scrooge has a sum of money 'P' that wants to invest, and he wants to know how many years 'Y' this sum has to be kept in the bank in order for this sum of money to amount to 'D'.
// The sum is kept for 'Y' years in the bank where interest 'I' is paid yearly, and the new sum is re-invested yearly after paying tax 'T'
// Note that the principal is not taxed but only the year's accrued interest

// Your task is to complete the method provided and return the number of years 'Y' as a whole in order for Mr. Scrooge to get the desired sum.
// Assumptions : Assume that Desired Principal 'D' is always greater than the initial principal, however it is best to take into consideration that if the Desired Principal 'D' is equal to Principal 'P' this should return 0 Years.

// Let P be the Principal = 1000.00
// Let I be the Interest Rate = 0.05
// Let T be the Tax Rate = 0.18
// Let D be the Desired Sum = 1100.00

// After 1st Year -->
// P = 1041.00
// After 2nd Year -->
// P = 1083.86
// After 3rd Year -->
// P = 1128.30

function calculateYears(principal, interest, tax, desired) {
  var years = 0;
  while (principal < desired) {
    principal += principal * interest * (1 - tax);
    console.log("p*i: ", principal * interest);
    console.log("1-t: ", 1 - tax);
    console.log("p*i*(1-t): ", principal * interest * (1 - tax));
    console.log("p: ", principal);
    years++;
  }
  return years;
}

console.log(calculateYears(1000, 0.05, 0.18, 1100)); //return 3
// console.log(calculateYears(1000, 0.01625, 0.18, 1200)); //return 14
50;
0.82;
