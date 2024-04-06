let winStart = document.querySelector("#winStart")
let btnStart = document.querySelector("#start")
let powerSettingsBox = document.querySelector("#powerSettingsBox")
let btnPower = document.querySelector("#powerSettings")
let btnPowerSite = document.querySelector("#closeSite")
let loader = document.querySelector("#loader")

btnStart.addEventListener("click", () => {
    winStart.classList.toggle("active")
    powerSettingsBox.classList.remove("active")
    console.log("click")
})

btnPower.addEventListener("click", () => {
    powerSettingsBox.classList.toggle("active")
})

btnPowerSite.addEventListener("click", () => {
    //Isso carrega um URL em branco (o primeiro argumento) na janela atual (o segundo argumento) e fecha a janela instantaneamente.
    window.open('../view/encerrar.html')

})

function loading() {
    loader.classList.add("hidden")
    loader.style.display = "none"
}