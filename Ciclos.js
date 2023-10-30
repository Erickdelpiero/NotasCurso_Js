/* CICLOS
1. ¿Que es un ciclo?
Es un fragmento de código que se repite siempre y cuando se cumpla una condicion.

2. ¿Que tipos de ciclos exiten en Js?
    - For: Se ejecuta con un inicializador. un condicional y un adicionador, el inicializador y el adicionador
            hacen que en algun momento se deje de cumplir la condicion y se cierre el bucle.
    - while: Se ejucuta hasta que la condicion conigurada sea falsa.

3. ¿Que es un ciclo infinito y por que es un problema?
Es un ciclo que nunca cumplira la condicion para cerrar el bucle, es un problema porque ese fragmento de codigo
se ejecutaria indefinidamente y nunca acabaria o permitiria seguir ejecutando el resto del codigo.

4. ¿Puedo mezclar ciclos y condicionales?
Claro que si
*/


// Codigo base de ejemplo
for (let i = 0; i < 5; i++) {
    console.log("El valor de i es: " + i);
}

for (let i = 10; i >= 2; i--) {
    console.log("El valor de i es: " + i);
}

// while del codigo base
let x=0;
while(x<5){
    console.log("El valor de x es: " + x);
    x++;
}

let y=10;
while(y>1){
    console.log("El valor de y es: " + y);
    y--;
}