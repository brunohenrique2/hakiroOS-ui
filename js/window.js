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

let addWallpaper = document.querySelector("#addWallpaper")


class Windows {
    constructor(id) {
        
        const main = document.querySelector("#main")
        const window = document.createElement("div")
        const winTittleBar = document.createElement("div")
        const winTittle = document.createElement("div")
        const winOptionsBox = document.createElement("div")
        const btnClose = document.createElement("span")
        const btnResize = document.createElement("span")
        const btnMinimize = document.createElement("span")
        const iconApp = document.createElement("span")

        btnClose.innerHTML = "close"
        btnResize.innerHTML = "fullscreen"
        btnMinimize.innerHTML = "remove"
        iconApp.innerHTML = "settings"

        window.id = id

        window.classList.add("window")
        winTittleBar.classList.add("winTittleBar")
        winTittle.classList.add("winTittle")
        winOptionsBox.classList.add("winOptionsBox")
        btnClose.classList.add("material-symbols-rounded", "winOptions", "winClose")
        btnResize.classList.add("material-symbols-rounded", "winOptions", "winResize")
        btnMinimize.classList.add("material-symbols-rounded", "winOptions", "winMinimize")
        iconApp.classList.add("material-symbols-rounded")

        main.appendChild(window)
        window.appendChild(winTittleBar)
        winTittleBar.appendChild(winTittle)
        winTittle.appendChild(iconApp)
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

    closeWindow(id) {
       
    }

    resizeWindow() {
        for(i = 0; i < winResize.length; i++) {
            winResize[i].addEventListener("click", () => {
                winResize.innerHTML = "fullscreen_exit"
            })
        }
    }
}

/*
appSettings.addEventListener("click", () => {
    for(i = 0; i < windows.length; i++) {
        windows[i].classList.add("active")
        windows[i].appendChild = 
        `
        <div id="winSettingsBar">
            <div id="themes" class="winSettingsOptions">
                <span class="material-symbols-rounded">draw</span>
                <p>Theme</p>
            </div>
        </div>
        <div id="winSettingsTheme">
            <h2 id="settingsThemeTittle">Theme</h2>
            <div id="selectTheme">
                <div id="lightMode" class="themeOptions">
                    <p class="nameTheme">Light</p>
                </div>
                <div id="darkMode" class="themeOptions">
                    <p class="nameTheme">Dark</p>
                </div>
            </div>
            <!--
                <div id="selectWallpaper">
                    <h2 id="settingsThemeTittle">Wallpaper</h2>
                    <label id="btnAddWallpaper" for="addWallpaper">
                        <span class="material-symbols-rounded">add</span>
                        <input type="file" name="addWallpaper" id="addWallpaper">
                    </label>
                </div>
            -->
        </div>
        `

    }
    
    winStart.classList.remove("active") 

})


*/