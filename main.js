let menuBackground = document.getElementById('menu__background')
bgctx = menuBackground.getContext('2d');
screenWidth = window.innerWidth
ctxWidth = 0
bgGradient = bgctx.createLinearGradient(0, 0, ctxWidth - ctxWidth * 0.1, 0)
border = document.getElementById('menu__image-border')
brdrctx = border.getContext('2d')
borderHeight = border.height
borderWidth = border.width
menuNext = document.getElementById('menu__next-btn')
menuImage = document.getElementById('menu__image')
imagesCount = 1
imageIndex = 0
videoPlayState = true
videoControl = document.querySelector('.video__control')
video = document.getElementById('video');

menuNext.addEventListener('click', function () {
    if (imageIndex < imagesCount) {
        imageIndex++
    } else {
        imageIndex = 0;
    }
    menuImage.style.animation = ''
    setTimeout(function () {
        menuImage.style.animation = 'slide 0.5s 1 ease-in forwards'
    }, 10)
    setTimeout(function () {
        menuImage.style.opacity = '0';
        menuImage.style.background = 'transparent url("./images/main-images/' + imageIndex + '.png") no-repeat center';
        menuImage.style.backgroundSize = 'contain';
        menuImage.style.animation = '';
        setTimeout(function () {
            menuImage.style.opacity = '1';
            menuImage.style.animation = 'slide 0.5s 1 reverse forwards'
        }, 10)
    }, 500)
})

brdrctx.fillStyle = 'rgba(238, 85, 20, 0.4)';
brdrctx.fillRect(0, 0, borderWidth, borderHeight);
brdrctx.clearRect(12, 12, borderWidth - 24, borderHeight - 24);
brdrctx.fillStyle = 'rgba(238, 85, 20, 0.1)';

for (let i = 1; i !== 9; i++) {
    for (let j = 1; j !== 9; j++) {
        brdrctx.beginPath();
        brdrctx.arc((12 + 5) * j, (12 + 5) * i, 5, 0, 2 * Math.PI);
        brdrctx.fill()
    }
}


bgGradient.addColorStop(0, "rgba(238, 85, 20, 1)");
bgGradient.addColorStop(1, "rgba(238, 85, 20, 0)");

function setupBg() {
    menuBackground.style.width = screenWidth - 20 + 'px';
    ctxWidth = menuBackground.width;
    bgGradient = bgctx.createLinearGradient(0, 0, ctxWidth, 0);
    bgGradient.addColorStop(0, "rgba(238, 85, 20, 1)");
    bgGradient.addColorStop(1, "rgba(238, 85, 20, 0)");
}

function drawBackground() {
    bgctx.fillStyle = bgGradient;
    bgctx.clearRect(0, 0, ctxWidth, menuBackground.height)
    bgctx.beginPath();
    bgctx.moveTo(0, 0);
    bgctx.lineTo(0, menuBackground.height);
    bgctx.lineTo(ctxWidth - ctxWidth * 0.4, menuBackground.height);
    bgctx.lineTo(ctxWidth - ctxWidth * 0.2, 0);
    bgctx.lineTo(0, 0);
    bgctx.fill();
    bgctx.beginPath()
}

// screen width tracker
window.addEventListener('resize', function () {
    screenWidth = window.innerWidth;
    setupBg();
    drawBackground();
})

window.addEventListener("scroll", () => {
    let scroll = this.scrollY;
    if (scroll >= 100) {
        document.querySelector('.header').style.background = 'rgba(254, 254, 254, 0.3)';
        document.querySelector('.header').style.backdropFilter = 'blur(10px)';
    } else {
        document.querySelector('.header').style.background = 'transparent';
        document.querySelector('.header').style.backdropFilter = '';
    }
    console.log(scroll)
});

videoControl.addEventListener('mouseenter', function () {
    if (!videoPlayState) {
        this.style.opacity = '1'
    }
})

videoControl.addEventListener('mouseout', function () {
    if (!videoPlayState) {
        this.style.opacity = '0'
    }
})

videoControl.addEventListener('click', function () {
    if (videoPlayState) {
        document.getElementById('video').play();
        this.style.background = '#ffffff url(./images/pause.svg) no-repeat center'
        this.style.backgroundSize = '40px'
        setTimeout(function () {
            videoControl.style.opacity = '0'
        }, 200)
        videoPlayState = false;
    } else {
        document.getElementById('video').pause();
        this.style.background = '#ffffff url(./images/play.svg) no-repeat center'
        this.style.backgroundSize = '30px'
        videoPlayState = true;
    }
})

video.addEventListener('ended', function () {
    videoPlayState = true;
    videoControl.style.background = '#ffffff url(./images/play.svg) no-repeat center'
    videoControl.style.backgroundSize = '30px'
    videoControl.style.opacity = '1';
})

setupBg();
drawBackground()
