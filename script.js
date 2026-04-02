document.addEventListener("DOMContentLoaded", function () {

let index = 0;
const images = document.querySelectorAll(".carousel img");
const dots = document.querySelectorAll(".dots span");
const nextBtn = document.querySelector(".arrow.right");
const prevBtn = document.querySelector(".arrow.left");

function showImage(i) {
    images.forEach(img => img.classList.remove("active"));
    dots.forEach(dot => dot.classList.remove("active"));

    images[i].classList.add("active");
    dots[i].classList.add("active");
}

nextBtn.addEventListener("click", () => {
    index = (index + 1) % images.length;
    showImage(index);
});

prevBtn.addEventListener("click", () => {
    index = (index - 1 + images.length) % images.length;
    showImage(index);
});

dots.forEach((dot, i) => {
    dot.addEventListener("click", () => {
        index = i;
        showImage(index);
    });
});

// autoplay
setInterval(() => {
    index = (index + 1) % images.length;
    showImage(index);
}, 3000);

});



