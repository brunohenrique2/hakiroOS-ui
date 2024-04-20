appSettings.addEventListener("click", () => {
    winSettings.openWindowStart(appSettings.id)
    winStart.classList.remove("active")
})

for(let i = 0; i < windows.length; i++) {
    if(windows[i].id == appSettings.id) {
        const winSettingsBar = document.createElement("div")
        const themes = document.createElement("div")
        const optionThemesIcon = document.createElement("span")
        const optionThemesName = document.querySelector("p")
        const winSettingsTheme = document.createElement("div")
        const settingsThemeTittle = document.createElement("h1")
        const selectTheme = document.createElement("div")
        const lightMode = document.createElement("div")
        const lightModeTittle = document.createElement("p")
        const darkModeTittle = document.createElement("p")
        const darkMode = document.createElement("div")



        winSettingsBar.setAttribute("id", "winSettingsBar")
        themes.setAttribute("id", "themes")
        themes.classList.add("winSettingsOptions")
        optionThemesIcon.classList.add("material-symbols-rounded")
        optionThemesIcon.innerHTML = "draw"
        optionThemesName.innerHTML = "Custumize"
        winSettingsTheme.setAttribute("id", "winSettingsTheme")
        settingsThemeTittle.setAttribute("id", "settingsThemeTittle")
        settingsThemeTittle.innerHTML = "Themes"
        selectTheme.setAttribute("id", "selectTheme")
        lightMode.setAttribute("id", "lightMode")
        lightMode.classList.add("themeOptions")
        lightModeTittle.classList.add("nameTheme")
        lightModeTittle.innerHTML = "Light"
        darkMode.setAttribute("id", "darkMode")
        darkMode.classList.add("themeOptions")
        darkModeTittle.classList.add("nameTheme")
        darkModeTittle.innerHTML = "Dark"

        
        windows[0].appendChild(winSettingsBar)
        winSettingsBar.appendChild(themes)
        themes.appendChild(optionThemesIcon)
        themes.appendChild(optionThemesName)
        winSettingsBar.appendChild(winSettingsTheme)
        winSettingsTheme.appendChild(settingsThemeTittle)
        winSettingsTheme.appendChild(selectTheme)
        selectTheme.appendChild(lightMode)
        lightMode.appendChild(lightModeTittle)
        selectTheme.appendChild(darkMode)
        darkMode.appendChild(darkModeTittle)
    }
}

let btnTheme = document.querySelector("#themes")
let winSettingsTheme = document.querySelector("#winSettingsTheme")

btnTheme.addEventListener("click", () => {
    winSettingsTheme.classList.add("active")
})

/*
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
*/