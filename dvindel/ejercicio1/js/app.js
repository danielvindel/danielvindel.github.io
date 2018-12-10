function ocultarTexto(){
    var noticias = document.getElementById("noticias");
    if(noticias.style.display == "none"){
        noticias.style.display = "flex";
    } else if(noticias.style.display == "flex"){
        noticias.style.display = "none";
    }
}