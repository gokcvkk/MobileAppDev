alert("hello world")
console.log("Selam Dünya")

console.log(document.getElementById("message"))

document.getElementById("false").innerHTML = "JS çok kolay bir dildir."

document.getElementById("myBtn").addEventListener("click", function(){
    document.getElementById("answer").innerHTML ="Butona Tıklandı."
})

document.getElementById("changeStyle").style.color = "tomato"

document.getElementById("changeStyle").style.fontSize = "24px"

document.getElementById("testbtn").addEventListener("click",function(){
    document.getElementById("helloworld").textContent = "Merhaba Dünya"
    document.getElementById("helloworld").style.color ="purple"
    document.getElementById("helloworld").style.padding="10px"
})