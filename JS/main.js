function saludo() {
   
    let nombre = prompt("Ingresa tu Nombre");
    alert("Lo siento " + nombre + "! ð¤ Me programaron solo para poder llamarte Cachorrita!");
    alert("Bienvenida a la App del Amor!! â¤ï¸â¤ï¸");
    alert("Tienes que escribir âï¸ una de las opciones de cada una de las preguntas para pasar a la siguiente");
}

function pregunta() {
    for (let i = 0; i < 3; i++) {
        let respuesta = prompt(preguntas[i]);
        respuesta = respuesta.toLocaleLowerCase();
        while (respuesta !== respuesta1[i] && respuesta !== respuesta2[i] && respuesta !== respuesta3[i]) {
            alert(" respuesta incorrecta");
            respuesta = prompt(preguntas[i]);
        }

        switch (respuesta) {
            case respuesta1[i]:
                alert(alerta1[i]);
                break;
            case respuesta2[i]:
                alert(alerta2[i]);
                break;
            case respuesta3[i]:
                alert(alerta3[i]);
                break;
        }
    }
}

function despedida() {
    alert("FELIZ CUMPLEAÃOS HERMOSA!!ððð\n\nTE AMO MUCHO!â¤ï¸â¤ï¸ ")
}

let preguntas = [
    "Sos la Cachorra mas hermosa del mundo? â¤ï¸\n\n- Si\n- No\n- No se",
    "Te gusta cumplir aÃ±os? ð\n\n- si\n- no\n- no se",
    "Sabes cuanto te amo? â¤ï¸â¤ï¸\n\n- Mucho\n- Nada\n- Poco"
];
let alerta1 = [
    "Sos y seras siemrpe la mas hermosa Cachorra!ð¥°",
    "Y eso que sos cada dia mas hermosa!ð¥°",
    "Si! Muchisismo!! Cuanticamente!ð¥°"
]
let alerta2 = [
    "Que no!!? Pfff! No sabes nada! Sos la mas hermosa del Universo!!ð¥°",
    "A mi si me gusta cumplirlos con vos!ð¥°",
    "Poco es el universo para comparar la magnitud de lo que te amo!ð¥°"
]
let alerta3 = [
    "Yo si se y sos la mas hermosa!!ð¥°",
    "Yo solo se que te amo muchisismo y que me haces muy feliz! ð©ââ¤ï¸âðâð¨",
    "Nada es lo que me falta implotar de amor! Te amo hasta la ultima molecula!ð¥°"
]

let respuesta1 = ["si", "si", "mucho"];
let respuesta2 = ["no", "no", "poco"];
let respuesta3 = ["no se", "no se", "nada"];
saludo();
pregunta();
despedida();