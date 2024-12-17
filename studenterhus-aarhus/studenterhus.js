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


// ------------------------------------------



// Select slider elements
const sliderImages = document.querySelector('.slider-images');
const slides = document.querySelectorAll('.slide');
const prevButton = document.querySelector('.prev-btn');
const nextButton = document.querySelector('.next-btn');

let currentIndex = 0; 
const totalSlides = slides.length;

// Function to update the slider's position
function updateSlider() {
    sliderImages.style.transform = `translateX(-${currentIndex * 100}%)`;
}

// Event listener for the next button
nextButton.addEventListener('click', () => {
    if (currentIndex < totalSlides - 1) {
        currentIndex++; // Move to the next slide
    } else {
        currentIndex = 0; // Loop back to the first slide
    }
    updateSlider();
});

// Event listener for the previous button
prevButton.addEventListener('click', () => {
    if (currentIndex > 0) {
        currentIndex--; // Move to the previous slide
    } else {
        currentIndex = totalSlides - 1; // Loop back to the last slide
    }
    updateSlider();
});

// Auto-slide every 5 seconds
setInterval(() => {
    nextButton.click(); // Trigger the next button
}, 5000); // Change 5000 to the desired interval in milliseconds


// -------------------------------------------------


document.addEventListener('DOMContentLoaded', function() {
    // Select the Next Button
    const nextButton = document.querySelector('.event-next-btn');
    // Select the event pages
    const eventPage1 = document.getElementById('event-page1');
    const eventPage2 = document.getElementById('event-page2');
    // Select the dots
    const dots = document.querySelectorAll('.dot');
    let currentPage = 1;

    // Function to show the next event page
    function showNextPage() {
        if (currentPage === 1) {
            // Hide page 1 and show page 2
            eventPage1.style.display = 'none';
            eventPage2.style.display = 'block';
            currentPage = 2;

            // Update active dot
            dots[0].classList.remove('active');
            dots[1].classList.add('active');
        } else {
            // Hide page 2 and show page 1
            eventPage2.style.display = 'none';
            eventPage1.style.display = 'block';
            currentPage = 1;

            // Update active dot
            dots[1].classList.remove('active');
            dots[0].classList.add('active');
        }
    }

    // Add event listener to the "Next" button to show the next page
    nextButton.addEventListener('click', showNextPage);
});



// ----------------------------------------


// Preloaded Reviews
const reviews = [
    {
      name: "Amanda",
      review: "I really like the community and how you get to meet new people. It's nice to know there's nearly always a new event every day catered to students.",
      rating: 4,
    },
    {
      name: "Klara",
      review: "A good place to socialize with many different people you wouldn't typically meet! ",
      rating: 5,
    },
  ];
  
  // Function to Render Reviews
  function renderReviews() {
    const reviewList = document.getElementById("review-list");
    reviewList.innerHTML = ""; // Clear existing reviews
  
    reviews.forEach((review) => {
      const reviewItem = document.createElement("div");
      reviewItem.classList.add("review-item");
  
      reviewItem.innerHTML = `
        <h4>${review.name}</h4>
        <p>${review.review}</p>
        <div class="rating">${"⭐".repeat(review.rating)}</div>
      `;
      reviewList.appendChild(reviewItem);
    });
  }
  
  // Handle Form Submission
  document.getElementById("reviewForm").addEventListener("submit", function (e) {
    e.preventDefault();
  
    const name = document.getElementById("name").value;
    const reviewText = document.getElementById("reviewText").value;
    const rating = parseInt(document.getElementById("rating").value);
  
    // Add new review to the reviews array
    reviews.push({ name, review: reviewText, rating });
  
    // Reset the form
    document.getElementById("reviewForm").reset();
  
    // Re-render reviews
    renderReviews();
  });
  
  // Initial Rendering
  renderReviews();


//   ----------------------------------------



  
