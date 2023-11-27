document.addEventListener("DOMContentLoaded", function() {
    var featuredDishImg = document.getElementById('featured-dish');
    
    // Устанавливаем начальный масштаб как 100% (scale(1))
    featuredDishImg.style.transform = 'translate(-50%, -50%) scale(1)';
    
    // Задаем анимацию увеличения масштаба до 130% (scale(1.3))
    setTimeout(function() {
        featuredDishImg.style.transition = 'transform 10s ease-in-out';
        featuredDishImg.style.transform = 'translate(-50%, -50%) scale(1.3)';
    }, 20); // Можно увеличить время задержки, если необходимо
});
