function nome() {
    console.log("Olá mundo");
    let nome = "vitor luiz";
    let sobrenome = "alcantara grilo"
    let nomeCompleto = `${nome} ${sobrenome}`;

    console.log(`nome: ${nomeCompleto}`);
}

function soma() {
    let numero1 = 8;
    let numero2 = 2;
    let soma = numero1 + numero2;
    console.log(`soma: ${soma}`);

    if (soma % 2 == 0) {
        console.log("par");
    }
    else {
        console.log("não é par");
    }
}

function vetor() {
    // criando o vetor
    let nomes = [];
    // adicionando elemento no vetor
    nomes.push("bob");
    nomes.push("zeus");
    nomes.push("seus");
    // quantidade de elementos do vetor
    const quantidadeCachorros = nomes.length;
    // alterando um elemento na posição 2 para teus, que anteriormente era seus
    nomes[2] = "teus";

    // obter o indice da posição do vetor referente ao nome bob
    const indiceBob = nomes.findIndex(nome => nome == "bob");
    // remover bob do vetor
    nomes.splice(indiceBob, 1);

    console.log(`quantidade de cachorros: ${quantidadeCachorros}`);
    console.log(`cachorros: ${nomes}`);

}

nome();
soma();
vetor();

function aprensentarDadosObjeto() {
    let thor = {
        nome: "thor",
        forca: 89,
        defesa: 90,
        categoria: "deus",
        sangue: {
            fatorRh: "**",
            tipoSanguineo: "A"
        },
        filhos: ["magni", "thrúd"]
    }
    thor.filhos.push("lokinho");

    console.log(`nome: ${thor.nome}`);
    console.log(`força: ${thor.forca}`);
    console.log(`sangue: ${thor.sangue.tipoSanguineo}${thor.sangue.fatorRh}`);
    console.log(`filhos:
    ${thor.filhos[0]}
    ${thor.filhos[1]}
    ${thor.filhos[2]}`);

}

aprensentarDadosObjeto();

// função com retorno que recebe como parâmetro lado1 e o lado2
function calcularAreaRetangulo(lado1, lado2) {
    let area = (lado1 * lado2);
    return area;
}

function exemploFormasGeometricas() {
    let areaRetangulo = calcularAreaRetangulo(5, 12);
    console.log(`área do retangulo: ${areaRetangulo}`);
}

exemploFormasGeometricas();

function calcularSalarioBruto(valorHora, quantidadeHoras, auxilios) {
    let salarioBruto = valorHora * quantidadeHoras;
    let valorAuxilio = calcularAuxilio(auxilios);
    return salarioBruto + valorAuxilio;
}

function calcularAuxilio(auxilios) {
    let valorAuxilios = 0;
    for (let i = 0; i < auxilios.length; i = i + 1) {
        valorAuxilios = valorAuxilios + auxilios[i]
    }
    return valorAuxilios;
}

function calcularDescontos(salarioBruto, descontos) {
    let valorDescontos = 0;
    // percorrer cada uma da lista de objetos dos descontos
    for (let i = 0; i < descontos.length; i += 1) {
        // obter o desconto da lista de descontos
        let desconto = descontos[i];
        // verificar se o tipo do calculo do desconto é normal
        if (desconto.tipo === "normal") {
            // acrescentar o valor do desconto na soma dos descontos
            valorDescontos += desconto.valor;
        } else {
            // explicação do código abaixo
            // desconto de inss de 8%, desconto.percentual a conterá 8
            // o percentualDesconto receberá 0.08 que é 8 / 100
            // o valorDesconto irá multiplicar o salário bruto * 0.08(8%)
        }
    }
    // retorna a soma de todos os descontos
    return valorDescontos;
}

function calcularSalarioLiquido(salarioBruto, descontos) {
    let valorDescontos = calcularDescontos(salarioBruto, descontos);
    let salarioLiquido = salarioBruto - valorDescontos;
    return salarioLiquido;
}

function exemploFolhaPagamento() {
    let valorHora = 20;
    let quantidadeHoras = 220;
    let alimentacao = 1400;
    let combustivel = 12.50 * 20;
    let idioma = 300;
    let homeOffice = 150;
    let moradia = 200;
    let descontos = [
        {
            nome: "Unimed",
            valor: 400,
            tipo: "normal",
        },
        {
            nome: "valeOnibus",
            percentual: 6,
            tipo: "percentual"
        },
        {
            nome: "inss",
            percentual: 17,
            tipo: "percentual"
        }
    ]

    let auxiliosRecebidos = [alimentacao, combustivel, idioma, homeOffice, moradia]
    let salarioBrutoColaborador = calcularSalarioBruto(valorHora, quantidadeHoras, auxiliosRecebidos);
    let salarioLiquido = calcularSalarioLiquido(salarioBrutoColaborador, descontos)

    console.log("Salário Bruto: ", salarioBrutoColaborador);
    console.log("Salário Líquido: ", salarioLiquido);
}

exemploFolhaPagamento();