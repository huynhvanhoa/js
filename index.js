document.getElementById("demo").innerHTML = "Hello JavaScript";

function myFunction() {
  document.getElementById("demo").innerHTML = "Paragraph changed.";
}
window.alert(5 + 6);

// Create an Array:
const cars = ["Saab", "Volvo", "BMW"];

// Change an element:
cars[0] = "Toyota";

// Add an element:
cars.push("Audi");

// Display the Array:
document.getElementById("demo").innerHTML = cars;
