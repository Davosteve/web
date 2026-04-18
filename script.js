const images = document.querySelectorAll(".gallery-item img");
const lightbox = document.getElementById("lightbox");
const lightboxImg = document.getElementById("lightbox-img");
const caption = document.getElementById("lightbox-caption");

let currentIndex = 0;

function openLightbox(index) {
    currentIndex = index;
    updateImage();
    lightbox.style.display = "flex";
}

function updateImage() {
    const img = images[currentIndex];
    lightboxImg.src = img.src;
    caption.textContent = img.getAttribute("data-title") || "";
}

images.forEach((img, index) => {
    img.addEventListener("click", () => openLightbox(index));
});

document.addEventListener("keydown", (e) => {
    if (lightbox.style.display === "flex") {
        if (e.key === "ArrowRight") {
            currentIndex = (currentIndex + 1) % images.length;
            updateImage();
        }
        if (e.key === "ArrowLeft") {
            currentIndex = (currentIndex - 1 + images.length) % images.length;
            updateImage();
        }
        if (e.key === "Escape") {
            lightbox.style.display = "none";
        }
    }
});

lightbox.addEventListener("click", () => {
    lightbox.style.display = "none";
});
