/*====================TEMAS DO SISTEMA====================*/

let cssRoot = document.querySelector(":root")
let btnLightMode = document.querySelector("#lightMode")
let btnDarkMode = document.querySelector("#darkMode")
let wallpaper = document.querySelector("#main")

/*====================TEMA CLARO====================*/
btnLightMode.addEventListener("click", () => {
    btnLightMode.classList.add("active")
    btnDarkMode.classList.remove("active")

    localStorage.setItem("--bg-color1", "#eeeeee")
    localStorage.setItem("--bg-color2", "#eeeeee66")
    localStorage.setItem("--bg-color3", "#eeeeee99")
    localStorage.setItem("--color", "#000000")
    localStorage.setItem("--color2", "#4c1036")
    localStorage.setItem("--color3", "#911e72")
    localStorage.setItem("--border-color", "#eeeeee99")
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

/*====================TEMA ESCURO====================*/

btnDarkMode.addEventListener("click", () => {
    btnDarkMode.classList.add("active")
    btnLightMode.classList.remove("active")

    localStorage.setItem("--bg-color1", "#1f1f1f")
    localStorage.setItem("--bg-color2", "#00000066")
    localStorage.setItem("--bg-color3", "#00000099")
    localStorage.setItem("--color", "#eeeeee")
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