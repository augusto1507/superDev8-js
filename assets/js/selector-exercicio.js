const mostrarPf = document.getElementById("pf");
mostrarPf.addEventListener("change", visualizarPf)
const pf = document.getElementById("tipo-pf")
function visualizarPf() {
    

    if (pf.style.display === "none") {
        pf.style.display = "inline-block"
        pj.style.display = "none"
    }
    else{
        pf.style.display = "none"
    }
}

const mostrarPj = document.getElementById("pj");
mostrarPj.addEventListener("change", visualizarPj)
const pj = document.getElementById("tipo-pj")
function visualizarPj() {
    

    if (pj.style.display === "none") {
        pj.style.display = "inline-block"
        pf.style.display = "none"
    }
    else{
        pj.style.display = "none"
    }
}