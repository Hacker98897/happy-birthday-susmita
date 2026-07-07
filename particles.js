// ==============================
// Romantic Star Background
// ==============================

const particleContainer = document.getElementById("particles");

function createStar() {

    const star = document.createElement("div");

    star.classList.add("star");

    star.style.left = Math.random() * window.innerWidth + "px";
    star.style.top = Math.random() * window.innerHeight + "px";

    const size = Math.random() * 4 + 2;

    star.style.width = size + "px";
    star.style.height = size + "px";

    star.style.animationDuration = (2 + Math.random() * 4) + "s";

    particleContainer.appendChild(star);

    setTimeout(() => {

        star.remove();

    }, 6000);

}

setInterval(createStar, 120);


// Floating Sparkles

function createSparkle() {

    const sparkle = document.createElement("div");

    sparkle.innerHTML = "✨";

    sparkle.style.position = "fixed";
    sparkle.style.left = Math.random() * 100 + "vw";
    sparkle.style.top = Math.random() * 100 + "vh";
    sparkle.style.fontSize = (12 + Math.random() * 18) + "px";
    sparkle.style.opacity = Math.random();

    sparkle.style.pointerEvents = "none";

    sparkle.style.animation = "sparkleFade 3s linear forwards";

    document.body.appendChild(sparkle);

    setTimeout(() => {

        sparkle.remove();

    }, 3000);

}

setInterval(createSparkle, 700);
