function verificarIdade(){
    let idade = document.getElementById("idade").value
    let resultado = document.getElementById("resultado");

    if (idade < 18) {
        resultado.innerHTML = "Você é menor de idade.";
        resultado.style.color = "red";
    }
    else if (idade >= 18 && idade <60) {
        resultado.innerHTML = "Você maior de idade";
        resultado.style.color = "green";
    }
    else {
        resultado.innerHTML = "Você é idoso.";
        resultado.style.color = "purple"
    }
}