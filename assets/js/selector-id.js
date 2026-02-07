const botaoLimparCampos = document.getElementById("limpar-campos");
botaoLimparCampos.addEventListener("click", limparCampos);

const botaoProcessar = document.getElementById("processar");
botaoProcessar.addEventListener("click", processar);

const botaoSomar = document.getElementById("caucular-soma");
botaoSomar.addEventListener("click", somar);

const botaoMedia = document.getElementById("caucular-media");
botaoMedia.addEventListener("click", media)

function limparCampos(){
    let campoPlacaMae = document.getElementById("placa-mae");
    campoPlacaMae.value = ""

    let campoPlacaVideo = document.getElementById("placa-video")
    campoPlacaVideo.value = ""
}

function processar(){
    let campoPlacaMae = document.getElementById("placa-mae");
    let campoPlacaVideo = document.getElementById("placa-video")

    let placaMae = campoPlacaMae.value;
    let placavideo = campoPlacaVideo.value;

    alert(placaMae + " " + placavideo)
}

function somar(){
    let campoNumero01 = document.getElementById("numero01");
    let campoNumero02 = document.getElementById("numero02");

    let numero01 = parseInt(campoNumero01.value);
    let numero02 = parseInt(campoNumero02.value)

    let soma = numero01 + numero02

    alert("Soma: " + soma)
}

function media(){
    let campoNome = document.getElementById("nome")
    let campoNota1 = document.getElementById("nota1")
    let campoNota2 = document.getElementById("nota2")
    let campoNota3 = document.getElementById("nota3")

    let nome = campoNome.value
    let nota1 = parseFloat(campoNota1.value)
    let nota2 = parseFloat(campoNota2.value)
    let nota3 = parseFloat(campoNota3.value)

    let soma = nota1 + nota2 + nota3

    let media = soma / 3

    let status = ""
    if(media >= 7){
        status = "Aprovado"
    }
    else{
        status = "Reprovado"
    }

    const texto =`Aluno: ${nome} <br>
    Nota 1: ${nota1} <br>
    Nota 2: ${nota2} <br>
    Nota 3: ${nota3} <br>
    Media: ${media.toFixed(2)} <br>
    Status: ${status}`

    const divResultadoMedia = document.getElementById("resultado-media")
    divResultadoMedia.innerHTML = texto
}