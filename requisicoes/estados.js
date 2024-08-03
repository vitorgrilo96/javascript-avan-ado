function cadastrar(seuEstado, sigla) {
    let estado = {
        "nome": seuEstado,
        "sigla": sigla
    }

    fetch("http://localhost:3000/estados", {
        method: "post",
        body: JSON.stringify(estado)
    })
}

function conseguirTudo() {
    fetch("http://localhost:3000/estados", {
        method: "get"
    })
        .then(resposta => resposta.json())
        .then(dados => {
            for (let i = 0; i < dados.length; i++) {
                let estado = dados[i];
                console.log(estado.nome, estado.sigla);
            }
        })
        .catch(erro => {
            console.error("algo de errado não está certo");
        })
}

async function obterEstadosComNome(nome) {
    let estados = await conseguirTudo();
    if (estados === null)
        return null;

    for (let i = 0; i < estados.length; i++) {
        let estado = estados[i];
        if (estado.nome === nome)
            return estado;
    }
}

function deletarComId(id) {
    fetch(`http://localhost:3000/estados/${id}`, {
        method: "delete"
    })
        .then(requisicao => {
            if (requisicao.ok)
                console.log("aviso: você acabou de apagar o estado");
            else
                console.log(`este id está incorreto ${id}`);
        })
        .catch(erro => console.error("erro ao deletar"));
}

function mudar(id, nome, sigla) {
    let estado = {
        "nome": nome,
        "sigla": sigla 
    }
    fetch(`http://localhost:3000/estados/${id}`, {
        method: "put",
        body: JSON.stringify(estado, sigla)
    })
        .then(response => {
            if (response.ok === false) {
                console.log(`id desconhecido ${id}`);
                return;
            }
            console.log("estado alterado");
        })
        .catch(error => console.error("não foi possivel alterar o estado"));
}

async function apagarComNome(nome) {
    let estado = await obterEstadosComNome(nome);
    if (estado === null) {
        console.log(`este estado não existe ${nome}`);
        return;
    }
    deletarComId(estado.id);
}

async function mostrarTudo() {
    let estados = await conseguirTudo();
    console.log("estados");

    for (let index = 0; index < estados.length; index++) {
        const estado = estados[index];
        console.log(`id: ${estado.id} nome: ${estado.nome}`)
    }
}

/*cadastrar("rio grande do sul", "RS");
cadastrar("paraná", "PR");*/
//cadastrar("narnia", "NA");
//mudar("c985", "são paulo", "SP");
//mudar("f361", "minas gerais", "MG")
//deletarComId("c23b")
conseguirTudo();