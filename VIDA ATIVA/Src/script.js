document.querySelector(".prev").addEventListener("click", function () {
    scrollImages(-1);
});

document.querySelector(".next").addEventListener("click", function () {
    scrollImages(1);
});

function scrollImages(direction) {
    const container = document.querySelector(".container-images");
    const scrollStep = container.offsetWidth;
    container.scrollLeft += direction * scrollStep;
}
