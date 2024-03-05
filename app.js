
//let parrafo= document.querySelector('p');
//parrafo.innerHTML = "Indica un número entre 1 y 10";
let numeroSecreto = 0;
let intentos = 0;
let listaNumerosSorteados = [];
let numeroMaximo= 10; 

function asignarTextoElemento (elemento, texto) {
    let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML = texto;
}



function verificarIntento() {
    // let numeroDeUsuario = document.querySelector('input');
    let numeroDeUsuario = parseInt(document.getElementById('valorUsuario').value); //función para seleecionar or id de html
    // como return retorna el elemento y en este caso se desea su valor numérico se agrega el .value
    // parsInt transforma el retorno del input que es string en un número para que se pueda comparar numero con numero.
    //console.log(typeof(numeroDeUsuario));
    //console.log(typeof(numeroSecreto));
    //console.log(numeroSecreto);
    //console.log(numeroDeUsuario);
    //console.log(numeroDeUsuario==numeroSecreto);
    //console.log(numeroDeUsuario===numeroSecreto); // el triple igual hace que al comparar tengan que ser iguales en valor y en tipo de dato o elemento
    //console.log(intentos);
    if (numeroDeUsuario===numeroSecreto){
        asignarTextoElemento('p',`Acertaste el número en ${intentos} ${(intentos ==1) ? 'vez' : 'veces'}`);
        //Operador ternario es lo que permite cambiar la palabra de 'vez' a 'veces' dependiendo de intentos es 1 o mayor.
        // osea forma resumida del if/else en una sola linea de código
        document.getElementById('reiniciar').removeAttribute('disabled');
    } else {
        //El usuario no acertó.
        if (numeroDeUsuario > numeroSecreto){
            asignarTextoElemento('p','Número secreto es menor');
        } else if (numeroDeUsuario < numeroSecreto){
            asignarTextoElemento('p','Número secreto es mayor');
        }
        intentos++; 
        limpiarCaja(); 
    }
    return;
}

function limpiarCaja(){
    //let valorCaja = document.querySelector('#valorUsuario'); //el númeral permite usar el id de un elemento en html para usar el querySelector
    //valorCaja.value = ''; 
    document.querySelector('#valorUsuario').value=''; //Forma simplificada
}

function generaNumeroSecreto() {
    
    let numeroGenerado =  Math.floor(Math.random()*numeroMaximo)+1; // nos retorna el número secreto creado
    console.log(numeroGenerado);
    console.log(listaNumerosSorteados);
    //Si ya se mostraron todos los numeros posibles 
    if(listaNumerosSorteados.length == numeroMaximo){
        asignarTextoElemento('p','Ya se asignaron todos los números posibles');
    } else {

        //Si el número generado está en la lista
        if (listaNumerosSorteados.includes(numeroGenerado)){
            return generaNumeroSecreto();
        } else {
            listaNumerosSorteados.push(numeroGenerado);
            return numeroGenerado;
        }
    }
}

function condicionesIniciales() {
    asignarTextoElemento('h1','Juego del Numero Secreto '); 
    asignarTextoElemento('p',`Indica un número entre 1 y ${numeroMaximo}`); 
    numeroSecreto = generaNumeroSecreto();
    intentos = 1;
}

function reiniciarJuego(){
    //limpiar la caja
    limpiarCaja();
    //indicar mensaje de intervalo de numeros 
    //generar el número aleatorio 
    //reiniciar intentos
    condicionesIniciales();
     //deshabilitar el número de juego
    document.querySelector('#reiniciar').setAttribute('disabled','true'); //setea un atributo y le asigna un valor verdadero o falso en este caso

}

condicionesIniciales();
