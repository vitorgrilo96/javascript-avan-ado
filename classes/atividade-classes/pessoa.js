class Pessoa {
    constructor(nome, sobrenome, idade, altura, peso){
        this.nome = nome;
        this.sobrenome = sobrenome;
        this.idade = idade;
        this.altura = altura;
        this.peso = peso;
    }

    imc(){
        let imc = this.peso / (this.altura * this.altura);
        return imc;
    }

    apresentar() {
       console.log(`nome: ${this.nome}\nsobrenome: ${this.sobrenome}\nidade: ${this.idade}\naltura: ${this.altura}\npeso: ${this.peso}\nimc: ${this.imc()}`);
    }
}

let Pessoa1 = new Pessoa("tobias", "da silva", 26, 1.82, 73);
Pessoa1.apresentar();