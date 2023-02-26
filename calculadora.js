window.addEventListener('load', ()=>{ //Escuchamos cuando se carga el documento

    //Creamos dos constantes y se guardan los elementos que necesitamos darle la funcionalidad
    const display = document.querySelector('.calculator-display');
    const keypadButtons = document.getElementsByClassName('keypad-button'); 
    .

    //Creamos otra constante para convertir los botones en un array
    const keypadButtonsArray = Array.from(keypadButtons);

    // Iterar por el array de botones creado
    keypadButtonsArray.forEach((button) =>{

        //A cada boton le agregamos un evento al darle click
        button.addEventListener('click', () =>{
            calculadora(button, display);
        })
    })



});

function calculadora(button, display){
    switch(button.innerHTML){
       case 'C':
        borrar(display);
        break;
        
       case '=':
        calcular(display);
        break;

        default:
            actualizar(display,button);
            break;
    }
}

function calcular(display){
    //tomar el string, resolverlo, guardarlo  en el inner
    display.innerHTML = eval(display.innerHTML)
}

function actualizar(display, button){
    if (display.innerHTML == 0){
        display.innerHTML = '';
    }
    display.innerHTML += button.innerHTML;
    //display.innerHTML = display.innerHTML + button.innerHTML
}

function borrar(display){
    display.innerHTML = 0;
}