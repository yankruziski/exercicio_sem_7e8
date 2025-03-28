// Classe base Veiculo
class Veiculo {
    constructor(modelo, ano) {
        this.modelo = modelo;
        this.ano = ano;
    }
    
    // Método genérico para calcular o consumo (deve ser sobrescrito pelas subclasses)
    calcularConsumo() {
        throw new Error("O método calcularConsumo() deve ser implementado pelas subclasses");
    }
}

// Classe derivada Carro
class Carro extends Veiculo {
    constructor(modelo, ano, eficiencia) {
        super(modelo, ano); // Chama o construtor da classe base
        this.eficiencia = eficiencia; // km por litro
    }
    
    // Método para calcular o consumo de combustível com base na quilometragem
    calcularConsumo(quilometragem) {
        return quilometragem / this.eficiencia; // Retorna litros consumidos
    }
}

// Classe derivada Moto
class Moto extends Veiculo {
    constructor(modelo, ano, eficiencia) {
        super(modelo, ano);
        this.eficiencia = eficiencia; // km por litro
    }
    
    // Método para calcular o consumo de combustível com base na quilometragem
    calcularConsumo(quilometragem) {
        return quilometragem / this.eficiencia; // Retorna litros consumidos
    }
}

// Exemplo de uso
const meuCarro = new Carro("Sedan", 2020, 12); // 12 km/l
console.log(`Consumo do carro para 240 km: ${meuCarro.calcularConsumo(240)} litros`);

const minhaMoto = new Moto("Esportiva", 2022, 20); // 20 km/l
console.log(`Consumo da moto para 240 km: ${minhaMoto.calcularConsumo(240)} litros`);