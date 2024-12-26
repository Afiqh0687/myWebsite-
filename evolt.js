// Slideshow functionality
let slideIndex = 0;
const slides = document.querySelectorAll(".slide");

function showSlides() {
    slides.forEach((slide, index) => {
        slide.style.display = index === slideIndex ? "block" : "none";
    });
    slideIndex = (slideIndex + 1) % slides.length;
}

// Progress Bar functionality
document.addEventListener("DOMContentLoaded", function () {
    const progressBar = document.getElementById("progress-bar");
    const increaseButton = document.getElementById("increase-progress");
    const resetButton = document.getElementById("reset-progress");
    const popup = document.getElementById("popup");
    let progress = 0;
    let interval = null;

    function startProgress() {
        if (!interval) {
            interval = setInterval(() => {
                if (progress < 100) {
                    progress += 1;
                    progressBar.style.width = progress + "%";
                } else {
                    clearInterval(interval);
                    interval = null;
                    popup.classList.remove("hidden");
                }
            }, 100); // Adjust interval for progress speed
        }
    }

    increaseButton.addEventListener("click", function () {
        startProgress();
    });

    resetButton.addEventListener("click", function () {
        progress = 0;
        progressBar.style.width = progress + "%";
        popup.classList.add("hidden");
        clearInterval(interval);
        interval = null; // Allow progress to restart
    });

    // Initialize the slideshow after DOM is ready
    setInterval(showSlides, 3000); // Smooth transitions
    showSlides();
});

// Collapsible sections functionality
document.querySelectorAll(".collapsible").forEach(button => {
    button.addEventListener("click", function () {
        const content = this.nextElementSibling;
        if (content.style.display === "block") {
            content.style.display = "none";
        } else {
            content.style.display = "block";
        }
    });
});
