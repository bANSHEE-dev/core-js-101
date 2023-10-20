// *   12345 => 54321
// *   1111  => 1111
// *   87354 => 45378
// *   34143 => 34143
// *
function reverseInteger(num) {
return num.toString().split("").reverse().join("");
}

console.log(reverseInteger(12345));

// *   12345 => 54321
// *   1111  => 1111
// *   87354 => 45378
// *   34143 => 34143

