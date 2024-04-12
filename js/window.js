/*====================JANELA START DA TECLA SUPER====================*/

let winStart = document.querySelector("#winStart")
let btnStart = document.querySelector("#start")
let powerSettingsBox = document.querySelector("#powerSettingsBox")
let btnPower = document.querySelector("#powerSettings")

btnStart.addEventListener("click", () => {
    winStart.classList.toggle("active")
    powerSettingsBox.classList.remove("active")
})

btnPower.addEventListener("click", () => {
    powerSettingsBox.classList.toggle("active")
})

/*====================JANELA DE CONFIGURAÇÕES====================*/

let appSettings = document.querySelector("#settings")
let winSettings = document.querySelector("#winSettings")
let winClose = document.querySelector("#winClose")
let btnTheme = document.querySelector("#themes")
let winSettingsTheme = document.querySelector("#winSettingsTheme")
let addWallpaper = document.querySelector("#addWallpaper")

appSettings.addEventListener("click", () => {
    winSettings.classList.add("active")
    winStart.classList.remove("active") 
})

winClose.addEventListener("click", () => {
    winSettings.classList.remove("active")
})

btnTheme.addEventListener("click", () => {
    winSettingsTheme.classList.add("active")
})