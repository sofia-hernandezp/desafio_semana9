document.getElementById("buttonText").addEventListener("click", function(){
    localStorage.setItem("text", document.getElementById("inputText").value);
    document.getElementById("inputText").value = ""
})