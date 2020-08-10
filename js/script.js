$(document).ready(function() {
  function firstLetter(anonSent) {
    return anonSent.charAt(0).toUpperCase();
  }
  function lastLetter(anonSent) {
    return anonSent.charAt(anonSent.length-1).toUpperCase();
  }
  function reverseFL(firstL,lastL) {
    return lastL + firstL;
  }
  function numberL(anonSent) {
    let a = parseInt(anonSent.length).toFixed;
    return a / 2;
  }

  const anonSent = prompt("Enter a sentence.");
  const firstL = firstLetter(anonSent);
  const lastL = lastLetter(anonSent);
  const rFL = reverseFL(firstL,lastL);
  const numL = numberL(anonSent);
  const midL = anonSent.charAt(numL);
  
  alert(midL + anonSent + rFL);

});



anonSent.charAt(0).toUpperCase();
  anonSent.slice(1);
  anonSent.charAt(-1).toUpperCase();

  alert(lastL);

  function middle(anonSent) {
    return anonSent.slice(1);
  }

  