// Write a function printer_error which given a string will output the error rate of the printer as a string representing a rational whose numerator is the number of errors and the denominator the length of the control string. Don't reduce this fraction to a simpler expression.

// The string has a length greater or equal to one and contains only letters from a to z.

// s="aaabbbbhaijjjm"
// error_printer(s) => "0/14"

// s="aaaxbbbbyyhwawiwjjjwwm"
// error_printer(s) => "8/22"

//.match() method searches a string for a match against a regular expression
// function printerError(s) {
//   return s.match(/[^a-m]/g).length + "/" + s.length;
// }

//Greater than/Less than operator can be used for alphabet(unicode order)
//Unicode order = A-Z-a-z
//A > a = false
//Z > A = true
function printerError(s) {
  var count = 0;
  for (var i = 0; i < s.length; i++) {
    if (s[i] > "m") {
      count++;
    }
  }
  return count + "/" + s.length;
}

console.log(printerError("aaaxbbbbyyhwawiwjjjwwm"));
