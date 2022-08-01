var celsius = document.getElementById("celsius");
var fahrenheit = document.getElementById("fahrenheit");

celsius.addEventListener("input", function() {
  if(celsius.value)
    fahrenheit.value = parseInt(celsius.value) * 9/5 + 32;
  else
  fahrenheit.value = "";
});

fahrenheit.addEventListener("input", function() {
  if(fahrenheit)
    celsius.value = (parseInt(fahrenheit.value) - 32) * 5/9;
  else
    fahrenheit.value = "";
});