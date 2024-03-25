document.querySelector(".prev").addEventListener("click", function () {
    scrollImages(-1);
});

document.querySelector(".next").addEventListener("click", function () {
    scrollImages(1);
});

function scrollImages(direction) {
    const container = document.querySelector(".container-images");
    const containerWidth = container.offsetWidth;
    const scrollStep = 200;

    if (direction === -1) {
        container.scrollLeft -= scrollStep;
    } else if (direction === 1) {
        container.scrollLeft += scrollStep;

        
        if (Math.round(container.scrollLeft) >= Math.round(container.scrollWidth - containerWidth)) {
            container.scrollLeft = 0;
        }
    }

    
    if (direction === -1 && container.scrollLeft <= 0) {
        container.scrollLeft = container.scrollWidth;
    }
}
