function asignarTextoElemento(elemento, texto) {
    let elementoHtml = document.querySelector(elemento);
    elementoHtml.innerHTML = texto;
    return;
}

function actionClick(){
    let numeroDeUsuario = parseInt(document.getElementById('valorUsuario').value);

    if (numeroDeUsuario == numeroSecreto){
        asignarTextoElemento("p", "Acertaste el numero");
         
    } else {
        if (numeroDeUsuario > numeroSecreto) {
            asignarTextoElemento("P", "El numero es menor")
        } else {
            asignarTextoElemento("P", "El numero es mayor")
        }
        
    }
    
}

function reiniciarJuego() {
    numeroSecreto = generarNumeroSecreto()
    asignarTextoElemento("p", "Ingrese un numero")
    // console.log(numeroSecreto)

    function limpiarInput() {
        document.getElementById('valorUsuario').value = ''; // Limpiar el campo de entrada
    }
    // Asignar evento al botón
    document.getElementById('btnEnviar').addEventListener('click', function() {limpiarInput();});


}

let numeroSecreto = generarNumeroSecreto();
// console.log(numeroSecreto)

function generarNumeroSecreto() {
    return Math.floor(Math.random()*10)+1;
}



asignarTextoElemento("h1", "Bienvenido")
asignarTextoElemento("p", "Ingrese un numero")





/*
//Variables
let numeroMaximoPosible = 100;
let numeroSecreto = Math.floor(Math.random()*numeroMaximoPosible)+1;
let numeroUsuario = 0;
let intentos = 1;

//let palabraVeces = 'vez';
let maximosIntentos = 6;


while (numeroUsuario != numeroSecreto) {
    numeroUsuario = parseInt(prompt(`Me indicas un número entre 1 y ${numeroMaximoPosible}  por favor:`));

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
        if (intentos > maximosIntentos) {
            alert(`Llegaste al número máximo de ${maximosIntentos} intentos`);
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




function dobel(saludo){
    return console.log(`¡Hola, ${saludo*saludo}!`)
}

saludar()


*/