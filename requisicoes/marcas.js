/* 
create => permitir cadastrar
read => permitir visualizar
update => permitir alterar
delete => permitir apagar
*/

function cadastrar(nomeMarca) {
    let marca = {
        "nome": nomeMarca
    }

    fetch("http://localhost:3000/marcas", {
        method: "post",
        body: JSON.stringify(marca)
    })
    .then(data => console.log("marca cadastrada com sucesso"))
    .catch(erro => console.error("erro ao tentar cadastrar a marca"));
}

function obterTodos() {
    fetch("http://localhost:3000/marcas", {
        method: "get"
    })
    .then(resposta => resposta.json())
    .then(dados => {
       for (let i = 0; i < dados.length; i++) {
        let marca = dados[i];
        console.log(marca.nome);
       }
    })
    .catch(erro => {
        console.error("ocorreu um erro ao consultar as marcas");
    })
}

function alterar() {}

function apagar() {}

cadastrar("razer");

obterTodos();