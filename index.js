function convertYear(offset, label) {
    let thaiYear = parseInt(document.getElementById('thaiYear').value);

    // ตรวจสอบว่ากรอกข้อมูลครบและเป็นตัวเลข
    if (!thaiYear || thaiYear <= 0) {
        document.getElementById('result').textContent = "กรุณากรอกปี พ.ศ. ที่ถูกต้อง";
        return;
    }

    // คำนวณปีตาม offset
    let resultYear = thaiYear - offset;

    // แสดงผลลัพธ์
    document.getElementById('result').textContent = 
        `ปี ${label} ที่ได้คือ ${resultYear}`;
}

function convertToChs() {
    convertYear(543, "ค.ศ.");
}

function convertToJs() {
    convertYear(1181, "จ.ศ.");
}

function convertToMs() {
    convertYear(621, "ม.ศ.");
}

function convertToRs() {
    convertYear(2324, "ร.ศ.");
}