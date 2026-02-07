const botaoAgendar = document.getElementById("agendar-consulta");
botaoAgendar.addEventListener("click", agendarConsulta);

function agendarConsulta(){
    let campoNome = document.getElementById("nome-pet");
    let campoData = document.getElementById("data-consulta");
    let campoTipo = document.getElementById("tipo");
    let campoIdade = document.getElementById("idade");

    let nome = campoNome.value;
    let data = campoData.value;
    let tipo = campoTipo.value;
    let idade = campoIdade.value;

    let texto = `Nome do pet: ${nome} <br>
    Data da consulta: ${data} <br>
    Tipo de animal: ${tipo} <br>
    Idade: ${idade}`

    const divInformacaoConsulta = document.getElementById("informacaConsulta");
    divInformacaoConsulta.innerHTML = texto;
}