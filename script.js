// Import the hamburger icon + navigation links
document.addEventListener('DOMContentLoaded', () => {
    const hamburger = document.getElementById('hamburger');
    const navLinks = document.getElementById('nav-links');

// Adding event listener to hamburger icon
    hamburger.addEventListener('click',() => {
        // Toggle the display the nav links
        navLinks.classList.toggle('active');
    });
});

// Typewriter effect
document.addEventListener("DOMContentLoaded", () => {
    const text = "AARHUSH"; 
    const typewriter = document.getElementById("typewriter");
    let index = 1; // Start after A
    let isDeleting = false; 
    const typingSpeed = 300; // Speed (ms)
    const deletingSpeed = 300; 
    const pauseTime = 1000; 

    function typeEffect() {
        // Always keep the first letter ("A") constant
        const constantLetter = text.charAt(0);
        const dynamicText = text.substring(1, index);

        if (isDeleting) {
            // Delete one character at a time
            typewriter.textContent = constantLetter + text.substring(1, index--);
        } else {
            // Type one character at a time
            typewriter.textContent = constantLetter + dynamicText;
            index++;
        }

        // Check if the word is fully typed
        if (index > text.length && !isDeleting) {
            setTimeout(() => {
                isDeleting = true; // Start deleting
            }, pauseTime);
        }

        // Check if the word is fully deleted (but keep the "A")
        if (index === 1 && isDeleting) {
            isDeleting = false; // Start typing again
        }

        // Call the function recursively with appropriate speed
        const speed = isDeleting ? deletingSpeed : typingSpeed;
        setTimeout(typeEffect, speed);
    }

    // Start the typewriting effect
    typeEffect();
});


