document.addEventListener("DOMContentLoaded", () => {

    const images = document.querySelectorAll(".gallery-item img");
    const lightbox = document.getElementById("lightbox");
    const lightboxImg = document.getElementById("lightbox-img");
    const caption = document.getElementById("lightbox-caption");
    const closeBtn = document.getElementById("close-btn");

    let currentIndex = 0;

    function showImage() {
        const img = images[currentIndex];
        lightboxImg.src = img.src;
        caption.textContent = img.getAttribute("data-title") || "";
    }

    images.forEach((img, index) => {
        img.addEventListener("click", () => {
            currentIndex = index;
            showImage();
            lightbox.style.display = "flex";
        });
    });

    // 👉 BOTÓN X (arreglado)
    closeBtn.onclick = function (e) {
        e.stopPropagation();
        lightbox.style.display = "none";
    };

    // 👉 CLICK EN FONDO (NO en imagen ni en X)
    lightbox.addEventListener("click", (e) => {
        if (e.target === lightbox) {
            lightbox.style.display = "none";
        }
    });

    // 👉 TECLADO
    document.addEventListener("keydown", (e) => {
        if (lightbox.style.display === "flex") {
            if (e.key === "ArrowRight") {
                currentIndex = (currentIndex + 1) % images.length;
                showImage();
            }
            if (e.key === "ArrowLeft") {
                currentIndex = (currentIndex - 1 + images.length) % images.length;
                showImage();
            }
            if (e.key === "Escape") {
                lightbox.style.display = "none";
            }
        }
    });

});
