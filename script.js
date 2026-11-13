// --- NAVBAR & MOBILE MENU SCROLL ---
const header = document.getElementById('navbar');
const mobileMenuBtn = document.getElementById('mobile-menu-btn');
const closeMenuBtn = document.getElementById('close-menu-btn');
const mobileMenu = document.getElementById('mobile-menu');
const mobileLinks = document.querySelectorAll('.mobile-link');

window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
        header.classList.add('scrolled');
    } else {
        header.classList.remove('scrolled');
    }
});

mobileMenuBtn.addEventListener('click', () => {
    mobileMenu.classList.add('active');
});

closeMenuBtn.addEventListener('click', () => {
    mobileMenu.classList.remove('active');
});

mobileLinks.forEach(link => {
    link.addEventListener('click', () => {
        mobileMenu.classList.remove('active');
    });
});

// --- FILTER PORTOFOLIO ---
const filterBtns = document.querySelectorAll('.filter-btn');
const portfolioCards = document.querySelectorAll('.portfolio-card');

filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
        // Hapus class active dari semua tombol
        filterBtns.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');

        const filterValue = btn.getAttribute('data-filter');

        portfolioCards.forEach(card => {
            if (filterValue === 'Semua' || card.getAttribute('data-category') === filterValue) {
                card.style.display = 'block';
            } else {
                card.style.display = 'none';
            }
        });
    });
});

// --- PRE-SELECT PAKET VIA TOMBOL ---
const packageBtns = document.querySelectorAll('.pkg-btn');
const serviceSelect = document.getElementById('selected-service');

packageBtns.forEach(btn => {
    btn.addEventListener('click', () => {
        const paketName = btn.getAttribute('data-paket');
        if (serviceSelect) {
            serviceSelect.value = paketName;
        }
    });
});

// --- KALKULATOR HARGA ---
let crewCount = 2;
const crewVal = document.getElementById('crew-val');
const durationVal = document.getElementById('duration-val');
const priceDisplay = document.getElementById('total-price-display');

function changeCrew(amount) {
    crewCount = Math.max(1, Math.min(6, crewCount + amount));
    if(crewVal) crewVal.innerText = crewCount;
    calculatePrice();
}

function calculatePrice() {
    const typeEl = document.getElementById('calc-type');
    const durEl = document.getElementById('calc-duration');
    const droneEl = document.getElementById('add-drone');
    const expressEl = document.getElementById('add-express');

    if(!typeEl || !durEl) return;

    const projectBase = parseInt(typeEl.value) || 0;
    const durationHours = parseInt(durEl.value) || 0;
    const droneAddon = (droneEl && droneEl.checked) ? 3500000 : 0;
    const expressAddon = (expressEl && expressEl.checked) ? 2000000 : 0;

    if(durationVal) durationVal.innerText = durationHours + ' Jam';

    const durationFactor = durationHours / 8; // base 8 hours
    const crewCost = (crewCount - 1) * 1500000; 
    
    const total = Math.round((projectBase * durationFactor) + crewCost + droneAddon + expressAddon);
    
    const formatter = new Intl.NumberFormat('id-ID', {
        style: 'currency',
        currency: 'IDR',
        minimumFractionDigits: 0
    });

    if(priceDisplay) priceDisplay.innerText = formatter.format(total).replace('IDR', 'Rp');
}

// Inisialisasi Kalkulator
document.addEventListener('DOMContentLoaded', calculatePrice);

function lockQuoteAndRedirect() {
    const typeEl = document.getElementById('calc-type');
    const projectType = typeEl.options[typeEl.selectedIndex].text;
    const details = `Simulasi: ${projectType} selama ${durationVal.innerText} dengan tim sejumlah ${crewCount} orang.`;
    
    serviceSelect.value = "Kustom / Konsultasi";
    
    const formTextarea = document.getElementById('project-description');
    if(formTextarea) {
        formTextarea.value = `Saya mengunci estimasi harga kalkulator Lumensky berikut: [${details}]. Mari diskusikan detailnya!`;
    }
    
    document.getElementById('kontak').scrollIntoView({ behavior: 'smooth' });
}

// --- SUBMIT FORM (Mailto) ---
const leadForm = document.getElementById('lead-form');
if (leadForm) {
    leadForm.addEventListener('submit', function(event) {
        event.preventDefault();

        const name = document.getElementById('customer-name').value;
        const phone = document.getElementById('customer-phone').value;
        const email = document.getElementById('customer-email').value;
        const service = document.getElementById('selected-service').value;
        const date = document.getElementById('project-date').value || '-';
        const description = document.getElementById('project-description').value || '-';

        const message =
            `Halo Lumensky Studio, saya ingin memesan layanan.

            Nama: ${name}
            Nomor WhatsApp: ${phone}
            Email: ${email}
            Paket: ${service}
            Tanggal proyek/acara: ${date}
            Deskripsi: ${description}`;

        // Ganti dengan nomor WhatsApp tujuan (format 62, tanpa + dan tanpa 0 di depan)
        const waNumber = '62895618448881';
        
        const waUrl = `https://wa.me/${waNumber}?text=${encodeURIComponent(message)}`;
        window.open(waUrl, '_blank');

        leadForm.reset();
    });
}

// --- SCROLL ANIMATION (Intersection Observer) ---
const animElements = document.querySelectorAll('.scroll-anim');
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            observer.unobserve(entry.target);
        }
    });
}, { threshold: 0.1 });

animElements.forEach(el => observer.observe(el));