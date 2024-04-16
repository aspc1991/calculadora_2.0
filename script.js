//muestra un mensaje de bienvenida
alert("hola 😉 , bienvenid@ a la calculadora 👍");

//solicita al usuario que ingrese el primer numero y lo convierte en numero flotante
var numero1 = parseFloat(prompt("por favor ingresa un numero del 0 al ♾️"));

//muestra el numero ingresado por el ususario
alert(" 🤓elegiste el numero  "  + numero1 + "❓");

//solicita al usuario que ingres el segundo numero y lo convierte en flotante 
var numero2 = parseFloat(prompt("por favor ingresa un numero del 0 al ♾️"));

//muestra el numero ingresado por el ususario
alert(" 🤭tu segundo numero es "+ numero2 + "❓");

//solicita al usuario que eliga la operacion
alert("elige la operacion que deseas hacer con los numero 🤷🏼‍♂️ " + numero1 + " y " + numero2);

//solicita al usuario que ingrese una operacion y la convierta en numero entero
var operacion = parseInt(prompt("elige una opcion.\n1 es Suma➕ .\n2 es Resta➖ .\n3 es Multiplicacion✖️ .\n4 es Division➗"));

//variale para almacenar  el resultado de la operacion
var resultado;

//variable para almacenar el nombre de la operacion
var nombre="";

//verifica que operacion a elegido el ususario y realiza la operacion correspondiente 
if(operacion == 1){
    resultado = numero1 + numero2;
    nombre = "💅🏼 la suma es " + resultado + "        Super facil 😂";
}else if(operacion == 2){
    resultado = numero1 - numero2;
    nombre = "💅🏼 la resta es " + resultado + "       Ponme algo mas dificil 🙊 ";
}else if(operacion == 3){
    resultado = numero1 * numero2;
    nombre = "💅🏼 la multiplicacion es " + resultado +"   Lo hice con los ojos cerrados 🙈";
}else if(operacion == 4){
    if(numero2 !== 0){
        resultado = numero1 / numero2;
        nombre = "💅🏼 la division es " + resultado +"    Ponme  algo mas dificil 🙊";
    }else{
        nombre="no se puede dividir por cero 🤦🏼‍♂️ " ;
    }   
} else{
    nombre="🙅🏼‍♂️operacion no valida 🙅🏼 ";
}

//muestra el resultado de la operacion
alert(nombre);

//muestra los numeros ingresados por el usuario y la operacion
document.write ("los numeros que ingresaste fueron " + numero1 + " y " + numero2 + " y el resultado de la operacion de " + nombre);
