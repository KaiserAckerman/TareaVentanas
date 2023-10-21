function initializeSlider(sliderId) {
    let currentImageIndex = 0;
    const slider = document.getElementById(sliderId);
    const sliderImages = slider.querySelectorAll('.slider-image');
    const imageCount = sliderImages.length;
    const imageWidth = sliderImages[0].offsetWidth;

    function nextImage() {
        currentImageIndex = (currentImageIndex + 1) % imageCount;
        updateSlider();
    }

    function updateSlider() {
        const offset = -currentImageIndex * imageWidth;
        slider.style.transform = `translateX(${offset}px)`;
    }

    // Cambiar automáticamente las imágenes cada 3 segundos
    setInterval(nextImage, 2000);
}

initializeSlider('slider1');
initializeSlider('slider2');
initializeSlider('slider3');