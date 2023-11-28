document.addEventListener("DOMContentLoaded", function() {
    let currentIndex = 0;
    const slides = document.querySelectorAll('.carousel-image');
    const totalSlides = slides.length;

    function showSlide(index) {
        slides.forEach((slide, i) => {
            slide.classList.remove('active');
            if (i === index) {
                slide.classList.add('active');
            }
        });
    }

    // Function to start the animation for the first slide
    function startFirstSlideAnimation() {
        if (slides.length > 0) {
            slides[0].classList.add('active');
        }
    }

    function moveToNextSlide() {
        currentIndex = (currentIndex + 1) % totalSlides;
        showSlide(currentIndex);
    }

    // Start animation for the first slide
    startFirstSlideAnimation();

    // Automatically move to the next slide every 5 seconds
    setInterval(moveToNextSlide, 7000);

    window.moveSlide = function(direction) {
        currentIndex += direction;
        if (currentIndex >= totalSlides) {
            currentIndex = 0;
        } else if (currentIndex < 0) {
            currentIndex = totalSlides - 1;
        }
        showSlide(currentIndex);
    };

    // Function to start the animation for the first slide
    function startFirstSlideAnimation() {
        if (slides.length > 0) {
            slides[0].classList.add('active');
            // Add animations for text
            document.querySelector('.logo-text-top').style.opacity = 1;
            setTimeout(function() {
                document.querySelector('.logo-text-bottom').style.opacity = 1;
            }, 2000); // Adjust time as needed
        }
    }
});
