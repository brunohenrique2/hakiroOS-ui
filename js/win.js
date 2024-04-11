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
let cssRoot = document.querySelector(":root")
let btnLightMode = document.querySelector("#lightMode")
let btnDarkMode = document.querySelector("#darkMode")
let html = document.querySelector("#html")
let wallpaper = document.querySelector("#main")
let addWallpaper = document.querySelector("#addWallpaper")
let timer = document.querySelector("#timer")
let date = document.querySelector("#date")

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

//aciona o tema claro
btnLightMode.addEventListener("click", () => {
    btnLightMode.classList.add("active")
    btnDarkMode.classList.remove("active")

    localStorage.setItem("--bg-color1", "#f5f5f5")
    localStorage.setItem("--bg-color2", "#f5f5f566")
    localStorage.setItem("--bg-color3", "#f5f5f599")
    localStorage.setItem("--color", "#000000")
    localStorage.setItem("--color2", "#4c1036")
    localStorage.setItem("--color3", "#911e72")
    localStorage.setItem("--border-color", "#f5f5f599")
    localStorage.setItem("--box-shadow-color", "#00000066")

    cssRoot.style.setProperty("--bg-color1", localStorage.getItem("--bg-color1"))
    cssRoot.style.setProperty("--bg-color2", localStorage.getItem("--bg-color2"))
    cssRoot.style.setProperty("--bg-color3", localStorage.getItem("--bg-color3"))
    cssRoot.style.setProperty("--color", localStorage.getItem("--color"))
    cssRoot.style.setProperty("--color2", localStorage.getItem("--color2"))
    cssRoot.style.setProperty("--color3", localStorage.getItem("--color3"))
    cssRoot.style.setProperty("--border-color", localStorage.getItem("--border-color"))
    cssRoot.style.setProperty("--box-shadow-color", localStorage.getItem("--box-shadow-color"))
    
    localStorage.setItem("wallpaper", "url('../img/wallpaper1.jpg')")
    wallpaper.style.backgroundImage = localStorage.getItem("wallpaper")
})

//aciona o tema escuro
btnDarkMode.addEventListener("click", () => {
    btnDarkMode.classList.add("active")
    btnLightMode.classList.remove("active")

    localStorage.setItem("--bg-color1", "#1f1f1f")
    localStorage.setItem("--bg-color2", "#00000066")
    localStorage.setItem("--bg-color3", "#00000099")
    localStorage.setItem("--color", "#f5f5f5")
    localStorage.setItem("--color2", "#4c1036")
    localStorage.setItem("--color3", "#911e72")
    localStorage.setItem("--border-color", "#00000099")
    localStorage.setItem("--box-shadow-color", "#00000066")

    cssRoot.style.setProperty("--bg-color1", localStorage.getItem("--bg-color1"))
    cssRoot.style.setProperty("--bg-color2", localStorage.getItem("--bg-color2"))
    cssRoot.style.setProperty("--bg-color3", localStorage.getItem("--bg-color3"))
    cssRoot.style.setProperty("--color", localStorage.getItem("--color"))
    cssRoot.style.setProperty("--color2", localStorage.getItem("--color2"))
    cssRoot.style.setProperty("--color3", localStorage.getItem("--color3"))
    cssRoot.style.setProperty("--border-color", localStorage.getItem("--border-color"))
    cssRoot.style.setProperty("--box-shadow-color", localStorage.getItem("--box-shadow-color"))

    localStorage.setItem("wallpaper", "url('../img/wallpaper2.jpeg')")
    wallpaper.style.backgroundImage = localStorage.getItem("wallpaper")

})

function loading() {
    wallpaper.style.backgroundImage = localStorage.getItem("wallpaper")
    cssRoot.style.setProperty("--bg-color1", localStorage.getItem("--bg-color1"))
    cssRoot.style.setProperty("--bg-color2", localStorage.getItem("--bg-color2"))
    cssRoot.style.setProperty("--bg-color3", localStorage.getItem("--bg-color3"))
    cssRoot.style.setProperty("--color", localStorage.getItem("--color"))
    cssRoot.style.setProperty("--color2", localStorage.getItem("--color2"))
    cssRoot.style.setProperty("--color3", localStorage.getItem("--color3"))
    cssRoot.style.setProperty("--border-color", localStorage.getItem("--border-color"))
    cssRoot.style.setProperty("--box-shadow-color", localStorage.getItem("--box-shadow-color"))
    loader.classList.add("hidden")
    loader.style.display = "none"
}

setInterval(time, 1000)

function time() {
    const dateNow = new Date()
    timer.innerHTML = dateNow.toLocaleTimeString()
    date.innerHTML = dateNow.toLocaleDateString()
}