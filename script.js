// Script untuk form RSVP
document.getElementById('rsvpForm').addEventListener('submit',async  function(e) {
  e.preventDefault();

  const name = document.getElementById('name').value;
  const email = document.getElementById('email').value;
  const attendance = document.getElementById('attendance').value;

  if (attendance === '') {
    alert('Silakan pilih apakah Anda akan hadir atau tidak.');
    return;
  }

const data = {
    nama: name,
    email: email,
    kehadiran: attendance
  };

  try {

await fetch('https://script.google.com/macros/s/AKfycbwkyTfToCydxOn2q9xw3CNFOSGzbbADM4rvdHUUX_D3tZRqt0zMLkriyqY07uJM6sv3/exec', {
  method: 'POST',
  mode: 'no-cors',
  headers: {
    'Content-Type': 'application/json'
  },
  body: JSON.stringify(data)
});

  } catch (error) {

    alert('Terjadi kesalahan.');
    console.log(error);

  }

  // Tampilkan pesan sukses
  alert(`Terima kasih, ${name}! Konfirmasi kehadiran Anda telah diterima.`);
  this.reset();
});

// Animasi saat scroll
const observerOptions = {
  threshold: 0.1
};

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.style.opacity = 1;
      entry.target.style.transform = 'translateY(0)';
    }
  });
}, observerOptions);

// Amati elemen dengan kelas tertentu
document.querySelectorAll('.event-details, .rsvp, .couple').forEach(el => {
  el.style.opacity = 0;
  el.style.transform = 'translateY(20px)';
  el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
  observer.observe(el);
});