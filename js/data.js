document.addEventListener("DOMContentLoaded",(e) => {
    document.getElementById("data").innerHTML = `<ul>${window.localStorage.getItem("text")}</ul>`
})
