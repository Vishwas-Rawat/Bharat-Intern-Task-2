function convertTemperature() {
    const temperature = parseFloat(document.getElementById("inputTemperature").value);
    const unit = document.getElementById("unit").value;
    let result;

    if (unit === "celsius") {
        result = (temperature * 9/5) + 32;
        document.getElementById("result").textContent = temperature + "°C is " + result + "°F";
    } else {
        result = (temperature - 32) * 5/9;
        document.getElementById("result").textContent = temperature + "°F is " + result + "°C";
    }
}