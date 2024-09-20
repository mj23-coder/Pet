function toggleMenu() {
    const navList = document.querySelector('.nav-list');
    navList.classList.toggle('show');
}

// Close the menu when a navigation link is clicked
document.querySelectorAll('.nav-list li a').forEach(link => {
    link.addEventListener('click', () => {
        const navList = document.querySelector('.nav-list');
        if (navList.classList.contains('show')) {
            navList.classList.remove('show'); // Hide the menu after clicking a link
        }
    });
});

// Close the menu if clicking outside of it or on content
document.addEventListener('click', (event) => {
    const navList = document.querySelector('.nav-list');
    const hamburger = document.querySelector('.hamburger');

    if (!hamburger.contains(event.target) && !navList.contains(event.target)) {
        navList.classList.remove('show'); // Hide the menu
    }
});