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

/*cadastrar("rio grande do sul", "RS");
cadastrar("paraná", "PR");*/
conseguirTudo();