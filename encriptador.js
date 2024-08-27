const d = document;
const textArea = d.querySelector(".form__input");
const imagenMuneco = d.querySelector(".result__img");
const loaderB = d.querySelector(".loader");
const resultadoTitle = d.querySelector(".result__title");
const resultadoText = d.querySelector(".result__text");
const botonEncriptar = d.querySelector(".form__btn");
const botonDesencriptar = d.querySelector(".form__btn--secundary");
const botonCopiar = d.querySelector(".form__btn--secundary.hidden");

const llaves = [
    ["e", "enter"],
    ["i", "imes"],
    ["a", "ai"],
    ["o", "ober"],
    ["u", "ufat"],
];

function encriptarMensaje(mensaje){
    let mensajeEncriptado = mensaje;
    for (let i = 0; i < llaves.length; i++) {
        let regex = new RegExp(llaves[i][0], "g");
        mensajeEncriptado = mensajeEncriptado.replace(regex, llaves[i][1]);
    }
    return mensajeEncriptado;
}

function desencriptarMensaje(mensaje){
    let mensajeDesencriptado = mensaje;
    for (let i = 0; i < llaves.length; i++) {
        let regex = new RegExp(llaves[i][1],"g");
        mensajeDesencriptado = mensajeDesencriptado.replace(regex, llaves[i][0]);
    }
    return mensajeDesencriptado;
}

//Para ocultar elementos dinamicamente
textArea.addEventListener("input", (e)=>{
    imagenMuneco.style.display = "none";
    loaderB.classList.remove("hidden");
    resultadoTitle.textContent = "Capturando Mensaje.";
    resultadoText.textContent = "";
})

//Función del botón Encriptar
botonEncriptar.addEventListener("click", (e)=>{
    e.preventDefault();
    let mensaje = textArea.value.toLowerCase();
    let mensajeEncriptado = encriptarMensaje(mensaje);
    resultadoText.textContent = mensajeEncriptado;
    botonCopiar.classList.remove("hidden");
    resultadoTitle.textContent = "El resultado es:";
})

//Función del botón Desencriptar
botonDesencriptar.addEventListener("click", (e)=>{
    e.preventDefault();
    let mensaje = textArea.value.toLowerCase();
    let mensajeDesencriptado = desencriptarMensaje(mensaje);
    resultadoTitle.textContent = "El resultado es:";
    resultadoText.textContent = mensajeDesencriptado;
});

botonCopiar.addEventListener("click", ()=>{
    let textoCopiado = resultadoText.textContent;
    navigator.clipboard.writeText(textoCopiado).then(()=> {
        imagenMuneco.style.display = "block";
        loaderB.classList.add("hidden");
        resultadoTitle.textContent = "Mensaje copiado.";
        botonCopiar.classList.add("hidden");
        resultadoText.textContent = ""
    })
});
