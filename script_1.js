
function myFunction() {
  var person = prompt("Please enter your name", "Votre nom");
  if (person != null) {
    a = document.getElementById("demo").innerHTML =
    "Bonjour " + person ;
    console.log(a);
  }
}