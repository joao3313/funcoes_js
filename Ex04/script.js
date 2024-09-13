// Crie um algoritmo usando funções que tenha um menu de cadastro
// de nomes e salários bruto de até 50 pessoas, e ao final, mostre os nomes,
// salários brutos e os salários líquidos de todos que foram lidos, considerando 10% de INSS a descontar.

let pessoas = []; // Array para armazenar os dados das pessoas

// Função abaixo para cadastrar uma pessoa
function informeNome() {
    if (pessoas.length >= 50) {
        alert("Limite de 50 cadastros atingido.");
        return;
    }



    let nome = prompt("Digite o nome da pessoa:");
    if (!nome) {
        alert("Inválido: O nome não pode ser vazio.");
        return;
    }

    let salarioBruto = parseFloat(prompt("Digite o salário bruto:"));
    if (isNaN(salarioBruto) || salarioBruto <= 0) {
        alert("Erro: Salário inválido. Tente novamente.");
        return;
    }
   // Função acima para cadastrar uma pessoa


    // Armazena o nome e salário bruto no array
    pessoas.push({ nome, salarioBruto });
}

// Função para calcular o salário líquido
function calcularSalarioLiquido(salarioBruto) {
    return salarioBruto * 0.9; // Desconto de 10% de INSS
}

// Função para mostrar os dados das pessoas cadastradas
function ehDados() {
    if (pessoas.length === 0) {
        alert("Nenhum cadastro realizado.");
        return;
    }

    let resultado = "Nomes: Salários Brutos e Salários Líquidos:\n";
    pessoas.forEach(pessoa => {
        let salarioLiquido = calcularSalarioLiquido(pessoa.salarioBruto);
        resultado += `${pessoa.nome}, Salário Bruto: R$${pessoa.salarioBruto.toFixed(2)}, Salário Líquido: R$${salarioLiquido.toFixed(2)}\n`;
    });

    alert(resultado);
}

// Função do menu de continuação
function menuContinuacao() {
    let continuar;
    do {
        informeNome();
        continuar = prompt("Deseja continuar o cadastro? (S/N):").toUpperCase();
    } while (continuar === 'S' && pessoas.length < 50);

    ehDados();
}

// Chama a função do menu de continuação
menuContinuacao();
