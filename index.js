/**
 * Funcion que a traves del valor del textarea con id "mensaje" encripta un mensaje.
 */
function encriptar() {
    //Declaracion de las variables
    let texto = document.getElementById("mensaje").value;
    let textoCifrado = document.getElementById("mensaje-encriptado");
    //Expresión regular que valida que la cadena solamente tenga texto en minusculas
    const regex = /^[a-zñ\s]+$/;

    //Valida que haya texto en el textarea "mensaje"
    if (texto.length != 0) {
        //Valida la expresión regular
        if (regex.test(texto)) {
            //Encripta el mensaje reemplazando las vocales por su valor de encriptado
            textoCifrado.value = texto
                .replace(/e/gi, "enter")
                .replace(/i/gi, "imes")
                .replace(/a/gi, "ai")
                .replace(/o/gi, "ober")
                .replace(/u/gi, "ufat");

            //remueve de la vista los elementos en pantalla cuando no hay texto encriptado
            document.getElementById("titulo-mensaje").classList.add("hidden");
            document.getElementById("parrafo").classList.add("hidden");
            document.getElementById("imagen").classList.add("hidden");
            //añade a la vista el boton copiar
            document.getElementById("btn-copiar").classList.remove("hidden");
        } else { //Si no se cumple con la expresión regular te lanza la notificación de cuales son las condiciones
            alert("Solo puedes ingresar letras minisculas y sin acentos");
            //Limpia la pantalla del texto encriptado en caso de que haya y vuelve a poner los elemenos del mensaje que no se encontró texto
            textoCifrado.value = "";
            document.getElementById("titulo-mensaje").classList.remove("hidden");
            document.getElementById("parrafo").classList.remove("hidden");
            document.getElementById("imagen").classList.remove("hidden");
            document.getElementById("btn-copiar").classList.add("hidden");
        }
    } else { //Si no hay texto notificara que debes de ingresar texto para poder encriptar
        //Limpia la pantalla y vuelve a poner los elemenos del mensaje que no se encontró texto
        textoCifrado.value = "";
        document.getElementById("titulo-mensaje").classList.remove("hidden");
        document.getElementById("parrafo").classList.remove("hidden");
        document.getElementById("imagen").classList.remove("hidden");
        document.getElementById("btn-copiar").classList.add("hidden");
        alert("Debes de ingresar texto");
    }
}

/**
 * Funcion que a traves del valor del textarea con id "mensaje" desencripta un mensaje.
 */
function desencriptar() {
    //Declaracion de las variables
    let texto = document.getElementById("mensaje").value;
    let textoCifrado = document.getElementById("mensaje-encriptado");
    //Expresión regular que valida que la cadena solamente tenga texto en minusculas
    const regex = /^[a-zñ\s]+$/;

    //Valida que haya texto en el textarea "mensaje"
    if (texto.length != 0) {
        //Valida la expresión regular
        if (regex.test(texto)) {
            //Desncripta el mensaje reemplazando los valores de encriptado por su vocal
            textoCifrado.value = texto
                .replace(/enter/gi, "e")
                .replace(/imes/gi, "i")
                .replace(/ai/gi, "a")
                .replace(/ober/gi, "o")
                .replace(/ufat/gi, "u");

            //remueve de la vista los elementos en pantalla cuando no hay texto desencriptado
            document.getElementById("titulo-mensaje").classList.add("hidden");
            document.getElementById("parrafo").classList.add("hidden");
            document.getElementById("imagen").classList.add("hidden");
            //añade a la vista el boton copiar
            document.getElementById("btn-copiar").classList.remove("hidden");
        } else { //Si no se cumple con la expresión regular te lanza la notificación de cuales son las condiciones
            alert("Solo puedes ingresar letras minisculas y sin acentos");
            //Limpia la pantalla y vuelve a poner los elemenos del mensaje que no se encontró texto
            textoCifrado.value = "";
            document.getElementById("titulo-mensaje").classList.remove("hidden");
            document.getElementById("parrafo").classList.remove("hidden");
            document.getElementById("imagen").classList.remove("hidden");
            document.getElementById("btn-copiar").classList.add("hidden");
        }
    } else { //Si no hay texto notificara que debes de ingresar texto para poder desencriptar
        //Limpia la pantalla y vuelve a poner los elemenos del mensaje que no se encontró texto
        textoCifrado.value = "";
        document.getElementById("titulo-mensaje").classList.remove("hidden");
        document.getElementById("parrafo").classList.remove("hidden");
        document.getElementById("imagen").classList.remove("hidden");
        document.getElementById("btn-copiar").classList.add("hidden");
        alert("Debes de ingresar texto");
    }
}

/**
 * Función que copia al portapapeles el texto encriptado o desencriptado
 */
function copiar() {
    //Se declara la variable
    let textoCifrado = document.getElementById("mensaje-encriptado").value;
    //Copia el texto al portapapeles
    navigator.clipboard.writeText(textoCifrado);
}