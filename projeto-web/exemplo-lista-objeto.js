let marcas = [
    {
        nome: "Apple",
        produtos: [
            {
                nome: "iPhone 15 Pro Max",
                preco: 12000,
                armazenamentoInternos: [256, 512, 1024]
            },
            {
                nome: "iPhone 15 Pro",
                preco: 11000,
                armazenamentoInternos: [128, 256, 512, 1024]
            },
        ],
    },
    {
        nome: "Samsung",
        produtos: []
    }
]

function cadastrarMarca(nome) {
    let marca = {
        nome: nome,
        produtos: []
    }
    marcas.push(marca)
}

function obterIndiceDaMarca(marcaParaBuscar){
        // Encontrar o indice da posição da marca no vetor de marcas, buscando pelo nome da marca
    let indiceMarcaNoVetor = marcas.findIndex(
        marca => marca.nome.toLowerCase() === marcaParaBuscar.toLowerCase().trim()
    );
    return indiceMarcaNoVetor;
}

function obterIndiceDoProduto(produtoParaBuscar, indiceMarca){
    let marcaEncontrada = marcas[indiceMarca];

    let indiceProdutoNoVetor = marcaEncontrada.produtos.findIndex(
        x => x.nome.toLowerCase().trim() === produtoParaBuscar.toLowerCase().trim()
    )
    return indiceProdutoNoVetor;
}


function cadastrarProduto(marcaParaCadastrar, nomeProduto, precoProduto) {
    let produto = {
        nome: nomeProduto,
        preco: precoProduto,
        armazenamentoInternos: []
    }
    let indiceMarcaNoVetor = obterIndiceDaMarca(marcaParaCadastrar);
    if (indiceMarcaNoVetor === -1) {
        console.log(`Marca '${marcaParaCadastrar}' não encontrada!`)
    } else {
        // Adicionando um produto na marca
        marcas[indiceMarcaNoVetor].produtos.push(produto);
    }
}

function cadastrarArmazenamentoInternoDoProduto(marca, produto, armazenamento) {
    let indiceMarcaNoVetor = obterIndiceDaMarca(marca);
    let indiceProdutoNoVetor = obterIndiceDoProduto(produto, indiceMarcaNoVetor);
    
    let marcaEncontrada = marcas[indiceMarcaNoVetor];
    let produtoEncontrado = marcaEncontrada.produtos[indiceProdutoNoVetor];
    produtoEncontrado.armazenamentoInternos.push(armazenamento);
}

function listarMarcas() {
    for (let i = 0; i < marcas.length; i++) {
        let marca = marcas[i];
        console.log("Marca: " + marca.nome, "\n\tProdutos:")
        for (let i = 0; i < marca.produtos.length; i++) {
            let produto = marca.produtos[i];
            console.log("\t\t", produto.nome, produto.armazenamentoInternos);
        }
    }
}

cadastrarMarca("Nvidia")

cadastrarProduto("Apple", "Macbook M4", 22000.00)
cadastrarProduto("Samsung", "Galaxy Book 4", 13000.00)
cadastrarProduto("Apple", "iPhone 15", 9000)
cadastrarProduto("Nvidia", "Quadro", 15000)
cadastrarProduto("nvidia", "RTX 5090", 2000)
cadastrarProduto(" nVIDIA ", "RTX 3060", 3000)
cadastrarProduto("AMD", "RX 580", 1000)
cadastrarArmazenamentoInternoDoProduto("Apple", "Macbook M4", 256)
cadastrarArmazenamentoInternoDoProduto("Nvidia", "RTX 5090 ", 24)

listarMarcas()