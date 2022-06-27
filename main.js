let menuBackground = document.getElementById('menu__background')
    ctx = menuBackground.getContext('2d');
    screenWidth = window.innerWidth
    ctxWidth = 0
    bgGradient = ctx.createLinearGradient(0, 0, ctxWidth - ctxWidth * 0.1, 0);
    bgGradient.addColorStop(0, "rgba(238, 85, 20, 1)");
    bgGradient.addColorStop(1, "rgba(238, 85, 20, 0)");

function setupBg() {
    menuBackground.style.width = screenWidth - 20 + 'px';
    ctxWidth = menuBackground.width;
    bgGradient = ctx.createLinearGradient(0, 0, ctxWidth, 0);
    bgGradient.addColorStop(0, "rgba(238, 85, 20, 1)");
    bgGradient.addColorStop(1, "rgba(238, 85, 20, 0)");
}

function drawBackground() {
    ctx.fillStyle = bgGradient;
    ctx.clearRect(0, 0, ctxWidth, menuBackground.height)
    ctx.beginPath();
    ctx.moveTo(0, 0);
    ctx.lineTo(0, menuBackground.height);
    ctx.lineTo(ctxWidth - ctxWidth * 0.4, menuBackground.height);
    ctx.lineTo(ctxWidth - ctxWidth * 0.2, 0);
    ctx.lineTo(0, 0);
    ctx.fill();
    ctx.beginPath()
}

// screen width tracker
window.addEventListener('resize', function () {
    screenWidth = window.innerWidth;
    setupBg();
    drawBackground();
})

setupBg();
drawBackground()
