//Valor de los SPAN
let spanDia = document.querySelector('.cuerpo__days');
let spanMes = document.querySelector('.cuerpo__months');
let spanAño = document.querySelector('.cuerpo__years');

// Objeto de la fecha 
const fechaActual = new Date();

// Segun el metodo se obtiene dia, mes o Año del objeto.
const actualDia = fechaActual.getDate();
const actualMes = fechaActual.getMonth() + 1;  // están indexados desde 0, hasta 11 que seria diciembre
const actualAño = fechaActual.getFullYear();

let diaElegido = 0;
let mesElegido = 0;
let añoElegido = 0;

const errorElemento1 = document.createElement('p');
const errorElemento2 = document.createElement('p');
const errorElemento3 = document.createElement('p');

const lDia = document.getElementById('lDay')
const lMes = document.getElementById('lMonth')
const lAño = document.getElementById('lYear')

const inputDia = document.getElementById('Day');
const inputMes = document.getElementById('Month');
const inputAño = document.getElementById('Year');



const calcular = () => {
    // Valor de los Inputs
    const valorDia = document.getElementById('Day').value;
    const valorMes = document.getElementById('Month').value;
    const valorAño = document.getElementById('Year').value;

    
    
    // Si la fecha elegida es la misma que la anterior, se vacia.
    if(diaElegido == valorDia && mesElegido == valorMes  && añoElegido == valorAño ){
        spanAño.textContent = '--'; 
        spanMes.textContent = '--'; 
        spanDia.textContent = '--';

        diaElegido = 0;
        mesElegido = 0;
        añoElegido = 0;

    }
    else{
        // Se realiza la diferencia y se muestra en el span
        spanDia.textContent = actualDia - valorDia;
        diaElegido = valorDia;

        spanMes.textContent = actualMes - valorMes;
        mesElegido = valorMes;

        spanAño.textContent = actualAño - valorAño;
        añoElegido = valorAño;

    }

   // Si la fecha es negativa en algunos de sus valores. 
    if(spanDia.textContent < 0 ){
        spanDia.textContent = '--';
        lDia.classList.add('errorLabel');
        inputDia.classList.add('errorBorde'); 
        errorElemento1.textContent ='Must be a valid day';
        inputDia.after(errorElemento1);
        errorElemento1.classList.add('error')
    }
    else{
        lDia.classList.remove('errorLabel'); // Quita la clase 
        inputDia.classList.remove('errorBorde'); // Quita la clase 
        errorElemento1.remove() // Remueve el Parrafo
    }

    if(spanMes.textContent < 0 ){
        spanMes.textContent = '--';
        lMes.classList.add('errorLabel');
        inputMes.classList.add('errorBorde'); 
        errorElemento2.textContent ='Must be a valid month';
        inputMes.after(errorElemento2);
        errorElemento2.classList.add('error')
    }
    else{
        lMes.classList.remove('errorLabel'); // Quita la clase 
        inputMes.classList.remove('errorBorde'); // Quita la clase 
        errorElemento2.remove() // Remueve el Parrafo
    }

    if(spanAño.textContent < 0 ){
        spanAño.textContent = '--';
        lAño.classList.add('errorLabel');
        inputAño.classList.add('errorBorde'); 
        errorElemento3.textContent ='Must be in the past';
        inputAño.after(errorElemento3);
        errorElemento3.classList.add('error')
    }
    else{
        lAño.classList.remove('errorLabel'); // Quita la clase 
        inputAño.classList.remove('errorBorde'); // Quita la clase 
        errorElemento3.remove() // Remueve el Parrafo
    }
       
   }
   




