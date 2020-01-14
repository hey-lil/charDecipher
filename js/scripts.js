var soup = prompt("type in a kind of soup");
// alert(soup);
console.log('soup:', soup);
var firstLetter = soup.charAt(0);
console.log("firstLetter:", firstLetter)

var lastLetter = function(arg) {
  return arg.charAt(arg.length - 1);
}
console.log("lastLetter:", lastLetter(soup));

// var newCapString = function(char1, char2) {
//   var newString = char1 + char2;
//   return newString.toUpperCase();
// }
// console.log(newCapString(firstLetter, lastLetter(soup)));

var newStr = function(a,b) {
  return a.toUpperCase() + b.toUpperCase();
}
var reverseStr = function(a,b) {
  return b.toUpperCase() + a.toUpperCase();
}
console.log("newStr:",newStr(firstLetter, lastLetter(soup)));

var capsLastFirst = 