///////////////////////
//iniciando variaveis
////////////////////////
var segundos = 0;
var minutos = 0;
var horas = 0;
var mlsec = 0;
var interval;
//////////////////////////////
//Pegando todos os elementos
/////////////////////////////
function pegaelemento() {
    let h1sec = document.getElementById('segundos');
    let h1min = document.getElementById('minutos');
    let h1hour = document.getElementById('horas');
    let h1ml = document.getElementById('milisegundos');
    let bttplay = document.getElementById('playpause');
    return { h1sec, h1min, h1hour, h1ml, bttplay };
}
///////////////////////////
//Play/Pause no mesmo botão
///////////////////////////
const PlayPause = (t) => {
    const action = t.getAttribute('data-action');
    return actions[action](t);
}
const actions = {
    Play: (t) => {
        let { bttplay } = pegaelemento();
        interval = setInterval(time, 10);
        parar(bttplay);
    },
    Pause: (t) => {
        let { bttplay } = pegaelemento();
        clearInterval(interval);
        iniciar(bttplay);
    }
}
//////////////////////////////////////////////
//muda style do botão ao clicar em play/pause
//////////////////////////////////////////////
function parar(bttplay) {
    bttplay.style.backgroundColor = 'black';
    bttplay.style.color = 'white';
    bttplay.innerHTML = ' Parar';
    bttplay.setAttribute('data-action', 'Pause');
}
function iniciar(bttplay) {
    bttplay.style.backgroundColor = 'white';
    bttplay.style.color = 'black';
    bttplay.innerHTML = 'Iniciar';
    bttplay.setAttribute('data-action', 'Play');
}
/////////////////////////////
//Reinicia o cronometro
////////////////////////////
function reset() {
    clearInterval(interval);
    let { h1sec, h1min, h1hour, h1ml, bttplay } = pegaelemento();
    voltar0(h1sec, h1min, h1hour, h1ml);
    iniciar(bttplay);
}

function voltar0(h1sec, h1min, h1hour, h1ml) { 
    segundos = 0;
    minutos = 0;
    horas = 0;
    mlsec = 0;
    h1sec.innerHTML = `<h1>00</h1>`;
    h1min.innerHTML = `<h1>00</h1>`;
    h1hour.innerHTML = `<h1>00</h1>`;
    h1ml.innerHTML = `<h1>00</h1>`;
}

///////////////////////
//Inicia cronometro
///////////////////////
function time() {
    milisecond();
}
function hours() {
    
    if (horas == 24) {
        clearInterval(interval);
    }
      
}
////////////////////
//Incrementa Horas
////////////////////
function minutes() {

    if (minutos == 60) {
        horas++;
        minutos = 0;
    }
    hours();
}
//////////////////////
//Incrementa Minutos
/////////////////////
function second() {

    if (segundos == 60) {
        minutos++;
        segundos = 0;
    }
    minutes();
}
////////////////////////////////////////////
//Inicia o Cronometro/Incrementa Segundos
//////////////////////////////////////////
function milisecond() {
    mlsec++;
    if (mlsec == 100) {
        segundos++;
        mlsec = 0;
    }
    second();
    apresent();
}
/////////////////////////
//Apresenta o tempo
////////////////////////
function apresent() {
    let { h1sec, h1min, h1hour, h1ml } = pegaelemento();
    if (mlsec < 10) {
        h1ml.innerHTML = `<h1>0${mlsec}</h1>`;
    } else {
        h1ml.innerHTML = `<h1>${mlsec}</h1>`;
    }
    if (segundos < 10) {
        h1sec.innerHTML = `<h1>0${segundos}</h1>`;
    } else {
        h1sec.innerHTML = `<h1>${segundos}</h1>`;
    }
    if (minutos < 10) {
        h1min.innerHTML = `<h1>0${minutos}</h1>`;
    } else {
        h1min.innerHTML = `<h1>${minutos}</h1>`;
    }
    if (horas < 10) {
        h1hour.innerHTML = `<h1>0${horas}</h1>`;
    } else {
        h1hour.innerHTML = `<h1>${horas}</h1>`;
    }
}
//////////////////////
//rascunho do codigo
/////////////////////

//function time() {
//     console.log(time)
//     segundos++;
//     let { h1sec, h1min, h1hour } = pegaelemento();
//     if (minutos == 60) {
//         horas++;
//         if (horas < 10) {
//             h1hour.innerHTML = `<h1>0${horas}</h1>`
//         } else {
//             h1hour.innerHTML = `<h1>${horas}</h1>`
//         }
//     }
//         if (minutos == 60) {
//             minutos = 0;
//             if (minutos < 10) {
//                 h1min.innerHTML = `<h1>0${minutos}</h1>`;
//             } else {
//                 h1min.innerHTML = `<h1>${minutos}</h1>`;
//             }
//         } else {
//         if (minutos < 10) {
//             h1min.innerHTML = `<h1>0${minutos}</h1>`;
//         } else {
//             h1min.innerHTML = `<h1>${minutos}</h1>`;
//         }
//        }
//     if (segundos == 59) {
//         minutos++;
//     }
//     if (segundos == 60) {
//         segundos = 0;
//         if (segundos < 10 ) {
//             h1sec.innerHTML = `<h1>0${segundos}</h1>`;
//         } else {
//             h1sec.innerHTML = `<h1>${segundos}</h1>`;
//         }
//     } else {
//         if (segundos < 10 ) {
//         h1sec.innerHTML = `<h1>0${segundos}</h1>`;
//     } else {
//         h1sec.innerHTML = `<h1>${segundos}</h1>`;
//     }
//     }
// }
// function ml() {
//     let { h1ml } = pegaelemento();
//     mlsec++;
//     if (mlsec == 100) {
//         mlsec = 0;
//     }
//     h1ml.innerHTML = `<h1>${mlsec}</h1>`
// }