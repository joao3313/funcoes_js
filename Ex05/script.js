// Crie um algoritmo usando funções que leia até 50 números inteiros e armazene-os numa lista de números
// considere as premissas abaixo:

// • Não pode informar letras, palavras ou vazio. Alerte-o do erro e repita a leitura.
// • Não pode informar números negativos.
// • Crie um menu que o usuário escolha cadastrar 5, 15, 25 ou 50.
// • Ao final do cadastro ele tem um outro menu pra escolher exibir:
//- A lista cadastrada, somente os pares, ou somente os impares.





let numeros = []; // Lista para armazenar os números

// Função para cadastrar números
function cadastrarNumeros(quantidade) {
    for (let i = 0; i < quantidade; i++) {
        let numeroValido = false;
        while (!numeroValido) {
            let lerNumeros = prompt(`Digite o ${i + 1}º número inteiro (não negativo):`);
            let numero = parseInt(lerNumeros);

            if (!isNaN(numero) && numero >= 0) {
                numeros.push(numero);
                numeroValido = true;
            } else {
                alert("Inválido: Informe um número inteiro válido e não negativo.");
            }
        }
    }
}

// Função para exibir os números cadastrados
function exibirLista() {
    if (numeros.length === 0) {
        alert("Nenhum número foi cadastrado.");
        return;
    }
    alert("Números cadastrados: " + numeros.toString(", "));
}

// Função para exibir apenas os números pares
function exibirPares() {
    let pares = numeros.filter(num => num % 2 === 0);
    if (pares.length === 0) {
        alert("Nenhum número par foi cadastrado.");
    } else {
        alert("Números pares: " + pares.toString(", "));
    }
}

// Função para exibir apenas os números ímpares
function exibirImpares() {
    let impares = numeros.filter(num => num % 2 !== 0);
    if (impares.length === 0) {
        alert("Nenhum número ímpar foi cadastrado.");
    } else {
        alert("Números ímpares: " + impares.toString(", "));
    }
}



// Função para exibir o menu de exibição de números
function menuExibir() {
    let opcao;
    do {
        opcao = prompt("Menu de exibição:\n1 - Exibir todos os números\n2 - Exibir apenas números pares\n3 - Exibir apenas números ímpares\n4 - Sair\nEscolha uma opção:");
        switch (opcao) {
            case '1':
                exibirLista();
                break;
            case '2':
                exibirPares();
                break;
            case '3':
                exibirImpares();
                break;
            case '4':
                alert("Saindo...");
                break;
            default:
                alert("Opção inválida. Tente novamente.");
        }
    } while (opcao !== '4');
}


// Função para exibir o menu principal
function menuPrincipal() {
    let opcao;
    do {
        opcao = prompt("Menu principal:\n1 - Cadastrar 5 números\n2 - Cadastrar 15 números\n3 - Cadastrar 25 números\n4 - Cadastrar 50 números\n5 - Sair\nEscolha uma opção:");
        switch (opcao) {
            case '1':
                cadastrarNumeros(5);
                menuExibir();
                break;
            case '2':
                cadastrarNumeros(15);
                menuExibir();
                break;
            case '3':
                cadastrarNumeros(25);
                menuExibir();
                break;
            case '4':
                cadastrarNumeros(50);
                menuExibir();
                break;
            case '5':
                alert("Saindo...");
                break;
            default:
                alert("Opção inválida. Tente novamente.");
        }
    } while (opcao !== '5');
}

// Chama a função principal
menuPrincipal();
