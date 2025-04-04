function exibirTabuada(){
    let num = parseInt(document.getElementById("num").value);
    let resultado = document.getElementById("resultado");
    
    if(num >= 1 && num<=10){
        let tabuada = `<h3>Tabuada do ${num}:</h3>`;
        for (let i = 1; i <= 10; i++) {
            tabuada += `<p>${num} x ${i} = ${num * i}</p>`;
        }
        resultado.innerHTML = tabuada;
    }
    else{
        resultado.innerHTML = "Digite um número de 1 a 10";
        resultado.style.color = 'red'
    }

}