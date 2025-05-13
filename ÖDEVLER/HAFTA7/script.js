let distractNumber=0;
let seconds = 0;
let minutes = 0;
let isRunning = true;
let interval;


document
.getElementById("increaseNumber")
.addEventListener("click",function () {
    distractNumber++;

    document.getElementById("distractNumber").innerHTML = distractNumber;

    if(distractNumber %5 === 0 ){
        alert("Telefonu Bırak!!");
    }
});

let bird = document.getElementById("bird");
let birdaudio = document.getElementById("birdaudio");

bird.addEventListener("click", function(){
    if(birdaudio.paused){
        birdaudio.play();
        bird.className = "fa-solid fa-music"
    }else{
        birdaudio.pause();
        bird.className= "fa-solid fa-dove"
    }
});

let moon = document.getElementById("moon");
let pianoaudio = document.getElementById("pianoaudio");

moon.addEventListener("click", function(){
    if(pianoaudio.paused){
        pianoaudio.play();
        moon.className = "fa-solid fa-music"
    }else{
        pianoaudio.pause();
         moon.className = "fa-solid fa-moon"
    }
});

let tree = document.getElementById("tree");
let forestsound = document.getElementById("forestsound");

tree.addEventListener("click", function(){
    if(forestsound.paused){
        forestsound.play();
        tree.className = "fa-solid fa-music"
    }else{
        forestsound.pause();
        tree.className = "fa-solid fa-tree"
    }
});

let fire = document.getElementById("fire");
let firesound = document.getElementById("firesound");

fire.addEventListener("click", function(){
    if(firesound.paused){
        firesound.play();
        fire.className = "fa-solid fa-music"
    }else{
        firesound.pause();
        fire.className = "fa-solid fa-fire"
    }
});

let rain = document.getElementById("rain");
let rainsound = document.getElementById("rainsound");

rain.addEventListener("click", function(){
    if(rainsound.paused){
        rainsound.play();
        rain.className = "fa-solid fa-music"
    }else{
        rainsound.pause();
         rain.className = "fa-solid fa-cloud-rain"
    }
});

const volumeInput = document.getElementById("volumeinput");

volumeInput.addEventListener("input", function() {
    birdaudio.volume = volumeInput.value / 100;
    pianoaudio.volume = volumeInput.value / 100;
    forestsound.volume = volumeInput.value / 100;
    firesound.volume = volumeInput.value / 100;
    rainsound.volume = volumeInput.value / 100;
});


function updateDisplay() {
    document.getElementById('focus-timer').textContent = `Focused: ${minutes}m ${seconds}s`;
}

function startTimer() {
    interval = setInterval(() => {
        seconds++;
        if (seconds === 60) {
            seconds = 0;
            minutes++;
        }
        updateDisplay();
    }, 1000);
}

function stopTimer() {
    clearInterval(interval);
}

document.getElementById('toggle-btn').addEventListener('click', () => {
    if (isRunning) {
        stopTimer();
        document.getElementById('toggle-btn').textContent = "Resume";
    } else {
        startTimer();
        document.getElementById('toggle-btn').textContent = "Pause";
    }
    isRunning = !isRunning;
});

startTimer(); // sayfa açıldığında otomatik başlat

