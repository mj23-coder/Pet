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
let activeLink = null; // Start with no active link

// Set marker on hover and click
links.forEach((elem) => {
    elem.addEventListener("mouseenter", (e) => moveUnderline(e.target)); // Hover effect on each link
    elem.addEventListener("click", (e) => setActive(e.target)); // Make underline stay when clicked
    elem.addEventListener("mouseleave", () => {
        // Revert to the underline of the active link on mouse leave
        if (activeLink) moveUnderline(activeLink);
        else hideUnderline(); // If there's no active link (e.g., on homepage), hide the underline
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
    hideUnderline(); // Marker disappears
    activeLink = null; // No active link when clicking the logo
});

// Function to update marker on scroll based on section visibility
function updateMarkerOnScroll() {
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
            setActive(link); // Set active link based on the section in view
        }
    });
}

// Trigger the scroll handler when the page is loaded to set the initial state
window.addEventListener("load", updateMarkerOnScroll);

// Update the marker as the user scrolls
window.addEventListener("scroll", updateMarkerOnScroll);

function highlightDot() {
    // Reset all dots to the default color
    a1.style.background = "#333";
    a2.style.background = "#333";
    a3.style.background = "#333";
    a4.style.background = "#333";
    a5.style.background = "#333";
    a6.style.background = "#333";
    a7.style.background = "#333";
    a8.style.background = "#333";
    a9.style.background = "#333";

    // Change the color of the active dot
    if (i == 0) a1.style.background = "#fff";
    if (i == 1) a2.style.background = "#fff";
    if (i == 2) a3.style.background = "#fff";
    if (i == 3) a4.style.background = "#fff";
    if (i == 4) a5.style.background = "#fff";
    if (i == 5) a6.style.background = "#fff";
    if (i == 6) a7.style.background = "#fff";
    if (i == 7) a8.style.background = "#fff";
    if (i == 8) a9.style.background = "#fff";
}

let i = 0;

let box1 = document.getElementById("image1");
let box2 = document.getElementById("image2");
let box3 = document.getElementById("image3");
let box4 = document.getElementById("image4");
let box5 = document.getElementById("image5");
let box6 = document.getElementById("image6");
let box7 = document.getElementById("image7");
let box8 = document.getElementById("image8");
let box9 = document.getElementById("image9");
let a1 = document.querySelector(".a1");
let a2 = document.querySelector(".a2");
let a3 = document.querySelector(".a3");
let a4 = document.querySelector(".a4");
let a5 = document.querySelector(".a5");
let a6 = document.querySelector(".a6");
let a7 = document.querySelector(".a7");
let a8 = document.querySelector(".a8");
let a9 = document.querySelector(".a9");
let info = document.getElementById("info");

a1.onclick = function () {
    box1.style.opacity = 1;
    box2.style.opacity = 0;
    box3.style.opacity = 0;
    box4.style.opacity = 0;
    box5.style.opacity = 0;
    box6.style.opacity = 0;
    box7.style.opacity = 0;
    box8.style.opacity = 0;
    box9.style.opacity = 0;
    i = 0;
    highlightDot();
}

a2.onclick = function () {
    box1.style.opacity = 0;
    box2.style.opacity = 1;
    box3.style.opacity = 0;
    box4.style.opacity = 0;
    box5.style.opacity = 0;
    box6.style.opacity = 0;
    box7.style.opacity = 0;
    box8.style.opacity = 0;
    box9.style.opacity = 0;
    i = 1;
    highlightDot();
}

a3.onclick = function () {
    box1.style.opacity = 0;
    box2.style.opacity = 0;
    box3.style.opacity = 1;
    box4.style.opacity = 0;
    box5.style.opacity = 0;
    box6.style.opacity = 0;
    box7.style.opacity = 0;
    box8.style.opacity = 0;
    box9.style.opacity = 0;
    i = 2;
    highlightDot();
}

a4.onclick = function () {
    box1.style.opacity = 0;
    box2.style.opacity = 0;
    box3.style.opacity = 0;
    box4.style.opacity = 1;
    box5.style.opacity = 0;
    box6.style.opacity = 0;
    box7.style.opacity = 0;
    box8.style.opacity = 0;
    box9.style.opacity = 0;
    i = 3;
    highlightDot();
}

a5.onclick = function () {
    box1.style.opacity = 0;
    box2.style.opacity = 0;
    box3.style.opacity = 0;
    box4.style.opacity = 0;
    box5.style.opacity = 1;
    box6.style.opacity = 0;
    box7.style.opacity = 0;
    box8.style.opacity = 0;
    box9.style.opacity = 0;
    i = 4;
    highlightDot();
}

a6.onclick = function () {
    box1.style.opacity = 0;
    box2.style.opacity = 0;
    box3.style.opacity = 0;
    box4.style.opacity = 0;
    box5.style.opacity = 0;
    box6.style.opacity = 1;
    box7.style.opacity = 0;
    box8.style.opacity = 0;
    box9.style.opacity = 0;
    i = 5;
    highlightDot();
}

a7.onclick = function () {
    box1.style.opacity = 0;
    box2.style.opacity = 0;
    box3.style.opacity = 0;
    box4.style.opacity = 0;
    box5.style.opacity = 0;
    box6.style.opacity = 0;
    box7.style.opacity = 1;
    box8.style.opacity = 0;
    box9.style.opacity = 0;
    i = 6;
    highlightDot();
}

a8.onclick = function () {
    box1.style.opacity = 0;
    box2.style.opacity = 0;
    box3.style.opacity = 0;
    box4.style.opacity = 0;
    box5.style.opacity = 0;
    box6.style.opacity = 0;
    box7.style.opacity = 0;
    box8.style.opacity = 1;
    box9.style.opacity = 0;
    i = 7;
    highlightDot();
}

a9.onclick = function () {
    box1.style.opacity = 0;
    box2.style.opacity = 0;
    box3.style.opacity = 0;
    box4.style.opacity = 0;
    box5.style.opacity = 0;
    box6.style.opacity = 0;
    box7.style.opacity = 0;
    box8.style.opacity = 0;
    box9.style.opacity = 1;
    i = 8;
    highlightDot();
}

document.addEventListener("keydown", (e) => {
    if (e.keyCode == 37) {
        right();
    }
});

document.addEventListener("keydown", (e) => {
    if (e.keyCode == 39 ) {
        right();
    }
});

function right() {
    // Create an array of all the boxes
    const boxes = [box1, box2, box3, box4, box5, box6, box7, box8, box9];

    // Increment i and reset to 0 if necessary (looping back)
    i = (i + 1) % boxes.length;  // This will loop back to 0 when it reaches the last box

    // Reset all boxes to 0 opacity
    boxes.forEach(box => box.style.opacity = 0);

    // Set the current box to 1 opacity
    boxes[i].style.opacity = 1;

    // Call highlightDot to update the corresponding dot
    highlightDot();
}



function left() {
    // Create an array of all the boxes
    const boxes = [box1, box2, box3, box4, box5, box6, box7, box8, box9];

    // Decrement i and reset to last box if necessary (looping back)
    i = (i - 1 + boxes.length) % boxes.length;  // This will loop back to the last box when it reaches 0

    // Reset all boxes to 0 opacity
    boxes.forEach(box => box.style.opacity = 0);

    // Set the current box to 1 opacity
    boxes[i].style.opacity = 1;

    // Call highlightDot to update the corresponding dot
    highlightDot();
}

