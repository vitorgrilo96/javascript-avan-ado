let paises = [ 
    {
        nome: "rússia",
        fundacao: 1991,
        informacoes: [
            {
                lider: "vladimir putin",
                capital: "moscou",
                cidades: ["são petersburgo", "kazan"]
            }
        ]
    }
]

function cadastrarPais(nomePais, fundacao) {
    let nome = {
        nome: nomePais,
        fundacao: fundacao,
        informacoes: []
    }
    paises.push(nome)
}

function obterIndiceDoPais(buscarPais) {
    let indicePaisNoVetor = paises.findIndex(
        pais => pais.nome.toLowerCase() === buscarPais.toLowerCase().trim()
    );
    return indicePaisNoVetor;
} 

function cadastrarInformacoes(paisParaCadastrar, nomeLider, nomeCapital) {
    let informacoes = {
        
    }
}

function obterIndiceDasInformacoes(buscarInfo, indicePais) {
    let paisEncontrado = paises[indicePais];

    let indiceInformacoesNoVetor = paisEncontrado.informacoes.findIndex(info => info.nome.toLowerCase().trim() === buscarInfo.toLowerCase().trim()
    )
    return indiceInformacoesNoVetor;
}

function listarPaises() {
    for (let i = 0; i < paises.length; i++) {
        let pais = paises[i];
        console.log("nome: " + pais.nome, "fundação: " + pais.fundacao, "\n\tinformacoes:")
        for (let i = 0; i < pais.informacoes.length; i++) {
            let informacao = pais.informacoes[i];
            console.log("\t\t", informacao.lider, "\t", informacao.capital, "\t", informacao.cidades)
        }
    }
}

cadastrarPais("polônia", "1980")
cadastrarInformacoes("Andrzej Duda", "varsóvia", "cracóvia")
listarPaises()