
// email input 
const submit = document.getElementById("submit");
const email = document.getElementById("email")
const error = document.getElementById("error")
submit.addEventListener("click", () =>{
    const emailInput = email.value;
  
     // Simple email validation using regex
     const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    
     if (emailRegex.test(emailInput)) {
        // If email is valid
        error.style.display = "none"; // Hide error message
       email.style.border = ""
       email.style.color = ""
    } else {
        // If email is invalid
        error.style.display = "flex"; 
        email.style.border = "1px solid hsl(12, 88%, 59%)";
        email.style.color = "hsl(12, 88%, 59%)";
    }
})

// menu mobile 
const burger = document.getElementById("menu")
const close = document.getElementById("close")
const display = document.getElementById("display")


burger.addEventListener("click", ()=>{
    document.body.style.overflow = "hidden"
    close.style.display = "block";
    burger.style.display = "none"
    display.style.display = "flex";
});
close.addEventListener("click", ()=>{
    document.body.style.overflow = "";
    close.style.display = "";
    burger.style.display = ""
    display.style.display = "";
});

// slider and bullet 
let currentIndex = 0;
const slidesToShow = 3;
const totalSlides = 4;

const carouselWrapper = document.querySelector(".comment-row");
const bullets = document.querySelectorAll(".bullet");

function updateCarousel() {
    // Check the screen width and adjust offset accordingly
    const screenWidth = window.innerWidth;
    const offset = screenWidth <= 500 
        ? -(320 / slidesToShow) * currentIndex  // When max screen width is 500px
        : -(105 / slidesToShow) * currentIndex; // Default offset for larger screens

    carouselWrapper.style.transform = `translateX(${offset}%)`;

    // Update the active bullet
    bullets.forEach((bullet, index) => {
        bullet.classList.toggle('active', index === currentIndex);
    });
}

// Event listener for bullets
bullets.forEach((bullet, index) => {
    bullet.addEventListener('click', () => {
        currentIndex = index;
        updateCarousel();
    });
});

// Initial setup
updateCarousel();

// Update carousel when the window is resized
window.addEventListener('resize', updateCarousel);
