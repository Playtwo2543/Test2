function calculateBMI() {
    let height = parseFloat(document.getElementById('height').value);
    let weight = parseFloat(document.getElementById('weight').value);

    // ตรวจข้อมูลครบไหม
    if (!weight && !height) {
        document.getElementById('bmiResult').textContent = "กรุณากรอกน้ำหนักและส่วนสูง";
        return;
    } else if (!weight) {
        document.getElementById('bmiResult').textContent = "กรุณากรอกน้ำหนัก";
        return;
    } else if (!height) {
        document.getElementById('bmiResult').textContent = "กรุณากรอกส่วนสูง";
        return;
    }

    // ตรวจสอบค่าที่กรอกว่ามีค่าเป็นบวกหรือไม่
    if (weight <= 0) {
        document.getElementById('bmiResult').textContent = "ไม่มีใครบนโลกน้ำหนักติดลบนะครับ";
        return;
    }

    if (height <= 0) {
        document.getElementById('bmiResult').textContent = "คนจากโลกไหนครับที่ส่วนสูงติดลบ";
        return;
    }

    // คำนวณ BMI
    height = height / 100; // แปลง Cm เป็น M
    let bmi = weight / (height * height);

    // กำหนดหมวดหมู่ BMI
    let category = '';
    if (bmi < 18.5) {
        category = 'ผอมเกิน';
    } else if (bmi >= 18.5 && bmi < 24.9) {
        category = 'ปกติดี';
    } else if (bmi >= 25 && bmi < 29.9) {
        category = 'น้ำหนักเกิน';
    } else {
        category = 'อ้วนแล้ว';
    }

    // แสดงผลลัพธ์
    document.getElementById('bmiResult').innerHTML = 
        `ดัชนีมวลกายของคุณคือ... ${bmi.toFixed(2)}<br>เราคิดว่าคุณ${category}นะครับ`;
}

