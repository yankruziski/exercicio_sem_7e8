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
