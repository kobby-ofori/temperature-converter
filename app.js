var celsiusVal = document.getElementById("celsius");
var kelvinVal = document.getElementById("kelvin");
var fahrenheitVal = document.getElementById("fahrenheit");

function convertTemp(event) {
  const currentVal = +event.target.value;

  switch (event.target.name) {
    case "celsius":
      kelvinVal.value = (currentVal + 273.15).toFixed(2);
      fahrenheitVal.value = (currentVal * 1.8 + 32).toFixed(2);
      break;
    case "kelvin":
      celsiusVal.value = (currentVal - 273.15).toFixed(2); 
      fahrenheitVal.value = ((currentVal - 273.15) * 1.8 + 32).toFixed(2);
      break;
    case "fahrenheit":
      celsiusVal.value = ((currentVal - 32) / 1.8).toFixed(2);
      kelvinVal.value = ((currentVal - 32) / 1.8 + 273.15).toFixed(2);
      break;
    default:
      break;
  }
}
