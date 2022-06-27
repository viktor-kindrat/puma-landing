let menuBackground = document.getElementById('menu__background')
    ctx = menuBackground.getContext('2d');
    screenWidth = window.innerWidth
    ctxWidth = 0;
    
    // screen width tracker 
window.onresize = function (){
    screenWidth = window.innerWidth;
    menuBackground.style.width = screenWidth - 20 + 'px'
}

menuBackground.style.width = screenWidth - 20 + 'px';
ctxWidth = menuBackground.width;

let bgGradient = ctx.createLinearGradient(0, 0, ctxWidth - ctxWidth * 0.2, 0);
bgGradient.addColorStop(0, "rgba(238, 85, 20, 1)");
bgGradient.addColorStop(1, "rgba(238, 85, 20, 0)");

function drawBackground() {
    ctx.fillStyle = bgGradient;
    ctx.beginPath();
    ctx.moveTo(0, 0);
    ctx.lineTo(0, menuBackground.height);
    ctx.lineTo(ctxWidth - ctxWidth * 0.3, menuBackground.height);
    ctx.lineTo(ctxWidth - ctxWidth * 0.2, 0);
    ctx.lineTo(0, 0);
    ctx.fill();
    ctx.strokeStyle = '#000000';
}

drawBackground()