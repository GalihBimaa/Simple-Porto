document.addEventListener("DOMContentLoaded", () => {
    // 1. Mengatur Indikator Menu Navigasi Aktif
    const currentLocation = location.href;
    const menuItems = document.querySelectorAll('nav ul li a');
    
    menuItems.forEach(item => {
        // Hapus garis miring atau query param untuk komparasi yang akurat
        if (item.href === currentLocation || currentLocation.includes(item.getAttribute('href'))) {
            item.classList.add("active");
        }
    });

    // 2. Animasi Fade-In saat elemen di-scroll (Intersection Observer)
    const observerOptions = {
        threshold: 0.1,
        rootMargin: "0px 0px -50px 0px"
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                observer.unobserve(entry.target); // Hanya animasi 1 kali
            }
        });
    }, observerOptions);

    const fadeElements = document.querySelectorAll('.fade-in');
    fadeElements.forEach(el => {
        observer.observe(el);
    });
});