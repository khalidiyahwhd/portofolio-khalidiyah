// Toggle Mobile Menu
const hamburger = document.getElementById('hamburger');
const navLinks = document.getElementById('navLinks');

hamburger.addEventListener('click', () => {
    navLinks.classList.toggle('active');
    
    // Ganti icon jika perlu (opsional)
    const isActive = navLinks.classList.contains('active');
    // Animasi simple
    if(isActive) {
        hamburger.style.transform = "rotate(90deg)";
    } else {
        hamburger.style.transform = "rotate(0deg)";
    }
});

// Smooth Scroll untuk navigasi (biar tidak kaget saat klik link)
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        navLinks.classList.remove('active'); // Tutup menu mobile saat link diklik

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});