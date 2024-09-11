// Crie uma função que lê uma lista de 4 notas, mostre-as junto com a média no alerta,
// considerando que o usuário não pode informar letras, palavras ou vazio.
// Alerte-o do erro e repita a leitura das notas caso ocorra.

function lerNotas() {
    let notas = [];
    while (notas.length < 4) {
        let input = prompt(`Digite a ${notas.length + 1}ª nota (0 a 10):`);
        let nota = parseFloat(input);


        //Funão lê  nota e verifica negando letras digitadas
        if (!isNaN(nota) && nota >= 0 && nota <= 10) {
            notas.push(nota);
       } else {
            alert("Inválido: Você deve digitar apenas números entre 0 e 10. Tente novamente.");
        }
    }

    //valor cumulativo , retornando a soma das notas com a média
    let soma = notas.reduce((num, nota) => num + nota, 0);
    let media = soma / notas.length;
//junta todos os elementos de um array e retorna na string calculo notas

    alert("As notas informadas foram: " + notas.join(", ") + "\nMédia: " + media.toFixed(2));
}

// Chama a função para executar
lerNotas();
