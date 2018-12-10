function validar(){
    var nombre = document.forms[""]["nombre"];
    var email = document.forms[""]["email"];
    if(nombre.value==""){       
        alert("El campo nombre esta vacio");
        nombre.focus();
        nombre.style.border = "1px solid red";
        return false;
    } else if(email.value==""){
        alert("Rellena el email");
        email.focus();
        email.style.border = "1px solid red";
        return false;
    }
}