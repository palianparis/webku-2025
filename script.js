const steps = document.querySelectorAll(".form-step");
const nextBtns = document.querySelectorAll(".next-btn");
const prevBtns = document.querySelectorAll(".prev-btn");
let currentStep = 0;

// Tombol "Selanjutnya"
nextBtns.forEach((btn) => {
  btn.addEventListener("click", () => {
    if (currentStep < steps.length - 1) {
      steps[currentStep].classList.remove("active");
      currentStep++;
      steps[currentStep].classList.add("active");
    }
  });
});

// Tombol "Kembali"
prevBtns.forEach((btn) => {
  btn.addEventListener("click", () => {
    if (currentStep > 0) {
      steps[currentStep].classList.remove("active");
      currentStep--;
      steps[currentStep].classList.add("active");
    }
  });
});

// Tombol "Kirim" / Submit
document.getElementById("multiStepForm").addEventListener("submit", function (e) {
  e.preventDefault();

  // Ambil data dari input
  const nama = document.getElementById("nama").value;
  const telepon = document.getElementById("telepon").value;
  const email = document.getElementById("email").value;
  const lahir = document.getElementById("lahir").value;
  const ibu = document.getElementById("ibu").value;
  const gender = document.getElementById("gender").value;

  // Nomor tujuan WhatsApp (ganti dengan punyamu!)
  const nomorWa = "082372456892"; // tanpa tanda + dan 0 di depan

  // Format pesan WhatsApp
  const pesan = `Halo Admin! Saya ingin mendaftar. Berikut data saya:

👤 Nama: ${nama}
📱 No HP: ${telepon}
📧 Email: ${email}
🎂 Tanggal Lahir: ${lahir}
👩 Nama Ibu Kandung: ${ibu}
⚧️ Jenis Kelamin: ${gender}`;

  // Buka WhatsApp
  const urlWa = `https://wa.me/${082372456892}?text=${encodeURIComponent(pesan)}`;
  window.open(urlWa, "_blank");
});
