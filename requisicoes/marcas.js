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

async function obterTodos() {
    let resposta = await fetch("http://localhost:3000/marcas", {
        method: "get"
    });

    if(resposta.ok){
        let marcas = resposta.json();
        return marcas;
    }

        console.error("ocorreu um erro ao consultar as marcas");
        return null;
}

async function obterMarcasPorNome(nome){
    let marcas = await obterTodos();
    if (marcas === null)
        return null;

        for (let i = 0; i < marcas.length; i++){
            let marca = marcas[i];
            if(marca.nome === nome)
                return marca;
        }
}

function apagarPorId(id){
    fetch(`http://localhost:3000/marcas/${id}`,{
        method: "delete"
    })
    .then(requisicao => {
        if (requisicao.ok)
            console.log("marca apagada com sucesso");
        else
            console.log(`não encontrada marca com o id ${id}`);
    })
    .catch(erro => console.error("não foi possivel apagar"));
}

function alterar(id, nome) {
    let marca = {
        "nome": nome
    }
    fetch(`http://localhost:3000/marcas/${id}`, {
       method: "put",
       body: JSON.stringify(marca)
    })
    .then(response => {
        if (response.ok === false){
            console.log(`marca não alterada pois não foi possivel encontrar com o id ${id}`);
            return;
        }
        console.log("marca alterada com sucesso");
    })
    .catch(error => console.error("não foi possivel alterar a marca"));
}

async function apagarPorNome(nome) {
    let marca = await obterMarcasPorNome(nome);
    if (marca === null){
        console.log(`não encontrada marca com o nome ${nome}`);
        return;
    }
    apagarPorId(marca.id);
}

async function aprensentarTodos() {
    let marcas = await obterTodos();
    console.log("marcas");

    for (let index = 0; index < marcas.length; index++) {
        const marca = marcas[index];
        console.log(`id: ${marca.id} nome: ${marca.nome}`)
    }
}

//apagarPorNome("razer");
//apagarPorId("9de9")
//function apagar() {}
//cadastrar("razer");
alterar("1", "asus");

obterTodos();