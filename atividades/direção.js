function verificarIdade(){
    let idade = document.getElementById("idade").value;
    let resultado = document.getElementById("resultado");

    if(idade < 18){
        resultado.innerHTML = "Você não pode dirigir!";
        resultado.style.color = "red"
    }
    else{
        resultado.innerHTML = "Você pode dirigir!";
        resultado.style.color = "green";
    }
}