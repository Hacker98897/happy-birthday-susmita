// ==============================
// Fireworks Animation
// ==============================

const canvas = document.getElementById("fireworksCanvas");
const ctx = canvas.getContext("2d");

function resizeCanvas() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
}

resizeCanvas();
window.addEventListener("resize", resizeCanvas);

let particles = [];

class Particle {
    constructor(x, y, color) {
        this.x = x;
        this.y = y;

        const angle = Math.random() * Math.PI * 2;
        const speed = Math.random() * 6 + 2;

        this.vx = Math.cos(angle) * speed;
        this.vy = Math.sin(angle) * speed;

        this.alpha = 1;
        this.color = color;
        this.radius = Math.random() * 3 + 2;
    }

    update() {
        this.x += this.vx;
        this.y += this.vy;

        this.vy += 0.05;

        this.alpha -= 0.015;
    }

    draw() {
        ctx.save();
        ctx.globalAlpha = this.alpha;
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
        ctx.fillStyle = this.color;
        ctx.fill();
        ctx.restore();
    }
}

function launchFirework() {

    const x = Math.random() * canvas.width;
    const y = Math.random() * canvas.height * 0.5;

    const colors = [
        "#ff4d88",
        "#ffd54f",
        "#00e5ff",
        "#ffffff",
        "#9c6bff",
        "#00ff99"
    ];

    const color = colors[Math.floor(Math.random() * colors.length)];

    for (let i = 0; i < 80; i++) {
        particles.push(new Particle(x, y, color));
    }

}

function animate() {

    ctx.clearRect(0, 0, canvas.width, canvas.height);

    particles.forEach((p, index) => {

        p.update();
        p.draw();

        if (p.alpha <= 0) {
            particles.splice(index, 1);
        }

    });

    requestAnimationFrame(animate);

}

animate();

const giftBtn = document.getElementById("giftButton");

giftBtn.addEventListener("click", () => {

    launchFirework();

    setTimeout(launchFirework, 400);

    setTimeout(launchFirework, 800);

    setTimeout(launchFirework, 1200);

});
