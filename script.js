const images = document.querySelectorAll(".gallery-item img");
const lightbox = document.getElementById("lightbox");
const lightboxImg = document.getElementById("lightbox-img");
const caption = document.getElementById("lightbox-caption");

let currentIndex = 0;

// abrir
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

// teclado PC
document.addEventListener("keydown", (e) => {
    if (lightbox.style.display === "flex") {
        if (e.key === "ArrowRight") {
            nextImage();
        }
        if (e.key === "ArrowLeft") {
            prevImage();
        }
        if (e.key === "Escape") {
            lightbox.style.display = "none";
        }
    }
});

// 👉 navegación con click (sirve en celular)
lightbox.addEventListener("click", (e) => {
    const x = e.clientX;

    if (x > window.innerWidth / 2) {
        nextImage(); // derecha
    } else {
        prevImage(); // izquierda
    }
});

function nextImage() {
    currentIndex = (currentIndex + 1) % images.length;
    showImage();
}

function prevImage() {
    currentIndex = (currentIndex - 1 + images.length) % images.length;
    showImage();
}
