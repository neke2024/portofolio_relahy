// JS pur
const img = document.querySelector('.right_section img');
const relahy = document.querySelector('.Relahy');

img.addEventListener('mouseover', () => {
    relahy.style.color = 'green';
});

img.addEventListener('mouseout', () => {
    relahy.style.color = '';
});
window.onscroll = function () { scrollNavbar() };

function scrollNavbar() {
    let navbar = document.querySelector('.navbar');
    if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
}
document.addEventListener('DOMContentLoaded', function () {
    const menuToggle = document.querySelector('.menu-toggle');
    const navLinks = document.querySelector('.nav_links');

    // Toggle menu on click
    menuToggle.addEventListener('click', function () {
        navLinks.classList.toggle('active');
    });

    // Close menu when clicking a link
    const navItems = document.querySelectorAll('.nav_links a');
    navItems.forEach(item => {
        item.addEventListener('click', function () {
            navLinks.classList.remove('active');
        });
    });

    // Add shadow to navbar on scroll
    window.addEventListener('scroll', function () {
        const navbar = document.querySelector('.navbar');
        if (window.scrollY > 50) {
            navbar.style.boxShadow = '0 2px 10px rgba(0,0,0,0.5)';
        } else {
            navbar.style.boxShadow = '0 2px 5px rgba(0,0,0,0.3)';
        }
    });
});

document.addEventListener('DOMContentLoaded', function () {
    const contactForm = document.getElementById('contactForm');

    if (contactForm) {
        contactForm.addEventListener('submit', function (event) {
            event.preventDefault();

            // Récupération des valeurs du formulaire
            const name = document.getElementById('name').value;
            const email = document.getElementById('email').value;
            const subject = document.getElementById('subject').value;
            const message = document.getElementById('message').value


            alert(`Message reçu ! \nNom: ${name} \nEmail: ${email} \nSujet: ${subject} \nMessage: ${message}`);


            contactForm.reset();
        });
    }
});