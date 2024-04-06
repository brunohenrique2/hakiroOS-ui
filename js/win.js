let winStart = document.querySelector("#winStart")
let btnStart = document.querySelector("#start")
let powerSettingsBox = document.querySelector("#powerSettingsBox")
let btnPower = document.querySelector("#powerSettings")
let btnPowerSite = document.querySelector("#closeSite")

btnStart.addEventListener("click", () => {
    winStart.classList.toggle("active")
    powerSettingsBox.classList.remove("active")
    console.log("click")
})

btnPower.addEventListener("click", () => {
    powerSettingsBox.classList.toggle("active")
})

btnPowerSite.addEventListener("click", () => {
    //essa função cria uma janela vazia com a pagina incluida dentro e depois a fecha instantaneamente
    window.open('','_self').close()
})