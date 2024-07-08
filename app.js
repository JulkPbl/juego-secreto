
let numeroSecreto = 0;
let intentos = 0;
let listaNumerosSorteados = [];
let numeroMaximo = 10;

console.log(numeroSecreto);

function asignarTextoElemento(elemento, texto){
    let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML = texto;
    return;
}

function verificarIntento(){
    //let numeroUsuario = document.querySelector('input');
    let numeroUsuario = parseInt(document.getElementById('valorUsuario').value);
    
    //igual numero y tipo
    if (numeroUsuario===numeroSecreto){
        asignarTextoElemento('p',`Acertaste el número en ${intentos} ${(intentos===1) ? 'vez' : 'veces' }`);
        document.getElementById('reiniciar').removeAttribute('disabled');
    } else{
        
        //El usuario no acerto
        if(numeroUsuario>numeroSecreto){
            asignarTextoElemento('p','El numero secreto es menor');
        }else{
            asignarTextoElemento('p','El numero secreto es mayor');
        }
        intentos++;
        limpiarCaja();
    }
    return;
}


function limpiarCaja(){
    document.querySelector('#valorUsuario').value = '';
}


function generarNumeroSecreto(){
    let numerogenerado = Math.floor(Math.random()*numeroMaximo)+1;
    
    console.log(numerogenerado);
    console.log(listaNumerosSorteados);
    
    //si ya sortemaos todos los numeros
    if(listaNumerosSorteados.length == numeroMaximo){
        asignarTextoElemento('p','Ya se sortearon todos los numeros posibles, vuelve a comenzar otra vez');
        //reiniciar lista 
        listaNumerosSorteados.length=0;
        return generarNumeroSecreto();
    } else {

    //si el numerogenerado esta incluida en la lista
    
    if (listaNumerosSorteados.includes(numerogenerado)){
        return generarNumeroSecreto();
    } else {
        //si el numerogenerado no esta en la lista
        listaNumerosSorteados.push(numerogenerado);
        return numerogenerado;
    }
    }
}


function condicionesIniciales(){
    asignarTextoElemento('h1', 'Juego del numero secreto');
    asignarTextoElemento('P', `Indicar un numero del 1 al ${numeroMaximo}`);
    numeroSecreto = generarNumeroSecreto();
    intentos=1;
}
function reiniciarJuego(){
    //limpiar caja
    limpiarCaja();

    //indicar mensaje de intervalo
    //reiniciar numerosecreto
    //inicializar el numero de intentos
    condicionesIniciales();
    //desabilitar el boton nuevojuego
    document.querySelector('#reiniciar').setAttribute('disabled','true');
}

condicionesIniciales();
