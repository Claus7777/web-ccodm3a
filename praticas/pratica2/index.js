const contatos = {
    nome: "NOME DO CONTATO",
    fone: "TELEFONE DO CONTATO"
}

const root = document.getElementById("root");

function Titulo(nome){
    var h2 = document.createElement("h2");
    h2.innerHTML = nome;
    return h2;
}

function InputText(){
    var input = document.createElement("input");
    input.type = "text"
    input.placeholder = "Nome";
    return input;
}

function InputTel(){
    var input = document.createElement("input");
    input.type = "tel";
    input.placeholder = "Telefone";
    return input;
}

root.appendChild(InputText());
root.appendChild(InputTel());
