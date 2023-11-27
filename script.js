document.addEventListener("DOMContentLoaded", function() {
    var currentIndex = 0;
    var slides = document.querySelectorAll('.carousel-image');
    var totalSlides = slides.length;

    window.moveSlide = function(direction) {
        currentIndex += direction;

        // Loop back to the first or last image if the end is reached
        if (currentIndex >= totalSlides) {
            currentIndex = 0;
        } else if (currentIndex < 0) {
            currentIndex = totalSlides - 1;
        }

        var newTransformValue = -currentIndex * 100 + '%';
        document.querySelector('.carousel-images').style.transform = 'translateX(' + newTransformValue + ')';
    };

    // Your existing code for the featured dish image
});
