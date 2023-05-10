function generateMadLib() {
  var noun = document.getElementById("noun").value;
  var adjective = document.getElementById("adjective").value;
  var verb = document.getElementById("verb").value;

  var madLibText = "The " + adjective + " " + noun + " " + verb + " to the store.";

  document.getElementById("madLib").innerHTML = madLibText;
  document.getElementById("madLib").style.display = "block";
}
