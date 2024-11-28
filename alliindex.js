function convertTemperature() {
    const temperature = parseFloat(document.getElementById('temperature').value);
    const unit = document.getElementById('unit').value;
    let result = '';

    if (isNaN(temperature)) {
        result = 'ใส่ข้อมูลก่อนจ้า.';
    } else {
        if (unit === 'c-to-f') {
            result = `${temperature} °C = ${(temperature * 9/5 + 32).toFixed(2)} °F`;
        } else if (unit === 'f-to-c') {
            result = `${temperature} °F = ${((temperature - 32) * 5/9).toFixed(2)} °C`;
        }
    }

    document.getElementById('result').textContent = `ผลคือ: ${result}`;
}