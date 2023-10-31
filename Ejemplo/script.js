const h1 = document.querySelector('h1');
const p = document.querySelector('p');
const color = document.querySelector('.ColorRojo');
const id = document.querySelector('#Final');
const input= document.querySelector('input');


console.log(h1)                         //Solo imprime lo que hay en la etiqueta h1
console.log([h1, p, color, id, input]); //Al imprimir así, podemos ver en la consola del navegador sus propiedades.


h1.innerHTML= "Cambiando <br> el Título";       //Este comando permite leer HTML
h1.innerText= "Cambiando <br> el Título";       //Este comndo solo lo muestra como texto

console.log(h1.getAttribute('atributo'));       //getAtribute extrae lo que está dentro de atributo
console.log(h1.getAttribute('class'));          //getAtribute extrae lo que está dentro de class

h1.setAttribute('class', 'Rojo');               //Cambiamos el valor del atributo class de verde a rojo
console.log(h1.getAttribute('class'));          //Comprobamos en consola si cambio el valor de class

h1.classList.add('Azul');                       //Podemos agregar una clase
console.log(h1.getAttribute('class'));          //Comprobamos si se agregó la nueva clase

h1.classList.remove('Rojo');                    //Eliminar la clase Rojo
console.log(h1.getAttribute('class'));          //Comprobamos si fue removido Rojo

h1.classList.toggle('Rojo');                    //toggle agrega o quita dependiendo si ya existe (Rojo ya no existe, entonces lo agrega)
h1.classList.toggle('Azul');                    //Azul ya existe, entonces lo quita
console.log(h1.getAttribute('class'));          //Comprobamos los cambios

console.log(h1.classList.contains('Rojo'));     //Devuelve true o false dependiendo si existe o no
console.log(h1.classList.contains('Verde'));


input.value="123";                              //Agregamos un valor por defecto al input



/* Crear un elemento desde cero*/
console.log(document.createElement('span'));    //Crea un span y lo muestr en la consola
console.log(document.createElement('img'));     //Crea un img y lo muestr en la consola


id.innerText= "";                               //Eliminamos el texto del parrafo que tine 'id'


const imagen= document.createElement('img');
imagen.setAttribute('src', 'https://media.licdn.com/dms/image/D4E0BAQFpQLWpog8K7Q/company-logo_200_200/0/1684347655576?e=2147483647&v=beta&t=hkgfOd63xZCNycKhvQXJA5PBoKyVjGMdVm1SAkzoea8');

id.append(imagen);                              //Agregamos la imagen al párrafo que tiene 'id'