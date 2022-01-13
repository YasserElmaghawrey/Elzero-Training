document.querySelector(".header .main-nav .other").onclick = function () {
    document.querySelector(".mega-menu").classList.toggle("open")
    document.querySelector(".main-nav .other").classList.toggle("active")
}
let otherLinks = document.querySelector(".other")
let megaMenu = document.querySelector(".mega-menu")
document.addEventListener("click", (e) => {

    if (e.target !== otherLinks) {
        // Check If Menu Is Open
        if (megaMenu.classList.contains("open")) {
            otherLinks.classList.toggle("active")
            megaMenu.classList.toggle("open")
        }
    }
})

let countDownDate = new Date("Dec 31, 2021 23:59:59").getTime();
let counter = setInterval(() => {
    // Get Date Now
    let dateNow = new Date().getTime();
    // Find The Date Difference Between Now And Countdown Date
    let dateDiff = countDownDate - dateNow;
    // Get Time Units
    let days = Math.floor(dateDiff / (1000 * 60 * 60 * 24))
    let hours = Math.floor((dateDiff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
    let minutes = Math.floor((dateDiff % (1000 * 60 * 60)) / (1000 * 60))
    let seconds = Math.floor((dateDiff % (1000 * 60)) / 1000)
    
    document.querySelector(".days").innerHTML = days < 10 ? `0${days}` : days;
    document.querySelector(".hours").innerHTML = hours < 10 ? `0${hours}` : hours;
    document.querySelector(".minutes").innerHTML = minutes < 10 ? `0${minutes}` : minutes;
    document.querySelector(".seconds").innerHTML = seconds < 10 ? `0${seconds}` : seconds;
    if (dateDiff < 0) {
        clearInterval(counter)
    }
}, 1000)

let progressSpans = document.querySelectorAll(".the-progress span")
let section = document.querySelector(".our-skills")
let nums = document.querySelectorAll(".stats .number");
let statsSection = document.querySelector(".stats");
let started = false; // Function Started ? No

window.onscroll = function () {
    if (window.scrollY >= section.offsetTop - 250 ) {
        progressSpans.forEach((span) => {
            span.style.width = span.dataset.width
        });
    }
    if (window.scrollY >= statsSection.offsetTop) {
        if (!started) {
            nums.forEach((num) => startCount(num));
        }
        started = true;
    }
}

function startCount(el) {
    let goal = el.dataset.goal;
    let count = setInterval(() => {
        el.textContent++;
        if (el.textContent == goal) {
            clearInterval(count);
        }
    }, 2000 / goal);
}
