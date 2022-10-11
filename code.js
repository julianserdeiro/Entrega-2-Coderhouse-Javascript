alert('¡Bienvenide al GatiQuiz! Si ganas la partida, tendrás una recompensa')
alert('Antes, cuéntanos un poco de tí')

class info{
    constructor(){
        this.nombre = prompt('Ingresa tu nombre');
        this.edad = prompt('Ingresa tu edad')
        this.email = prompt('Ingresa tu e-mail');

    }
}

const datos = new info()

alert(`Nombre: ${datos.nombre}
Edad: ${datos.edad}
Email: ${datos.email}`)



alert('¡SÓLO TIENES 3 INTENTOS POR CADA PREGUNTA!')



let gatiRespuestas = [4, 'blanco', 5];
let gatiPreguntas = ['¿Cuántas patas tiene un gato?', '¿De qué color son los bigotes de un gato?', '¿Cuántos dedos tiene un gato en sus patas delanteras?'];
let gatiIntentos = 3;
let gatiRespuestasCorrectas = 0;


//_Función respuesta incorrecta_
var acierto = false
const incorrecto = () => {
    return alert('No has acertado. ¡La próxima lo harás mejor!');
}


//_Función cuestionario_
const gatiQuiz = () => {
    for (let i = 0; i < gatiPreguntas.length; i++) {
        for (let j = 0; j < gatiIntentos; j++) {

            let respuestaUsuario = prompt(gatiPreguntas[i]);

            if (respuestaUsuario == gatiRespuestas[i]) {
                alert('¡Correcto!');
                gatiRespuestasCorrectas++;
                j = 3;
            }

            if(j === gatiIntentos - 1 && respuestaUsuario !== gatiRespuestas[i]){
                incorrecto();
                break
            }
        }
    }
    alert(`Cantidad de preguntas acertadas: ${gatiRespuestasCorrectas} y cantidad de respuestas incorrectas: ${Math.abs(gatiRespuestasCorrectas - gatiPreguntas.length)}`)
    alert('Continúa para obtener tu recompensa');
    document.write('😺😸😹😻😼😽🙀😿😾🐱');
}
gatiQuiz();