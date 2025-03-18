function adicionarValor(valor){
    document.getElementById("tela").value += valor;
}

function calcularResultado(){
    try{
        document.getElementById("tela").value = eval(document.getElementById("tela").value);
    } catch (e){
        alert("Expressão inválida");
    }
}

function limparTela(){
    document.getElementById("tela").value = "";
}