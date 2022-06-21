function saludo() {
   
    let nombre = prompt("Ingresa tu Nombre");
    alert("Lo siento " + nombre + "! 🤔 Me programaron solo para poder llamarte Cachorrita!");
    alert("Bienvenida a la App del Amor!! ❤️❤️");
    alert("Tienes que escribir ✍️ una de las opciones de cada una de las preguntas para pasar a la siguiente");
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
    alert("FELIZ CUMPLEAÑOS HERMOSA!!🎈🎈🎈\n\nTE AMO MUCHO!❤️❤️ ")
}

let preguntas = [
    "Sos la Cachorra mas hermosa del mundo? ❤️\n\n- Si\n- No\n- No se",
    "Te gusta cumplir años? 🎂\n\n- si\n- no\n- no se",
    "Sabes cuanto te amo? ❤️❤️\n\n- Mucho\n- Nada\n- Poco"
];
let alerta1 = [
    "Sos y seras siemrpe la mas hermosa Cachorra!🥰",
    "Y eso que sos cada dia mas hermosa!🥰",
    "Si! Muchisismo!! Cuanticamente!🥰"
]
let alerta2 = [
    "Que no!!? Pfff! No sabes nada! Sos la mas hermosa del Universo!!🥰",
    "A mi si me gusta cumplirlos con vos!🥰",
    "Poco es el universo para comparar la magnitud de lo que te amo!🥰"
]
let alerta3 = [
    "Yo si se y sos la mas hermosa!!🥰",
    "Yo solo se que te amo muchisismo y que me haces muy feliz! 👩‍❤️‍💋‍👨",
    "Nada es lo que me falta implotar de amor! Te amo hasta la ultima molecula!🥰"
]

let respuesta1 = ["si", "si", "mucho"];
let respuesta2 = ["no", "no", "poco"];
let respuesta3 = ["no se", "no se", "nada"];
saludo();
pregunta();
despedida();