let mousecursor = document.querySelector(".c-loader");

window.addEventListener("mousemove", cursor);

function cursor(e) {
    mousecursor.style.top = e.pageY + "px";
    mousecursor.style.left = e.pageX + "px";
}


const delay = 0.08
const tl = new TimelineMax({ repeat: -1, repeatDelay: delay })


tl
    .to(".c-loader__block1", 0, { opacity: 0, delay }, delay)
    .to(".c-loader__block11", 0, { x: 0, y: 24, delay }, delay)
    .to(".c-loader__block12", 0, { x: -8, y: 40, delay }, delay)

    .to(".c-loader__block1", 0, { opacity: 1, x: 24, y: 72, delay: delay * 2 },  delay * 2)
    .to(".c-loader__block3", 0, { x: -8, y: 40, delay: delay * 2 }, delay * 2)
    .to(".c-loader__block11", 0, { x: 8, y: 72, delay: delay * 2 }, delay * 2)

    .to(".c-loader__block1", 0, { x: 24, y: 104, delay: delay * 3 }, delay * 3)
    .to(".c-loader__block3", 0, { x: -8, y: 64, delay: delay * 3 }, delay * 3)
    .to(".c-loader__block4", 0, { x: -24, y: 64, delay: delay * 3 }, delay * 3)

    .to(".c-loader__block2", 0, { x: 8, y: 72, delay: delay * 4 }, delay * 4)
    .to(".c-loader__block3", 0, { x: 16, y: 112, delay: delay * 4 }, delay * 4)
    .to(".c-loader__block4", 0, { x: -24, y: 40, delay: delay * 4 }, delay * 4)

    .to(".c-loader__block2", 0, { x: -8, y: 104, delay: delay * 5 }, delay * 5)
    .to(".c-loader__block4", 0, { x: -24, y: 64, delay: delay * 5 }, delay * 5)
    .to(".c-loader__block6", 0, { x: 0, y: 56, delay: delay * 5 }, delay * 5)

    .to(".c-loader__block4", 0, { x: -48, y: 112, delay: delay * 6 }, delay * 6)
    .to(".c-loader__block5", 0, { x: 16, y: 64, delay: delay * 6 }, delay * 6)
    .to(".c-loader__block6", 0, { x: 0, y: 32, delay: delay * 6 }, delay * 6)

    .to(".c-loader__block5", 0, { x: 32, y: 96, delay: delay * 7 }, delay * 7)
    .to(".c-loader__block6", 0, { x: 0, y: 56, delay: delay * 7 }, delay * 7)
    .to(".c-loader__block7", 0, { x: -16, y: 56, delay: delay * 7 }, delay * 7)

    .to(".c-loader__block6", 0, { x: 8, y: 88, delay: delay * 8 }, delay * 8)
    .to(".c-loader__block7", 0, { x: -16, y: 64, delay: delay * 8 }, delay * 8)
    .to(".c-loader__block9", 0, { x: -8, y: 24, delay: delay * 8 }, delay * 8)

    .to(".c-loader__block7", 0, { x: -24, y: 88, delay: delay * 9 }, delay * 9)
    .to(".c-loader__block8", 0, { x: 8, y: 24, delay: delay * 9 }, delay * 9)
    .to(".c-loader__block9", 0, { x: -8, y: 56, delay: delay * 9 }, delay * 9)

    .to(".c-loader__block8", 0, { x: 8, y: 48, delay: delay * 10 }, delay * 10)
    .to(".c-loader__block9", 0, { x: -8, y: 72, delay: delay * 10 }, delay * 10)
    .to(".c-loader__block10", 0, { x: 0, y: 40, delay: delay * 10 }, delay * 10)

    .to(".c-loader__block8", 0, { x: 8, y: 72, delay: delay * 11 }, delay * 11)
    .to(".c-loader__block10", 0, { x: 0, y: 64, delay: delay * 11 }, delay * 11)


    .to(".c-loader__svg", 0, { rotation: -45, delay: delay * 12 }, delay * 12)
    .to(".c-loader__block1", 0, { rotation: -45, x: 20, y: 110, delay: delay * 12 }, delay * 12)
    .to(".c-loader__block2", 0, { rotation: -45, x: -7, y: 110, delay: delay * 12 }, delay * 12)
    .to(".c-loader__block3", 0, { rotation: -45, x: -23, y: 88, delay: delay * 12 }, delay * 12)
    .to(".c-loader__block4", 0, { rotation: -45, x: -50, y: 110, delay: delay * 12 }, delay * 12)
    .to(".c-loader__block5", 0, { rotation: -45, x: 23, y: 102, delay: delay * 12 }, delay * 12)
    .to(".c-loader__block6", 0, { rotation: -45, x: 18, y: 102, delay: delay * 12 }, delay * 12)
    .to(".c-loader__block7", 0, { rotation: -45, x: -20, y: 91, delay: delay * 12 }, delay * 12)
    .to(".c-loader__block8", 0, { rotation: -45, x: 4, y: 72, delay: delay * 12 }, delay * 12)
    .to(".c-loader__block9", 0, { rotation: -45, x: -12, y: 61, delay: delay * 12 }, delay * 12)
    .to(".c-loader__block10", 0, { rotation: -45, x: 7, y: 75, delay: delay * 12 }, delay * 12)
    .to(".c-loader__block11", 0, { rotation: -45, x: -15, y: 59, delay: delay * 12 }, delay * 12)
    .to(".c-loader__block12", 0, { rotation: -45, x: -26, y: 27, delay: delay * 12 }, delay * 12)


    .to(".c-loader__svg", 0, { rotation: -90, delay: delay * 13 }, delay * 13)
    .to(".c-loader__block6", 0, { rotation: -45, x: 7, y: 80, delay: delay * 13 }, delay * 13)


    .to(".c-loader__svg", 0, { rotation: -135, delay: delay * 14 }, delay * 14)
    .to(".c-loader__block5", 0, { rotation: -45, x: 23, y: 69, delay: delay * 14 }, delay * 14)