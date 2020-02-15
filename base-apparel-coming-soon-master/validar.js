function validar(){
    var correo, exp;
    
    correo = document.getElementById("correo").value;
    
exp = /\w+@\w+\.+[a-z]/;

if(correo === "" ){
    alert ("The email address is not formatted correctly");
    return false;

}
else if(!exp.test(correo)){
    alert ("The email address is not formatted correctly");
    return false;
}
}