var soup = prompt("type in a kind of soup");
// alert(soup);
console.log('soup:', soup);
var firstLetter = soup.charAt(0);
console.log("firstLetter:", firstLetter)

var lastLetter = function(arg) {
  return arg.charAt(arg.length - 1);
}
console.log("lastLetter:", lastLetter(soup));

