var cities = ["Peshawar", "Lahore", "Karachi"];

function showCities   () {
  var div = document.getElementById("one");
  var newCity = document.getElementById("text");
  for (i = 0; i < cities.length; i++) {
    var city = cities[i];
    div.innerHTML += `<li>${city}</li>`;
  }
  newCity.value = "";
}

function cityToAdd() {
  var newCity = document.getElementById("text").value;
  var div = document.getElementById("one");
  cities.push(newCity);
  div.textContent = "";
  showCities();
}
