let intentos = 0;
let listaNumerosSorteados = [];
let numeroSecreto = 0;



function asignarTextoElemento(elemento, texto) {
    let elementoHtml = document.querySelector(elemento);
    elementoHtml.innerHTML = texto;
    return;
}

function actionClick(){
    let numeroDeUsuario = parseInt(document.getElementById('valorUsuario').value);
      
    if (numeroDeUsuario === "" || isNaN(numeroDeUsuario)){
        asignarTextoElemento("p", " ⚠️ ingrese un numero primero")

    } else {
        
        if (numeroDeUsuario == numeroSecreto ){
            asignarTextoElemento("p", `✅ Acertaste el numero en ${intentos} ${(intentos === 1) ? 'intento':'intentos' }` );
            document.getElementById('btnEnviar').removeAttribute('disabled')
        } else {
            if (numeroDeUsuario > numeroSecreto) {
                asignarTextoElemento("P", "El numero es menor")
            } else {
                asignarTextoElemento("P", "El numero es mayor")
            }
            
        }
        intentos ++;
        limpiarInput();
        // console.log(intentos)
    }

    return;
    
}


function limpiarInput() {
    document.getElementById('valorUsuario').value = ''; // Limpiar el campo de entrada
}

function reiniciarJuego() {
    condicionesIniciales();
    // console.log(numeroSecreto)
    return;
}


function generarNumeroSecreto() {
    let numeroSecreto = Math.floor(Math.random()*10)+1;

    if (listaNumerosSorteados.includes(numeroSecreto)) {
        return generarNumeroSecreto();
    } else {
        listaNumerosSorteados.push(numeroSecreto);
    }
}


function condicionesIniciales (){
    numeroSecreto = generarNumeroSecreto();
    intentos = 1;
    limpiarInput();
    asignarTextoElemento("h1", "Bienvenido")
    asignarTextoElemento("p", "Ingrese un numero")
    document.querySelector('#btnEnviar').setAttribute('disabled', 'true')
}

condicionesIniciales();






/*
//Variables
let numeromáximoPosible = 100;
let numeroSecreto = Math.floor(Math.random()*numeromáximoPosible)+1;
let numeroUsuario = 0;
let intentos = 1;

//let palabraVeces = 'vez';
let máximosIntentos = 6;


while (numeroUsuario != numeroSecreto) {
    numeroUsuario = parseInt(prompt(`Me indicas un número entre 1 y ${numeromáximoPosible}  por favor:`));

    console.log(typeof(numeroUsuario));
    if (numeroUsuario == numeroSecreto) {
        //Acertamos, fue verdadera la condición
        alert(`Acertaste, el número es: ${numeroUsuario}. Lo hiciste en ${intentos} ${intentos == 1 ? 'vez' : 'veces' }`);
    } else {
        if (numeroUsuario > numeroSecreto) {
            alert('El número secreto es menor');
        } else {
            alert('El número secreto es mayor');
        }
        //Incrementamos el contador cuando no acierta
        //intentos = intentos + 1;
        //intentos += 1;
        intentos++;

        //palabraVeces = 'veces';
        if (intentos > máximosIntentos) {
            alert(`Llegaste al número máximo de ${máximosIntentos} intentos`);
            break;
        }
        //La condición no se cumplió
        //alert('Lo siento, no acertaste el número');
    }
}
*/




/*
// HORA DE PRACTICAR 

function hMundo(){
    return console.log("Hola mundo")
}
hMundo()




function saludar(saludo){
    return console.log(`¡Hola, ${saludo}!`)
}

saludar("faiver")




function doble(saludo){
    return console.log(`¡Hola, ${saludo*saludo}!`)
}

saludar()


*/