# Instruções

- Faça uma cópia deste arquivo .md para um repositório próprio
- Resolva as 6 questões objetivas assinalando a alternativa correta
- Resolva as 4 questões dissertativas escrevendo no próprio arquivo .md
  - lembre-se de utilizar as estruturas de código como ``esta aqui com ` `` ou
```javascript
//esta aqui com ```
let a = "olá"
let b = 10
print(a)
```
- Resolva as questões com uso do Visual Studio Code ou ambiente similar.
- Teste seus códigos antes de trazer a resposta para cá.
- Cuidado com ChatGPT e afins: entregar algo só para ganhar nota não faz você aprender e ficar mais inteligente. Não seja dependente da máquina! (E não se envolva em plágio!)
- ao final, publique seu arquivo lista_02.md com as respostas em seu repositório, e envie o link pela Adalove. 

# Questões objetivas

**1)** Considere o seguinte código JavaScript:

```javascript
//EX01
let p = 10;
let q = 3;
let r = 6;

let resultado = (p % q === 1) && (r * 2 > p) || (q + r < p);
console.log(resultado);

const valores = [3, 6, 9, 12, 15];
let produto = 1;

for (let j = 0; j < valores.length; j++) {
  produto *= valores[j];
}

console.log("O produto dos valores é:", produto);


```
Qual das seguintes alternativas melhor descreve o que o código faz?

A) O código avalia a expressão booleana, imprime `true`, calcula o produto dos números na lista e imprime o resultado no console.
______

**2)** O código a seguir contém duas funções que calculam o limite de crédito de um cliente com base nos seus gastos e na renda mensal.

```javascript
// Versão 1 da função de análise de crédito
function analisarCredito1() {
    var compras = [2500, 1200, 800, 100];
    var totalCompras = compras[0];//acessa o valor compras [0], ou seja, totalCompras vale 2500
    var limite = 5000;
    var status = 'aprovado';
    var saldoDisponivel = 0;
    var i = 1;

    do {
        totalCompras += compras[i];//vai somando a array compras a variável totalCompras
        i++;
    } while (limite >= totalCompras && i < compras.length); //limite deve ser maior ou igual ao valor totalCompras e i deve ser menor que o comprimento do array compras

    saldoDisponivel = limite - totalCompras; 

    if (saldoDisponivel < 0) { //se saldo for menor que zero(negativo), o status será negado
        status = 'negado';
    }
    console.log(`Seu crédito foi ${status}. Saldo disponível: ${saldoDisponivel}.`);
}
```

```javascript
// Versão 2 da função de análise de crédito
function analisarCredito2() {
    var compras = [2500, 1200, 800, 100];
    var totalCompras = compras[0];
    var limite = 5000;
    var status = 'aprovado';
    var saldoDisponivel = 0;
    var i = 1;

    while (limite >= totalCompras && i < compras.length) {
        totalCompras += compras[i];
        i++;
    }

    saldoDisponivel = limite - totalCompras;

    if (saldoDisponivel < 0) {
        status = 'negado';
    }
    console.log(`Seu crédito foi ${status}. Saldo disponível: ${saldoDisponivel}.`);
}
```
Se ambas as funções forem executadas com os valores fornecidos, qual será a saída exibida no console?

A) Ambas as funções exibirão: 'Seu crédito foi aprovado. Saldo disponível: 400.'

______

**3)** Considere o seguinte trecho de código em JavaScript:
```javascript
//EX03
const idade = 21;

if (idade >= 18 && idade < 60) {
  console.log("Você é um adulto!");
} else if (idade < 18) {
  console.log("Você é menor de idade!");
} else {
  console.log("Você está na melhor idade!");
}
```
Qual das seguintes alternativas melhor descreve o comportamento do código?

B) O código verifica se a idade pertence à faixa adulta. Se for, exibe "Você é um adulto!". Caso contrário, verifica se é menor de idade e exibe "Você é menor de idade!". Se nenhuma das condições anteriores for verdadeira, exibe "Você está na melhor idade!".

______

**4)** Qual será o resultado impresso no console após a execução do seguinte código?
```javascript
//EX04
var energiaDisponivel = 1200;
var bateriaExtra = 400;
var consumoDispositivos = [300, 600, 500, 200, 400];

for (var i = 0; i < consumoDispositivos.length; i++) {
    var consumo = consumoDispositivos[i];

    if (consumo <= energiaDisponivel) {
        console.log("Dispositivo " + (i+1) + " ligado. Energia restante: " + (energiaDisponivel - consumo));
        energiaDisponivel -= consumo;
    } else if (consumo <= energiaDisponivel + bateriaExtra) {
        console.log("Dispositivo " + (i+1) + " ligado com bateria extra. Energia restante: " + ((energiaDisponivel + bateriaExtra) - consumo));
        energiaDisponivel = 0;
        bateriaExtra -= (consumo - energiaDisponivel);
    } else {
        console.log("Dispositivo " + (i+1) + " não pode ser ligado. Energia insuficiente.");
    }
}
```

Escolha a opção que responde corretamente:

D)
Dispositivo 1 ligado. Energia restante: 900

Dispositivo 2 ligado. Energia restante: 300

Dispositivo 3 ligado com bateria extra. Energia restante: 200

Dispositivo 4 não pode ser ligado. Energia insuficiente.

Dispositivo 5 não pode ser ligado. Energia insuficiente.
______

**5)** Qual é a principal função do método update() em um jogo desenvolvido com Phaser.js?

Escolha a opção que melhor descreve seu propósito:

B) O método update() é chamado continuamente a cada quadro (frame) do jogo, sendo usado para atualizar a lógica, movimentação e interações dos objetos na cena.

______

**6)** Qual é o principal objetivo do módulo Matter.js Physics em Phaser.js?

Escolha a opção que responde corretamente:

A) Simular física avançada, incluindo corpos rígidos, colisões complexas e interação entre objetos com gravidade e forças.

______

# Questões dissertativas

**7)** Uma loja online deseja implementar um sistema de classificação de pedidos com base no valor total da compra. O sistema deve determinar a categoria de um pedido com as seguintes regras:

```javascript
function analisarCredito2() {
    var pedido = [40, 90, 200, 12];
    var totalPedidos = pedido[0];
    var i = 1;

    while(i < compras.length) {
        totalPedidos += compras[i];
        i++;
    }

    if (pedido < 50,00) {
        console.log("Frete não disponível!");
    }
    console.log(`Seu crédito foi ${status}. Saldo disponível: ${saldoDisponivel}.`);
}
Pedidos abaixo de R$50,00 → "Frete não disponível!"

Pedidos entre R$50,00 e R$199,99 (inclusive) → "Frete com custo adicional!"

Pedidos de R$200,00 ou mais → "Frete grátis!"
```
Implemente um pseudocódigo que receba o valor total da compra e exiba a classificação correta do frete para o cliente.
______

**8)** Considere a implementação da classe base Veiculo em um sistema de modelagem de veículos. Sua tarefa é implementar, utilizando pseudocódigo, as classes derivadas Carro e Moto, que herdam da classe Veiculo, adicionando atributos específicos e métodos para calcular o consumo de combustível de um carro e de uma moto, respectivamente.

```javascript
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

```
Implementação genérica para cálculo de consumo, a ser sobrescrita pelas subclasses.
Agora, implemente as classes Carro e Moto, garantindo que ambas herdem de Veiculo e possuam métodos específicos para calcular o consumo de combustível com base na quilometragem e eficiência do veículo.
______

**9)** Você é um cientista da NASA e está ajudando no desenvolvimento de um sistema de pouso para sondas espaciais em Marte. Seu objetivo é calcular o tempo necessário para que a sonda reduza sua velocidade até um nível seguro para pouso, considerando uma velocidade inicial de entrada na atmosfera marciana e uma taxa de desaceleração constante causada pelo atrito atmosférico e retrofoguetes.

Entretanto, a sonda não pode ultrapassar um tempo máximo de descida para evitar desvios orbitais, nem pode desacelerar além de um limite mínimo, pois isso poderia causar instabilidade no pouso.

Implemente a lógica dessa simulação em pseudocódigo, considerando a seguinte equação para atualização da velocidade:

Considere a fórumla de atualização velocidade:
```javascript
    // Função para calcular o tempo necessário para reduzir a velocidade da sonda até um nível seguro
function calcularTempoPouso(velocidadeInicial, desaceleracao, velocidadeSegura, tempoMaximo) {
    // Verifica se os valores de entrada são válidos
    if (velocidadeInicial <= 0 || desaceleracao <= 0 || velocidadeSegura <= 0 || tempoMaximo <= 0) {
        throw new Error("Todos os valores devem ser positivos e maiores que zero.");
    }
    
    // Calcula o tempo necessário para atingir a velocidade segura
    let tempoNecessario = (velocidadeInicial - velocidadeSegura) / desaceleracao;
    
    // Se o tempo necessário ultrapassar o tempo máximo permitido, retorna -1 indicando falha
    if (tempoNecessario > tempoMaximo) {
        return -1; // Indica que não foi possível reduzir a velocidade a tempo
    }
    
    return tempoNecessario; // Retorna o tempo necessário para atingir a velocidade segura
}

// Exemplo de uso:
let velocidadeInicial = 5000; // Velocidade de entrada na atmosfera marciana (m/s)
let desaceleracao = 50;       // Taxa de desaceleração (m/s²)
let velocidadeSegura = 5;     // Velocidade segura para pouso (m/s)
let tempoMaximo = 120;        // Tempo máximo permitido para a descida (segundos)

let tempo = calcularTempoPouso(velocidadeInicial, desaceleracao, velocidadeSegura, tempoMaximo);

if (tempo === -1) {
    console.log("Não foi possível reduzir a velocidade dentro do tempo permitido.");
} else {
    console.log(`Tempo necessário para atingir a velocidade segura: ${tempo.toFixed(2)} segundos.`);
}

```
Seu programa deve determinar quanto tempo será necessário para que a sonda atinja uma velocidade segura de pouso, sem ultrapassar os limites estabelecidos.
______

**10)** Em um sistema de análise financeira, as operações de investimento de uma empresa podem ser representadas por matrizes, onde cada linha representa um tipo de investimento e cada coluna representa um período de tempo.

A seguir, é fornecida a implementação da função SomarMatrizesInvestimento(matrizA, matrizB), que soma os valores de duas matrizes de investimento. Sua tarefa é implementar uma função semelhante, porém que realize a multiplicação das matrizes de investimento, determinando como os investimentos afetam os resultados ao longo do tempo.

```javascript
function MultiplicarMatrizesInvestimento(matrizA, matrizB) {
    // Verifica se a multiplicação é possível (colunas de A == linhas de B)
    if (matrizA[0].length !== matrizB.length) {
        return "As matrizes não podem ser multiplicadas. O número de colunas da primeira matriz deve ser igual ao número de linhas da segunda matriz.";
    }
    
    let linhasA = matrizA.length;
    let colunasA = matrizA[0].length;
    let colunasB = matrizB[0].length;
    
    // Inicializa a matriz resultado com zeros
    let matrizResultado = Array.from({ length: linhasA }, () => Array(colunasB).fill(0));
    
    // Multiplicação de matrizes
    for (let i = 0; i < linhasA; i++) {
        for (let j = 0; j < colunasB; j++) {
            for (let k = 0; k < colunasA; k++) {
                matrizResultado[i][j] += matrizA[i][k] * matrizB[k][j];
            }
        }
    }
    
    return matrizResultado;
}

// Exemplo de uso
let investimentosAno1 = [
    [1000, 2000],
    [1500, 2500]
];

let fatoresCrescimento = [
    [1.1, 0.9],
    [0.8, 1.2]
];

let resultado = MultiplicarMatrizesInvestimento(investimentosAno1, fatoresCrescimento);
console.log("Resultado da multiplicação das matrizes:");
console.table(resultado);

```
Agora, implemente a função MultiplicarMatrizesInvestimento(matrizA, matrizB), que multiplica as duas matrizes, simulando o efeito de diferentes fatores de crescimento e impacto financeiro nos investimentos ao longo do tempo.