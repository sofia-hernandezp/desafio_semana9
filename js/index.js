//window.localStorage.setItem("text","")
document.getElementById("buttonText").addEventListener("click",(e)=>{
    valoresActuales = window.localStorage.getItem("text")
    a_guardar = `<li>${document.getElementById("inputText").value}</li>`
    window.localStorage.setItem("text",a_guardar)
    document.getElementById("inputText").value = ""
})

//setItem son 2 parametros, el nombre de la propiedad y el valor que se le asigna
//getItem solo 1 parametro que es el nombre de la propiedad a leer