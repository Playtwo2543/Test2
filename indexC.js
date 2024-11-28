function convertYear(offset, label) {
    let thaiYear = parseInt(document.getElementById('thaiYear').value);

    // ตรวจสอบว่ากรอกข้อมูลครบและเป็นตัวเลข
    if (!thaiYear || thaiYear <= 0) {
        document.getElementById('result').textContent = "กรุณากรอกปี ค.ศ. ที่ถูกต้อง";
        return;
    }

    // คำนวณปีตาม offset
    let resultYear = thaiYear - offset;

    // แสดงผลลัพธ์
    document.getElementById('result').textContent = 
        `ปี ${label} ที่ได้คือ ${resultYear}`;
}

function convertToPs() {
    convertYear(-543, "พ.ศ.");
}

function convertToJs() {
    convertYear(638, "จ.ศ.");
}

function convertToMs() {
    convertYear(78, "ม.ศ.");
}

function convertToRs() {
    convertYear(1781, "ร.ศ.");
}