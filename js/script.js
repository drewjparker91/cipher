$(document).ready(function() {
  function firstLetter(anonSent) {
    return anonSent.charAt(0).toUpperCase();
  }
  function lastLetter(anonSent) {
    return anonSent.charAt(str.length-1).toUpperCase();
  }

  const anonSent = prompt("Enter a sentence.");
  const firstL = firstLetter(anonSent);
  const lastL = lastLetter(anonSent);

  anonSent.charAt(0).toUpperCase();
  anonSent.slice(1);
  anonSent.charAt(-1).toUpperCase();
    


  alert(firstL);
});