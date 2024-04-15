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

/*====================JANELAS====================*/

class Windows {
    constructor(id, iconApp) {
        
        const main = document.querySelector("#main")
        const window = document.createElement("div")
        const winTittleBar = document.createElement("div")
        const winTittle = document.createElement("div")
        const winOptionsBox = document.createElement("div")
        const btnClose = document.createElement("span")
        const btnResize = document.createElement("span")
        const btnMinimize = document.createElement("span")
        const winIconApp = document.createElement("span")

        btnClose.innerHTML = "close"
        btnResize.innerHTML = "fullscreen"
        btnMinimize.innerHTML = "remove"
        winIconApp.innerHTML = iconApp

        window.id = id

        window.classList.add("window")
        winTittleBar.classList.add("winTittleBar")
        winTittle.classList.add("winTittle")
        winOptionsBox.classList.add("winOptionsBox")
        btnClose.classList.add("material-symbols-rounded", "winOptions", "winClose")
        btnResize.classList.add("material-symbols-rounded", "winOptions", "winResize")
        btnMinimize.classList.add("material-symbols-rounded", "winOptions", "winMinimize")
        winIconApp.classList.add("material-symbols-rounded")

        main.appendChild(window)
        window.appendChild(winTittleBar)
        winTittleBar.appendChild(winTittle)
        winTittle.appendChild(winIconApp)
        winTittleBar.appendChild(winOptionsBox)
        winOptionsBox.appendChild(btnClose)
        winOptionsBox.appendChild(btnResize)
        winOptionsBox.appendChild(btnMinimize)
    }

    openWindow(id) {
        let windows = document.querySelectorAll(".window")

        for(var i = 0; i < windows.length; i++) {
            if(windows[i].id == id) {
                windows[i].classList.add("active")
            }
        }
    }
}

let iconsApp = document.querySelectorAll(".iconsApp")
const appSettings = document.querySelector("#settings")
const winSettings = new Windows(appSettings.id, iconsApp[0].innerHTML)
const appExplorer = document.querySelector("#explorer")
const winExplorer = new Windows(appExplorer.id, iconsApp[1].innerHTML)



console.log(iconsApp)
for(i = 0; i < iconsApp.length; i++){

}

let winClose = document.querySelectorAll(".winClose")
let windows = document.querySelectorAll(".window")

for(let i = 0; i < winClose.length; i++){
    winClose[i].addEventListener("click", () => {
        windows[i].classList.remove("active")
    })
}