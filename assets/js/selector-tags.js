let inputsTamanhoFonte = document.getElementsByName("fonte");

for (let i = 0; i < inputsTamanhoFonte.length; i += 1){
    const inputTamanhoFonte = inputsTamanhoFonte[i];

    inputTamanhoFonte.onchange = campoFonteAlterado;
}

function campoFonteAlterado(event){
    let tamanho = event.target.value;
    alterarTamanhoFonte(tamanho);
}

function alterarTamanhoFonte(tamanho){
    const tagP = document.getElementsByTagName("p")[0];

    tagP.style.fontSize = `${tamanho}px`;
}

const corTexto = document.getElementById("cor-texto");
corTexto.addEventListener("change", definirCorTexto);
const tagP = document.getElementsByTagName("p")[0]

function definirCorTexto(event){
    let campoSelect = event.target;

    let cor = campoSelect.value;

    tagP.style.color = cor;
}

const corFundo = document.getElementById("cor-fundo");
corFundo.addEventListener("change", definirCorFundo);

function definirCorFundo(event){
    let campoColor = event.target;

    let cor = campoColor.value

    tagP.style.backgroundColor = cor
}

const imagens = [
    "assets/imagens/imagem01.png",
    "assets/imagens/imagem02.jpg",
    "assets/imagens/imagem03.jpg",
]

const imagem = document.getElementById("imagem-mine")
let i = 0
setInterval(() => {
    let imagemSrc = imagens[i]
    imagem.setAttribute("Src", imagemSrc)

    i += 1
    if(i >= 3){
        i = 0
    }
}, 2000)