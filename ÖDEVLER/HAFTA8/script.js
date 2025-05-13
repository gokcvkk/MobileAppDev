function increaseScore(teamName) {
    const teamId = `score${teamName}`;
    const scoreElement = document.getElementById(teamId);
    let score = Number(scoreElement.textContent);
    scoreElement.textContent = ++score;

}

function decreaseScore(teamName) {
    const teamId = `score${teamName}`;
    const scoreElement = document.getElementById(teamId);
    let score = Number(scoreElement.textContent);

    if(score > 0){
        scoreElement.textContent = --score;
    } else {
        alert("Skor Daha Fazla Azaltılamaz");
    }
}

function setNamePrompt(teamName) {
    const name = prompt("Takımın Yeni İsmini Giriniz:");
    const teamDiv = document.querySelector(`.team${teamName}`);
    if (teamDiv) {
        teamDiv.querySelector("h2").textContent = name;
    } else {
        console.error(`.team${teamName} bulunamadı!`);
    }
}


function setScorePrompt(teamName){
    const score = prompt("Yeni Skor Giriniz:");
    
    if(score === null) {
        alert("Giriş İptal Edildi");
        return;
    }

    const scoreNum = Number(score);
    console.log(scoreNum);

    if(isNaN(scoreNum)) { //Not a number (geçersiz sayı olup olmadığını kontrol ettik, t,f)
        alert("Geçersiz bir değer girdiniz");
        return;
    }

    if(score < 0 || !Number.isInteger(scoreNum)) {
        alert ("Lütfen Geçerli Bir Sayı Giriniz.");
        return;
    }

    document.getElementById(`score${teamName}`).innerHTML = scoreNum;
}

function resetScoreA() {
    document.getElementById("scoreA").innerHTML = "0";
}

document.getElementById("resetButtonA").addEventListener("click", resetScoreA);


function resetScoreB() {
    document.getElementById("scoreB").innerHTML = "0";
}

document.getElementById("resetButtonB").addEventListener("click", resetScoreB);

