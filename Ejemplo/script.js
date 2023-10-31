const h1 = document.querySelector('h1');
const input1 = document.querySelector('#Calculo1');
const input2 = document.querySelector('#Calculo2');
const btn=document.querySelector('#btnSumar');
const R= document.querySelector('#Resultado');


function Click(){
    const x=input1.value;
    const y=input2.value;
    const z=x+y;
    R.innerHTML= "La concatenacion es: " + z;
}