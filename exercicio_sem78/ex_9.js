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
