document.addEventListener("DOMContentLoaded", function() {
    const sections = document.querySelectorAll("section");

    const revealSection = () => {
        sections.forEach(section => {
            const sectionTop = section.getBoundingClientRect().top;
            if (sectionTop <= window.innerHeight / 1.3) {
                section.classList.remove("hidden");
            }
        });
    };

    // Initially hide sections
    sections.forEach(section => {
        section.classList.add("hidden");
    });

    // Reveal sections on scroll
    window.addEventListener("scroll", revealSection);
    revealSection(); // Trigger it initially to check visibility on load
});
document.addEventListener("DOMContentLoaded", function() {
    const sections = document.querySelectorAll("section");

    const revealSection = () => {
        sections.forEach(section => {
            const sectionTop = section.getBoundingClientRect().top;
            if (sectionTop <= window.innerHeight / 1.3) {
                section.classList.remove("hidden");
            }
        });
    };

    // Initially hide sections
    sections.forEach(section => {
        section.classList.add("hidden");
    });

    // Reveal sections on scroll
    window.addEventListener("scroll", revealSection);
    revealSection(); // Trigger it initially to check visibility on load

    // Smooth scrolling for resume
    document.querySelector('a[href="#resume"]').addEventListener('click', function(e) {
        e.preventDefault();
        document.querySelector('#resume').scrollIntoView({ behavior: 'smooth' });
    });
});

// Change header background on scroll
window.addEventListener('scroll', function() {
    const header = document.querySelector('header');
    if (window.scrollY > 50) {
        header.classList.add('scrolled');
    } else {
        header.classList.remove('scrolled');
    }
});

