const images = document.querySelectorAll(".gallery-item img");
const lightbox = document.getElementById("lightbox");
const lightboxImg = document.getElementById("lightbox-img");
const caption = document.getElementById("lightbox-caption");

let currentIndex = 0;

// abrir imagen
images.forEach((img, index) => {
    img.addEventListener("click", () => {
        currentIndex = index;
        showImage();
        lightbox.style.display = "flex";
    });
});

// mostrar imagen
function showImage() {
    const img = images[currentIndex];
    lightboxImg.src = img.src;
    caption.textContent = img.dataset.title || "";
}

// click para cerrar
lightbox.addEventListener("click", () => {
    lightbox.style.display = "none";
});

// teclado ← →
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
