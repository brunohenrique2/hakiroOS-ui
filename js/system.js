/*====================FUNÇÕES DO TEMPO====================*/

let timer = document.querySelector("#timer")
let date = document.querySelector("#date")

/*====================Atualizar a hora e a data em tempo real====================*/
setInterval(() => {
    const dateNow = new Date()
    timer.innerHTML = dateNow.toLocaleTimeString()
    date.innerHTML = dateNow.toLocaleDateString()
}, 1000)

/*====================FUNCÕES DE ENERGIA====================*/
let btnEndSystem = document.querySelector("#endSystem")
let btnRestartSystem = document.querySelector("#restartSystem")
let loaderStart = document.querySelector("#loaderStart")
let loaderEnd = document.querySelector("#loaderEnd")
let loaderRestart = document.querySelector("#loaderRestart")

function desligar() {
    loaderEnd.classList.add("hidden")
}

btnEndSystem.addEventListener("click", () => {
    loaderEnd.classList.remove("hidden")
    setInterval(desligar, 5000)
})

function restart() {
    window.location.reload()
}

btnRestartSystem.addEventListener("click", () => {
    loaderRestart.classList.remove("hidden")
    setInterval(restart, 5000)
})

/*====================Processado junto com o carregamento da pagina====================*/
window.onload = () => {
    loaderStart.classList.add("hidden")
    loaderStart.style.display = "none"

    /*====================CARREGAMENTO DOS TEMAS DA PAGINA====================*/
    wallpaper.style.backgroundImage = localStorage.getItem("wallpaper")
    cssRoot.style.setProperty("--bg-color1", localStorage.getItem("--bg-color1"))
    cssRoot.style.setProperty("--bg-color2", localStorage.getItem("--bg-color2"))
    cssRoot.style.setProperty("--bg-color3", localStorage.getItem("--bg-color3"))
    cssRoot.style.setProperty("--color", localStorage.getItem("--color"))
    cssRoot.style.setProperty("--color2", localStorage.getItem("--color2"))
    cssRoot.style.setProperty("--color3", localStorage.getItem("--color3"))
    cssRoot.style.setProperty("--border-color", localStorage.getItem("--border-color"))
    cssRoot.style.setProperty("--box-shadow-color", localStorage.getItem("--box-shadow-color"))
}
