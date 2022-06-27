let menuBackground = document.getElementById('menu__background')
bgctx = menuBackground.getContext('2d');
screenWidth = window.innerWidth
ctxWidth = 0
bgGradient = bgctx.createLinearGradient(0, 0, ctxWidth - ctxWidth * 0.1, 0)
border = document.getElementById('menu__image-border')
brdrctx = border.getContext('2d')
borderHeight = border.height
borderWidth = border.width;


brdrctx.fillStyle = 'rgba(238, 85, 20, 0.1)';
brdrctx.fillRect(0, 0, borderWidth, borderHeight);
brdrctx.clearRect(12, 12, borderWidth - 24, borderHeight - 24);

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

setupBg();
drawBackground()
