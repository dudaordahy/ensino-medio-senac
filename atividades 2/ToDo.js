function adicionarTarefa(){
    let tarefa = document.getElementById("tarefa").value;
    if(tarefa.trim() !== ""){
        let li = document.createElement("li");
        li.innerText = tarefa;
        li.onclick = function() { this.remove();};
        document.getElementById("lista").appendChild("li");
        document.getElementById("tarefa").value = "";
    }
}