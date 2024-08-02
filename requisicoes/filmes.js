function cadastrar(nomeFilme, duracao, classificacao) {
    let filme = {
        "nome": nomeFilme,
        "duracao": duracao,
        "classificacao": classificacao
    }

    fetch("http://localhost:3000/filmes", {
            method: "post",
            body: JSON.stringify(filme)
        })
}

function pegarTodos() {
    fetch("http://localhost:3000/filmes", {
        method: "get"
    })
    .then(resposta => resposta.json())
    .then(dados => {
       for (let i = 0; i < dados.length; i++) {
        let filme = dados[i];
        console.log(filme.nome, filme.duracao, filme.classificacao);
       }
    })
    .catch(erro => {
        console.error("erro ao visualizar os filmes");
    })
}

/*cadastrar("guerra mundial z", 180, 4.5);*/

pegarTodos();