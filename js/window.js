/*====================JANELA START DA TECLA SUPER====================*/

let winStart = document.querySelector("#winStart")
let btnStart = document.querySelector("#start")
let powerSettingsBox = document.querySelector("#powerSettingsBox")
let btnPower = document.querySelector("#powerSettings")
let btnClosePowerSettings = document.querySelector("#closePowerSettingsBox")

btnStart.addEventListener("click", () => {
    winStart.classList.toggle("active")
    powerSettingsBox.classList.remove("active")
})

btnPower.addEventListener("click", () => {
    powerSettingsBox.classList.toggle("active")
})

btnClosePowerSettings.addEventListener("click", () => {
    powerSettingsBox.classList.remove("active")
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

    openWindowStart(id) {
        let windows = document.querySelectorAll(".window")

        for(var i = 0; i < windows.length; i++) {
            if(windows[i].id == id) {
                windows[i].classList.add("active")
                for(let i = 0; i < windows.length; i++) {
                    windows[i].style.zIndex = "auto"
                }
                windows[i].style.zIndex = 2
            }
        }
    }
    openWindowTaskBar(id) {
        let windows = document.querySelectorAll(".window")

        for(var i = 0; i < windows.length; i++) {
            if(windows[i].id == id) {
                windows[i].classList.toggle("active")
                for(let i = 0; i < windows.length; i++) {
                    windows[i].style.zIndex = "auto"
                }
                windows[i].style.zIndex = 2
            }
        }
    }
}

let iconsApp = document.querySelectorAll(".iconsApp")
const appSettings = document.querySelector("#settings")
const winSettings = new Windows(appSettings.id, iconsApp[0].innerHTML)
const appExplorer = document.querySelector("#explorer")
const winExplorer = new Windows(appExplorer.id, iconsApp[1].innerHTML)

let winClose = document.querySelectorAll(".winClose")
let windows = document.querySelectorAll(".window")
let apps = document.querySelectorAll(".apps")
const main = document.querySelector("#main")

for(let i = 0; i < apps.length; i++) {
    apps[i].addEventListener("click", () => {
        apps[i].classList.add("active")
    })
}

for(let i = 0; i < winClose.length; i++){
    winClose[i].addEventListener("click", () => {
        windows[i].classList.remove("active")
        if(windows[i].id == apps[i].id){
            apps[i].classList.remove("active")
        }
    })
}

//movimentando as janelas
const winTittleBar = document.querySelectorAll(".winTittleBar")

for(let i = 0; i < winTittleBar.length; i++){
    winTittleBar[i].addEventListener("mousedown", () => {
        for(let i=0; i<windows.length; i++) {
            const move = (e) => {
                windows[i].style.left = `${e.clientX - offSetX}px`
                windows[i].style.top = `${e.clientY - offSetY}px`
                windows[i].style.transitionDuration = "0s"
            }
        
            windows[i].addEventListener("mousedown", (e) => {
                offSetX = e.clientX - windows[i].offsetLeft
                offSetY = e.clientY - windows[i].offsetTop
                document.addEventListener("mousemove", move)
                for(let i = 0; i < windows.length; i++) {
                    windows[i].style.zIndex = "auto"
                }
                windows[i].style.zIndex = 2
            })
        
            document.addEventListener("mouseup", () => {
                document.removeEventListener("mousemove", move)
                windows[i].style.transitionDuration = "0.3s"
            })
        }
    })
}

 var matriz = [ [1,2,3],
                [4,5,6],
                [7,8,9] ];

    for(let lin=0 ; lin<3 ; lin++){
        for(let col=0; col<3 ; col++){
            console.log(matriz[lin][col]);
        }
    }
