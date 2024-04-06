let winStart = document.querySelector("#winStart")
let btnStart = document.querySelector("#start")

btnStart.addEventListener("click", () => {
    winStart.classList.toggle("active")
    console.log("click")
})