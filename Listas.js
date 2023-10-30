/* LISTAS
1. ¿Que es un array?
Es un arreglo [] que puede tener diferentes valores se parados por una coma, analogo a un vector matematico
estos valores pueden ser de naturalezas distintas en un solo array, como numeros, strings, booleanos, etc.

2. ¿Que es un objeto?
Es un arreglo similar a un array {}, pero con etiquetas que genera una llave valor, cada llave tiene su respectivo valor

3. ¿Cuando es mejor usar objetos o arrays?
Arrays se recomienda cuando se quiere agrupar distintos valores en una sola variable.
Los objetos cuando queremos tener una etiqueta para definir ciertos valores.

4. Puedo mezclar arrays con objetos o incluso objeetos con arrays?
Claro, ambos casos son posibles.
*/


// Creamos una funcion que pueda recibir cualquier array como parametro e imprima su primer elemento
let Array=[2,4,6,32,6,7]    //Puede cambiar el valor del array paraa probar
function arreglo(Array){
    return Array[0];
}
arreglo(Array)


// Creamos una funcion que pueda recibir cualquier array como parametro e imprima todos sus elementos uno por uno
function arregloindividual(Array){
    for(i=0; i<Array.length; i++){
        console.log(Array[i])
    }
    
    return
}
arregloindividual(Array)