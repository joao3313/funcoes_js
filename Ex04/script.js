// Crie um algoritmo usando funções que tenha um menu de cadastro
// de nomes e salários bruto de até 50 pessoas, e ao final, mostre os nomes,
// salários brutos e os salários líquidos de todos que foram lidos, considerando 10% de INSS a descontar.

let pessoas = []; // Array para armazenar os dados das pessoas

// Função para cadastrar uma pessoa
function cadastrarPessoa() {
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

    // Armazena o nome e salário bruto no array
    pessoas.push({ nome, salarioBruto });
}

// Função para calcular o salário líquido
function calcularSalarioLiquido(salarioBruto) {
    return salarioBruto * 0.9; // Desconto de 10% de INSS
}

// Função para mostrar os dados das pessoas cadastradas
function mostrarDados() {
    if (pessoas.length === 0) {
        alert("Nenhum cadastro realizado.");
        return;
    }

    let resultado = "Nomes : Salários Brutos e Salários Líquidos: \n";
    pessoas.forEach(pessoa => {
        let salarioLiquido = calcularSalarioLiquido(pessoa.salarioBruto);
        resultado += `${pessoa.nome}, Salário Bruto: R$${pessoa.salarioBruto.toFixed(2)}, Salário Líquido: R$${salarioLiquido.toFixed(2)}\n`;
    });

    alert(resultado);
}

// Função do menu principal
function menu() {
    let opcao;
    do {
        opcao = prompt("Menu:\n1 - Cadastrar Pessoa\n2 - Mostrar Dados\n3 - Sair\nEscolha uma opção:");

        switch (opcao) {
            case '1':
                cadastrarPessoa();
                break;
            case '2':
                mostrarDados();
                break;
            case '3':
                alert("Saindo...");
                break;
            default:
                alert("Opção inválida. Tente novamente.");
        }
    } while (opcao !== '3');
}

// Chama a função do menu principal
menu();
