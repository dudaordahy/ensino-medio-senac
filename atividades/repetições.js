        let lista = document.getElementById("lista");

        for (let i = 1; i <= 10; i++) {
            let item = document.createElement("li"); 
            item.textContent = "Item " + i;
            lista.appendChild(item);
        }