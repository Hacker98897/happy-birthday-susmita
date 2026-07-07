// ==============================
// Happy Birthday Susmita ❤️
// Version 2
// ==============================

// Loader
window.addEventListener("load", () => {
    setTimeout(() => {
        document.getElementById("loader").style.display = "none";
    }, 2500);
});

// ------------------------------
// Love Letter Typewriter
// ------------------------------

const message = `Dear Susmita,

Happy Birthday ❤️

Today is your special day, and I just wanted to remind you how amazing you are.

Thank you for always understanding me.
Thank you for your kindness.
Thank you for being yourself.

I hope this year brings you happiness, success, peace, and countless beautiful memories.

Keep smiling because your smile makes the world brighter.

Happy Birthday once again.

With lots of love,

❤️ Hitesh`;

let i = 0;

function typeWriter() {

    const target = document.getElementById("typingText");

    if (!target) return;

    if (i < message.length) {

        target.innerHTML += message.charAt(i);

        i++;

        setTimeout(typeWriter, 35);

    }

}

window.addEventListener("load", () => {

    setTimeout(typeWriter, 3000);

});

// ------------------------------
// Relationship Timer
// ------------------------------

const startDate = new Date("2026-06-11T00:00:00");

function updateTimer(){

    const now = new Date();

    let diff = now - startDate;

    if(diff < 0){

        document.getElementById("loveTimer").innerHTML =
        "Our journey begins on 11 June 2026 ❤️";

        return;

    }

    const days = Math.floor(diff/(1000*60*60*24));

    const hours = Math.floor((diff/(1000*60*60))%24);

    const minutes = Math.floor((diff/(1000*60))%60);

    const seconds = Math.floor((diff/1000)%60);

    document.getElementById("loveTimer").innerHTML =
    `${days} Days ❤️ ${hours} Hours ❤️ ${minutes} Minutes ❤️ ${seconds} Seconds`;

}

setInterval(updateTimer,1000);

updateTimer();

// ------------------------------
// Gift Popup
// ------------------------------

const giftButton=document.getElementById("giftButton");

const giftModal=document.getElementById("giftModal");

const closeGift=document.getElementById("closeGift");

giftButton.onclick=function(){

giftModal.style.display="flex";

}

closeGift.onclick=function(){

giftModal.style.display="none";

}

// ------------------------------
// Floating Hearts
// ------------------------------

function createHeart(){

const heart=document.createElement("div");

heart.className="heart";

heart.innerHTML="❤️";

heart.style.left=Math.random()*100+"vw";

heart.style.animationDuration=(4+Math.random()*4)+"s";

document.body.appendChild(heart);

setTimeout(()=>{

heart.remove();

},8000);

}

setInterval(createHeart,600);

// ------------------------------
// Scroll Animation
// ------------------------------

const observer = new IntersectionObserver((entries)=>{

entries.forEach(entry=>{

if(entry.isIntersecting){

entry.target.classList.add("show");

}

});

});

document.querySelectorAll("section").forEach(sec=>{

sec.classList.add("fade");

observer.observe(sec);

});
