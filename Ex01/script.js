//Ex1: Crie uma função que lê um vetor de 5 números inteiros e mostre-os, considere que o usuário não pode informar letras, palavras ou vazio. Alerte-o do erro e repita a leitura caso ocorra.

//let num = [5, 6, 7, 8, 9, 10];
function listaNumeros() {
    let numeros = [];
    while (numeros.length < 5) {
        let listaPrincipal = prompt(`Digite o ${numeros.length + 1}º número inteiro:`);
        let numero = parseInt(listaPrincipal);

        // Negando letras digitadas
        if (!isNaN(numero)) {
            numeros.push(numero);
        } else {
            alert("Inválido: Você deve digitar apenas números. Tente novamente.");
        }
    }
//junta todos os elementos de um array e retorna na string
    alert("Os números informados foram: " + numeros.join(", "));
}

// Chama a função para executar
listaNumeros();
