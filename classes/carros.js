class carro {
    constructor(marca, modelo, ano, valor, cor, temEscada) {
        // propriedades
        this.marca = marca;
        this.modelo = modelo;
        this.ano = ano;
        this.valor = valor;
        this.cor = cor;
        this.velocidade = 0;
        this.estado = "desligado";
        this.temEscada = temEscada;
        if (this.modelo === "uno" && this.temEscada === true) {
            this.limiteMaximo = 200;
        } else {
            this.limiteMaximo = 50;
        }
    }

    // métodos:
    ligar() {
        this.estado = "ligado";
        console.log(`carro ligado`);
    }

    desligar() {
        if (this.velocidade === 0) {
            this.estado = "desligar";
            console.log(`carro desligado`);
        }
    }

    aumentarVelocidade() {
        if (this.estado === "ligado") {
            if (this.velocidade === this.limiteMaximo) {
                console.log(`limite máximo ${this.limiteMaximo} atingido`);
            } else {
                this.velocidade += 10;
                console.log(`carro andando a ${this.velocidade} km/h`);
            }
        }
    }

    apresentar() {
        console.log(`marca: ${this.marca}`);
        console.log(`modelo: ${this.modelo}`);
        console.log(`ano: ${this.ano}`);
        console.log(`valor: ${this.valor}`);
        console.log(`cor: ${this.cor}`);
        console.log(`velocidade ${this.velocidade}`);
        console.log(`estado: ${this.estado}`);
    }

    diminuirVelocidade() {
        if (this.velocidade === 0) {
            console.log("carro parado, não é possivel diminuir além disso");
            return;
        }
        this.velocidade -= 10;
        console.log(`carro andando a ${this.velocidade} km/h`);
    }
}

let uno = new carro("ford", "uno", 2001, 75,50, "prata", false);
uno.ligar();
uno.aumentarVelocidade(); // 0 => 10km/h
uno.aumentarVelocidade(); // 10 => 20
uno.aumentarVelocidade(); // 20 => 30
uno.aumentarVelocidade(); // 30 => 40
uno.aumentarVelocidade(); // 40 => 50
uno.aumentarVelocidade(); // 50, informando que atingiu o limite máximo do carro

uno.desligar(); // ignorado pq o carro está em movimento

uno.diminuirVelocidade(); // 50 => 40
uno.diminuirVelocidade(); // 40 => 30
uno.diminuirVelocidade(); // 30 => 20
uno.diminuirVelocidade(); // 20 => 10
uno.diminuirVelocidade(); // 10 => 0
uno.diminuirVelocidade(); // 0, informando que o carro está parado

uno.apresentar();