class conta {
    constructor(nomeCliente, saldoConta, tipoConta, limiteCreditoConta){
        this.nome = nomeCliente;
        this.saldo = saldoConta;
        this.tipo = tipoConta;
        this.limiteCreditoConta = limiteCreditoConta;
        this.extrato = []; // lista(vetor)
    }
    depositar(valor){
        let saldoInterior = this.saldo;
        this.saldo += valor;
        this.extrato.push(`depositado o valor de ${valor} com sucesso, saldo anterior: ${saldoInterior}!`);
    }
    mostrarExtrato(){
        console.log(`cliente: ${this.nome}\nConta: ${this.tipo}\nSaldo: ${this.saldo}\nExtrato:`);
        if (this.extrato.length === 0){
            console.log("nenhuma movimentação");
            return;
        }
        for (let index = 0; index < this.extrato.length; index++) {
            const registro = this.extrato[index];
            console.log(`\t${registro}`);
        }
    }
}

let conta1 = new conta("judity", 0, "conta salário", 0);
conta1.depositar(600.99);
conta1.depositar(1);
conta1.depositar(1000.00);
conta1.mostrarExtrato();
let conta2 = new conta("victor com h", -501, "conta negativo", 50000);
conta2.mostrarExtrato();