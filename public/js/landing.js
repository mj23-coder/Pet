        //MENU TAB
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

    // UNDERLINE
const marker = document.querySelector("#marker");
const links = document.querySelectorAll("ul li a");
const sections = document.querySelectorAll("section"); // Your content sections
const logo = document.querySelector(".nav-pic"); // Assuming this is your logo container
let activeLink = links[0]; // Keep track of the active link (default to the first one)

    // Set marker on hover and click
links.forEach((elem) => {
    elem.addEventListener("mouseenter", (e) => moveUnderline(e.target)); // Hover effect on each link
    elem.addEventListener("click", (e) => setActive(e.target)); // Make underline stay when clicked
    elem.addEventListener("mouseleave", () => {
    if (elem !== activeLink) hideUnderline(); // Hide only if not the active link
    });
});

function moveUnderline(elem) {
    marker.style.width = elem.offsetWidth + "px";
    marker.style.left = elem.offsetLeft + "px";
}

function hideUnderline() {
    marker.style.width = "0px"; // Marker disappears when leaving the link
}

function setActive(elem) {
    // Remove active class from all links
    links.forEach((item) => item.classList.remove("active"));

    // Set clicked link as active and move the marker
    elem.classList.add("active");
    activeLink = elem; // Update active link
    moveUnderline(elem); // Keep the underline for the active link
}

// Hide the marker when clicking on the logo
logo.addEventListener("click", () => {
    marker.style.width = "0px"; // Marker disappears
    marker.style.left = "0px";  // Reset position to the left
    activeLink = null; // No active link when clicking the logo
});

// Update marker on scroll based on section visibility
window.addEventListener("scroll", () => {
    let currentSection = '';
    const homeTop = document.querySelector("#home").offsetTop;
    const scrollPos = window.pageYOffset || document.documentElement.scrollTop;

    // Check if the page is scrolled to the home section (top of the page)
    if (scrollPos < homeTop + 50) { // Adding a small threshold for smoothness
        hideUnderline();
        activeLink = null;
        links.forEach((item) => item.classList.remove("active"));
        return; // Exit early to avoid marking any other sections as active
}

sections.forEach((section) => {
    const sectionTop = section.offsetTop - 120; // Adjust this offset based on your navbar height
    const sectionHeight = section.offsetHeight;
    if (scrollPos >= sectionTop && scrollPos < sectionTop + sectionHeight) {
        currentSection = section.getAttribute('id');
    }
});

// Update the marker based on the section in view
links.forEach((link) => {
    if (link.getAttribute('href') === `#${currentSection}`) {
        setActive(link);
    }
    });
});