const menuBtn = document.getElementById("menuBtn");
const nav = document.getElementById("mainNav");
menuBtn?.addEventListener("click", () => nav.classList.toggle("open"));
nav?.querySelectorAll("a").forEach(link => link.addEventListener("click", () => nav.classList.remove("open")));
document.getElementById("year").textContent = new Date().getFullYear();

// ضع ملف التطبيق في نفس مجلد الموقع باسم app.apk.
// لو غيرت اسم الملف، غيّر قيمة href في زر التحميل داخل index.html.
