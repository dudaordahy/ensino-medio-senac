function sortearNumero(){
    let numero = Math.floor(Math.random()*100) + 1;
    document.getElementById("resultado").innerText = `Número sorteado: ${numero}`;
}