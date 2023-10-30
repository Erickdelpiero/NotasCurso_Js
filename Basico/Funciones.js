/*  FUNCIONES
1. ¿Que es una funcion?
Una funcion es un fragmento de codigo que permite realizar una accion determinada, con o sin input y devolviendo algo

2. ¿Cuando me sirve usar una funcion en mi codigo?
Cuando realizare un mismo procedimiento u operacion de manera reiterativa o cuando determinado procedimiento u operacion
es muy largo y se prefiere interiorizarlo en una funcion para tener mejor orden.

3. ¿Cual es la diferencia entre parametros y argumentos?
Los parametros son las variables con los que se defunen la funcion, y los argumentos son las variables entrada (input)
cuando se ejecuta la funcion
*/


// Codigo base de ejemplo
const names = "Juan David";
const lastname = "Castro Gallego";
const completeName = names + lastname;
const nickname = "juandc";

console.log("Mi nombre es " + completeName + ", pero prefiero que me digas " + nickname + ".");


// Funcion del codigo base
let nombre = "Juan David";
let apellido = "Castro Gallego";
let apodo= "JD"
const nombreCompleto= nombre + apellido;    //Solo el nombre completo se mantiene constante porque siempre sera
                                            //el nombre mas el apellido

function Saludo(nombreCompleto,apodo){
    console.log("Mi nombre es " + completeName + ", pero prefiero que me digas " + nickname + ".");
}



// Funciones Declartivas: declaran la existencia de la funcion "myfun"
function myfun(){
    return 5;
}

// Funciones de Expresivas: declaran un variable cuyo valor es una funcion "mifun" que se define
var miFuncion= function(a,b){
    return a+b;
}
