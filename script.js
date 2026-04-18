const images = document.querySelectorAll(".gallery-item img");
const lightbox = document.getElementById("lightbox");
const lightboxImg = document.getElementById("lightbox-img");

images.forEach(img => {
    img.addEventListener("click", () => {
        lightbox.style.display = "flex";
        lightboxImg.src = img.src;
    });
});

lightbox.addEventListener("click", () => {
    lightbox.style.display = "none";
});
/* NOMBRE */
#header h1 {
    font-family: 'Cinzel', serif;
    text-transform: uppercase;
    letter-spacing: 4px;
    font-size: 28px;
}

/* MENÚ */
#header-menu a {
    font-family: 'Cinzel', serif;
    text-transform: uppercase;
    letter-spacing: 3px;
    font-size: 12px;
}
