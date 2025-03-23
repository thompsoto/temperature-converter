const temperature = document.getElementById('temperature');
const fromUnit = document.getElementById('fromUnit');
const toUnit = document.getElementById('toUnit');
const result = document.getElementById('result');

function validateInputFields() {
    let button = document.getElementById('button');

    if (temperature.value !== '' && fromUnit.value !== '' && toUnit.value !== '' && ((fromUnit.value !== toUnit.value))) {
        button.disabled = false;
    } else {
        button.disabled = true;
        result.textContent = '';
    }
}

function convertTemperature() {
    let tempInt = parseFloat(temperature.value);
    let tempConverted;

    if (fromUnit.value === 'Celsius') {
        if (toUnit.value === 'Fahrenheit') {
            tempConverted = (tempInt * 9 / 5) + 32;
        } else {
            tempConverted = tempInt + 273.15;
        }
    } else if (fromUnit.value === 'Fahrenheit') {
        if (toUnit.value === 'Celsius') {
            tempConverted = (tempInt - 32) * 5 / 9;
        } else {
            tempConverted = (tempInt - 32) * 5 / 9 + 273.15;
        }
    } else {
        if (toUnit.value === 'Celsius') {
            tempConverted = tempInt - 273.15;
        } else {
            tempConverted = (tempInt - 273.15) * 9 / 5 + 32;
        }
    }

    result.textContent = `${tempInt.toFixed(2)}º ${fromUnit.value} is ${tempConverted.toFixed(2)}º ${toUnit.value}`
}

temperature.addEventListener('input', validateInputFields);
fromUnit.addEventListener('change', validateInputFields);
toUnit.addEventListener('change', validateInputFields);
button.addEventListener('click', convertTemperature);