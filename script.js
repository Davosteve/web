document.addEventListener("DOMContentLoaded", () => {

    const images = document.querySelectorAll(".gallery-item img");
    const lightbox = document.getElementById("lightbox");
    const lightboxImg = document.getElementById("lightbox-img");
    const caption = document.getElementById("lightbox-caption");
    const closeBtn = document.getElementById("close-btn");

    let currentIndex = 0;

    images.forEach((img, index) => {
        img.addEventListener("click", () => {
            currentIndex = index;
            showImage();
            lightbox.style.display = "flex";
        });
    });

    function showImage() {
        const img = images[currentIndex];
        lightboxImg.src = img.src;
        caption.textContent = img.getAttribute("data-title") || "";
    }

    // 🔥 BOTÓN X
    closeBtn.addEventListener("click", (e) => {
        e.stopPropagation(); // evita que cambie de imagen
        lightbox.style.display = "none";
    });

});
