/* CONDICIONALES
1. ¿Que es una condicional?
Es un fragmento de codigo que ejecuta si cumple una determinada condicion elegida.

2. ¿Que tipo de condicionales existen en JavaScript y cuales son sus diferencias?
    -if/else: Se ejecuta siempre y cuando la condicion de if se cumpla,
                caso contrario se ejecuta el Else, en caso de tener uno.
    -switch: Configuras diversos casos, y el caso que coincida se ejecuta.

3. ¿Puedo combinar funciones y condicionales?
Claro que si, se puede combinar sin ningun problema.
*/

// Codigo base de ejemplo
const tipoDeSuscripcion = "Basic";

switch (tipoDeSuscripcion) {
   case "Free":
       console.log("Solo puedes tomar los cursos gratis");
       break;
   case "Basic":
       console.log("Puedes tomar casi todos los cursos durante un mes");
       break;
   case "Expert":
       console.log("Puedes tomar casi todos los cursosdurante un annio");
       break;
   case "ExpertPlus":
       console.log("Tu y alguien mas pueden tomar TODOS los cursosdurante un annio");
       break;
}


// Cambiaremos el switch por una combinacion de if
if (tipoDeSuscripcion==="Free"){
    console.log("Solo puedes tomar los cursos gratis");
}
else if (tipoDeSuscripcion==="Basic"){
    console.log("Puedes tomar casi todos los cursos durante un mes");
}
else if (tipoDeSuscripcion==="Expert"){
    console.log("Puedes tomar casi todos los cursosdurante un annio");
}
else if (tipoDeSuscripcion==="ExpertPlus"){
    console.log("Tu y alguien mas pueden tomar TODOS los cursosdurante un annio");
}
else{
    console.log("Suscripcion no valida");
}