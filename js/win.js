let winStart = document.querySelector("#winStart")
let btnStart = document.querySelector("#start")
let powerSettingsBox = document.querySelector("#powerSettingsBox")
let btnPower = document.querySelector("#powerSettings")
let btnPowerSite = document.querySelector("#closeSite")
let loader = document.querySelector("#loader")
let appSettings = document.querySelector("#settings")
let winSettings = document.querySelector("#winSettings")
let winClose = document.querySelector("#winClose")
let btnTheme = document.querySelector("#themes")
let winSettingsTheme = document.querySelector("#winSettingsTheme")
let btnLightMode = document.querySelector("#lightMode")
let btnDarkMode = document.querySelector("#darkMode")
let html = document.querySelector("#html")
let wallpaper = document.querySelector("#main")

btnStart.addEventListener("click", () => {
    winStart.classList.toggle("active")
    powerSettingsBox.classList.remove("active")
    console.log("click")
})

btnPower.addEventListener("click", () => {
    powerSettingsBox.classList.toggle("active")
})

btnPowerSite.addEventListener("click", () => {
    window.open('../view/encerrar.html')
})

appSettings.addEventListener("click", () => {
    winSettings.classList.toggle("active")
})

winClose.addEventListener("click", () => {
    winSettings.classList.remove("active")
})

btnTheme.addEventListener("click", () => {
    winSettingsTheme.classList.toggle("active")
})

btnLightMode.addEventListener("click", () => {
    btnLightMode.classList.add("active")
    btnDarkMode.classList.remove("active")

    localStorage.setItem("theme", "lightMode")
    html.classList.add(localStorage.getItem("theme"))
    
    localStorage.setItem("wallpaper", "url('../img/wallpaper1.jpg')")
    wallpaper.style.backgroundImage = localStorage.getItem("wallpaper")

    window.location.reload()
})

btnDarkMode.addEventListener("click", () => {
    btnDarkMode.classList.add("active")
    btnLightMode.classList.remove("active")

    localStorage.setItem("theme", "darkMode")
    html.classList.add(localStorage.getItem("theme"))

    localStorage.setItem("wallpaper", "url('../img/wallpaper2.jpeg')")
    wallpaper.style.backgroundImage = localStorage.getItem("wallpaper")

    window.location.reload()
})

function loading() {
    html.classList.add(localStorage.getItem("theme"))
    wallpaper.style.backgroundImage = localStorage.getItem("wallpaper")
    loader.classList.add("hidden")
    loader.style.display = "none"
}