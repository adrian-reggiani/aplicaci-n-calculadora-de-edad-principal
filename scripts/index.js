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


// elemento creado para aparecer debajo de los parrafos
const errorElemento1 = document.createElement('p');
const errorElemento2 = document.createElement('p');
const errorElemento3 = document.createElement('p');

// Label
const lDia = document.getElementById('lDay')
const lMes = document.getElementById('lMonth')
const lAño = document.getElementById('lYear')

// inputs
const inputDia = document.getElementById('Day');
const inputMes = document.getElementById('Month');
const inputAño = document.getElementById('Year');

// Variables para guardar los datos anterior y luego compararlos
let diaElegido = 0;
let mesElegido = 0;
let añoElegido = 0;

// Funciones
function agregarErrorDia(texto){
    lDia.classList.add('errorLabel');
    inputDia.classList.add('errorBorde'); 
    errorElemento1.textContent = texto;
    inputDia.after(errorElemento1);
    errorElemento1.classList.add('error');
}

function agregarErrorMes(texto){
    lMes.classList.add('errorLabel');
    inputMes.classList.add('errorBorde'); 
    errorElemento2.textContent =texto;
    inputMes.after(errorElemento2);
    errorElemento2.classList.add('error');
    
}

function agregarErrorAño(texto){
    lAño.classList.add('errorLabel');
    inputAño.classList.add('errorBorde'); 
    errorElemento3.textContent = texto;
    inputAño.after(errorElemento3);
    errorElemento3.classList.add('error');
}


function calcularDiasMes (valorMes, valorDia){

    if(valorDia >= 31 ){ // Determina los meses con 31 dias
        switch(parseInt(valorMes)){
            case 4:
                agregarErrorDia('must be a valid day of the month');
                spanCero();
            break;

            case 4:
                agregarErrorDia('must be a valid day of the month');
                spanCero();
            break;

            case 6:
                agregarErrorDia('must be a valid day of the month');
                spanCero();
            break;

            case 9:
                agregarErrorDia('must be a valid day of the month');
                spanCero();
            break;

            case 11:
                agregarErrorDia('must be a valid day of the month');
                spanCero();
            break;
        }
    }

  
          

}

function entradaNegativo (valorDia, valorMes, valorAño){
    if(valorDia <= 0 ){
        agregarErrorDia('Must be a valid day');
        document.getElementById('Day').value = '';
       
    }
    if(valorMes <= 0){
        agregarErrorMes('Must be a valid month');
        document.getElementById('Month').value = '';
        
    }
    if(valorAño <= 0){
        agregarErrorAño('Must be in the past');
        document.getElementById('Year').value = '';
        
    }
    
}

function spanCero() {
    spanAño.textContent = '--'; 
    spanMes.textContent = '--'; 
    spanDia.textContent = '--';
}

//Principal
const calcular = () => { 
    
    // Valor de los Inputs
    let valorDia = document.getElementById('Day').value;
    let valorMes = document.getElementById('Month').value;
    let valorAño = document.getElementById('Year').value;

    
    
    
    // Si los campos estan vacios, aparece error y rompe los IF.
    if(valorDia == '' && valorMes == '' && valorAño == ''){ 
        
        agregarErrorDia('This field is required');
        agregarErrorMes('This field is required');
        agregarErrorAño('This field is required');
        
        return;
    }
    
    
    
    // Si la fecha elegida es la misma que la anterior, se vacia.
    if(diaElegido == valorDia && mesElegido == valorMes  && añoElegido == valorAño ){
        spanCero();

        diaElegido = 0;
        mesElegido = 0;
        añoElegido = 0;
        document.getElementById('Day').value = '';
        document.getElementById('Month').value = '';
        document.getElementById('Year').value = '';
    }
    else{

        spanDia.textContent = actualDia - valorDia;
        diaElegido = valorDia;

        spanMes.textContent = actualMes - valorMes;
        mesElegido = valorMes;

        spanAño.textContent = actualAño - valorAño;
        añoElegido = valorAño;

        // Se realiza la diferencia y se muestra en el span

        // let repetirDia = 0; Para que los contadores se tomen su tiempo para el valor final
       
        // repetirDia = actualDia - valorDia;
        // diaElegido = valorDia;
        
        // for(let i = 0; i < repetirDia; i++ ){
        //     setTimeout( () =>{
        //         spanDia.textContent = i + 1;
        //         console.log(spanDia.textContent);
        //     },100 * i + 1  );   
        // }
        
        // let repetirMes = 0;
       
        // repetirMes = actualMes - valorMes;
        // mesElegido = valorMes;
        
        // for(let i = 0; i < repetirMes; i++ ){
        //     setTimeout( () =>{
        //         spanMes.textContent = i + 1;
        //         console.log(spanMes.textContent);
        //     },100 * i + 1  );   
        // }
        // let repetirAño = 0;
       
        // repetirAño = actualAño - valorAño;
        // añoElegido = valorAño;
        
        // for(let i = 0; i < repetirAño; i++ ){
        //     setTimeout( () =>{
        //         spanAño.textContent = i + 1;
        //         console.log(spanAño.textContent);
        //     },100 * i + 1  );   
        // }

    }

   // Si la fecha es negativa en algunos de sus valores, aparece el error 
    if(spanDia.textContent < 0 ){
        spanDia.textContent = '--'; 
        agregarErrorDia('Must be a valid day');
    }
    else{
        lDia.classList.remove('errorLabel'); // Quita la clase 
        inputDia.classList.remove('errorBorde'); // Quita la clase 
        errorElemento1.remove() // Remueve el Parrafo
    }

    if(spanMes.textContent < 0 ){
        spanMes.textContent = '--';
        agregarErrorMes('Must be a valid month')
    }
    else{
        lMes.classList.remove('errorLabel'); // Quita la clase 
        inputMes.classList.remove('errorBorde'); // Quita la clase 
        errorElemento2.remove() // Remueve el Parrafo
    }

    if(spanAño.textContent < 0 ){
        spanAño.textContent = '--';
        agregarErrorAño('Must be in the past');
    }
    else{
        lAño.classList.remove('errorLabel'); // Quita la clase 
        inputAño.classList.remove('errorBorde'); // Quita la clase 
        errorElemento3.remove() // Remueve el Parrafo
    }
    entradaNegativo(valorDia, valorMes, valorAño);

    calcularDiasMes(valorMes, valorDia);
   }
   