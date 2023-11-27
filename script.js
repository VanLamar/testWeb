document.addEventListener("DOMContentLoaded", function() {
    var currentIndex = 0;
    var slides = document.querySelectorAll('.carousel-image');
    var totalSlides = slides.length;

    // Function to show the current slide
    function showSlide(index) {
        slides.forEach((slide, i) => {
            slide.classList.remove('active');
            if (i === index) {
                slide.classList.add('active');
            }
        });
    }

    // Initial display
    showSlide(currentIndex);

    // Function to move to the next slide
    function moveToNextSlide() {
        currentIndex = (currentIndex + 1) % totalSlides;
        showSlide(currentIndex);
    }

    // Automatically move to the next slide every 20 seconds
    setInterval(moveToNextSlide, 20000);

    // Navigation function
    window.moveSlide = function(direction) {
        currentIndex += direction;
        if (currentIndex >= totalSlides) {
            currentIndex = 0;
        } else if (currentIndex < 0) {
            currentIndex = totalSlides - 1;
        }
        showSlide(currentIndex);
    };
});
