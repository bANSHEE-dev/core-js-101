// 'The quick brown fox jumps over the lazy dog' => 'god yzal eht revo spmuj xof nworb kciuq ehT'


function reverseString(str) {
  return str.split(' ').reverse().join(" ");
}

console.log(reverseString('The quick brown fox jumps over the lazy dog'));
