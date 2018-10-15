var reversed = function(lastLetter, firstLetter) {
  return lastLetter + firstLetter;
};


$(document).ready(function() {
  var inputSentence = prompt("Enter a sentence?");
  var upper = inputSentence.toUpperCase().charAt(0);
  var last = inputSentence.toUpperCase().charAt(inputSentence.length - 1);
  var reversing = reversed(last, upper);
  var unreversing = reversing.split("").reverse().join("");
  var concatening = inputSentence.concat(reversing);
  var counting = parseInt(inputSentence.length/2);
  var replaceCount = inputSentence.charAt(counting);
  var actuallyReplace = replaceCount.concat.charAt(counting);



  alert(actuallyReplace);


});
