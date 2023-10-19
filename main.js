// 1678, 2  => 1700;


function roundToPowerOfTen(num, pow) {
  return Math.round(num / 10 ** pow) * 10 ** pow;
}

console.log(roundToPowerOfTen(1678, 2));
