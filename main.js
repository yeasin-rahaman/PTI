document.addEventListener("DOMContentLoaded", function () {
    const scrollImages = document.querySelector(".scroll-images");
    const scrollLength = scrollImages.scrollWidth - scrollImages.clientWidth;
    const leftButton = document.querySelector(".left");
    const rightButton = document.querySelector(".right");

    function checkScroll() {
        const currentScroll = scrollImages.scrollLeft;
        if (currentScroll === 0) {
            console.log("hi");
            console.log(leftButton);
            leftButton.classList.add("disabled");
            rightButton.classList.remove("disabled");
        } else if (currentScroll === scrollLength) {
            rightButton.classList.add("disabled");
            leftButton.classList.remove("disabled");
        } else {
            leftButton.classList.remove("disabled");
            rightButton.classList.remove("disabled");
        }
    }

    scrollImages.addEventListener("scroll", checkScroll);
    window.addEventListener("resize", checkScroll);
    checkScroll();

    function leftScroll() {
        scrollImages.scrollBy({
            left: -200,
            behavior: "smooth"
        });
    }

    function rightScroll() {
        scrollImages.scrollBy({
            left: 200,
            behavior: "smooth"
        });
    }

    leftButton.addEventListener("click", leftScroll);
    rightButton.addEventListener("click", rightScroll);
});



document.addEventListener("DOMContentLoaded", function () {
    const scrollImages = document.querySelector(".scroll-images2");
    const scrollLength = scrollImages.scrollWidth - scrollImages.clientWidth;
    const leftButton2 = document.querySelector(".left2");
    const rightButton2 = document.querySelector(".right2");

    function checkScroll() {
        const currentScroll = scrollImages.scrollLeft;
        if (currentScroll === 0) {
            leftButton2.classList.add("disabled");
            rightButton2.classList.remove("disabled");
        } else if (currentScroll === scrollLength) {
            rightButton2.classList.add("disabled");
            leftButton2.classList.remove("disabled");
        } else {
            leftButton2.classList.remove("disabled");
            rightButton2.classList.remove("disabled");
        }
    }

    scrollImages.addEventListener("scroll", checkScroll);
    window.addEventListener("resize", checkScroll);
    checkScroll();

    function leftScroll2() {
        scrollImages.scrollBy({
            left: -200,
            behavior: "smooth"
        });
    }

    function rightScroll2() {
        scrollImages.scrollBy({
            left: 200,
            behavior: "smooth"
        });
    }

    leftButton2.addEventListener("click", leftScroll2);
    rightButton2.addEventListener("click", rightScroll2);
});