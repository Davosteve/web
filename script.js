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
function showSection(id){
  document.querySelectorAll('.section').forEach(sec=>{
    sec.classList.remove('active');
  });
  document.getElementById(id).classList.add('active');
}

// LIGHTBOX SIMPLE
const imgs = document.querySelectorAll('.gallery img');
const lightbox = document.getElementById('lightbox');
const lightImg = document.getElementById('lightbox-img');
const closeBtn = document.getElementById('close-btn');

imgs.forEach(img=>{
  img.addEventListener('click',()=>{
    lightbox.style.display='flex';
    lightImg.src = img.src;
  });
});

closeBtn.onclick = ()=>{
  lightbox.style.display='none';
};

lightbox.onclick = (e)=>{
  if(e.target===lightbox) lightbox.style.display='none';
};

</script>

</body>
</html>
