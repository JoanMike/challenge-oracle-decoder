const textArea = document.querySelector(".text-area");
const mensaje = document.querySelector(".mensaje");

function validarTexto() {
    let textoEscrito = textArea.value;
    let validador = /^[a-z\s]*$/.test(textoEscrito);

    if (!validador) {
        alert("Solo son permitidas letras minúsculas y sin acentos");
        textArea.value = "";
        return false;
    }
    return true;
}

function btnEncriptar() {
    if (validarTexto()) {
        const textoEncriptado = encriptar(textArea.value);
        mensaje.value = textoEncriptado;
        textArea.value = "";
        mensaje.style.backgroundImage = "none";
    }
}

function encriptar(stringEncriptada) {
    const matrizCodigo = [
        ["e", "enter"],
        ["i", "imes"],
        ["a", "ai"],
        ["o", "ober"],
        ["u", "ufat"]
    ];
    stringEncriptada = stringEncriptada.toLowerCase();

    for (let [letra, reemplazo] of matrizCodigo) {
        stringEncriptada = stringEncriptada.replaceAll(letra, reemplazo);
    }
    return stringEncriptada;
}

function btnDesencriptar() {
    if (validarTexto()) {
        const textoDesencriptado = desencriptar(textArea.value);
        mensaje.value = textoDesencriptado;
        textArea.value = "";
    }
}

function desencriptar(stringDesencriptada) {
    const matrizCodigo = [
        ["enter", "e"],
        ["imes", "i"],
        ["ai", "a"],
        ["ober", "o"],
        ["ufat", "u"]
    ];
    stringDesencriptada = stringDesencriptada.toLowerCase();

    for (let [reemplazo, letra] of matrizCodigo) {
        stringDesencriptada = stringDesencriptada.replaceAll(reemplazo, letra);
    }
    return stringDesencriptada;
}

function copiarMensaje() {
    navigator.clipboard.writeText(mensaje.value)
        .then(() => {
            mensaje.value = "";
            alert("Texto copiado");
        })
        .catch(err => {
            console.error('Error al copiar el texto: ', err);
        });
}