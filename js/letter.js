const openLetter = document.getElementById("openLetter");
const readBtn = document.getElementById("readBtn");
const hintText = document.getElementById("hintText");

const modalBackdrop = document.getElementById("modalBackdrop");
const closeModalBtn = document.getElementById("closeModalBtn");
const letterText = document.getElementById("letterText");

let opening = false;
let letterOpened = false;

const MESSAGE = `
สุขสันต์วันวาเลนไทน์นะครับพี่หมีตัวโตของเค้า ก่อนที่หมีเดินเข้ามา เค้าเกลียดวันนี้มากๆเลย เห็นดอกไม้แต่ไม่รู้จะซื้อให้ใคร🌹 แต่ตอนนี้รอคอยทุกปีเลย ที่จะมีโมเม้นท์ดีๆกับเธอ  ขอบคุณที่เกิดมาให้ได้รัก ได้ดูแลนะครับ ผมสัญญาว่าจะคอยดูแลพี่หมี จะรักหมี จนลมหายใจสุดท้ายเลย 🐻❤️🐻‍❄️

`;

// 📨 คลิกที่ซองจดหมาย
openLetter.addEventListener("click", () => {

  // ถ้าเปิดแล้ว → คลิกเพื่ออ่านจดหมาย
  if (letterOpened) {
    openModal();
    return;
  }

  if (opening) return;
  opening = true;

  // ซ่อนคำแนะนำ
  hintText.style.display = "none";

  // ปรับปุ่ม
  readBtn.textContent = "กำลังเปิดจดหมาย...";

  // letter2
  openLetter.classList.remove("letter-closed");
  openLetter.src = "assets/letter2.png";

  // ไป letter3
  setTimeout(() => {
    openLetter.src = "assets/letter3.png";
    letterOpened = true;
    opening = false;

    readBtn.textContent = "อ่านจดหมาย";
  }, 600);
});

// ปุ่มอ่านจดหมาย
readBtn.addEventListener("click", () => {
  if (!letterOpened) return;
  openModal();
});

// เปิด modal
function openModal(){
  letterText.textContent = MESSAGE.trim();
  modalBackdrop.style.display = "flex";
}

// ปิด modal
closeModalBtn.addEventListener("click", () => {
  modalBackdrop.style.display = "none";
});

modalBackdrop.addEventListener("click", (e) => {
  if (e.target === modalBackdrop) {
    modalBackdrop.style.display = "none";
  }
});
