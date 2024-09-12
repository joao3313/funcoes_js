// Crie uma função que lê uma lista de 4 notas, mostre-as junto com a média no alerta,
// considerando que o usuário não pode informar letras, palavras ou vazio.
// Alerte-o do erro e repita a leitura das notas caso ocorra.


function lerNotas() {
    let notas = [];
    
    for (let i = 0; i < 4; i++) {
        let notaValida = false;
        
        while (!notaValida) {
            let input = prompt(`Digite a ${i + 1}ª nota (0 a 10):`);
            let nota = parseFloat(input);
            
            // Verifica se o valor é um número e se está entre 0 e 10
            if (!isNaN(nota) && nota >= 0 && nota <= 10) {
                notas.push(nota);
                notaValida = true;
            } else {
                alert("Inválido: Digite uma nota válida entre 0 e 10.");
            }
        }
    }

    // Calcula a média
    let soma = 0;
    for (let i = 0; i < notas.length; i++) {
        soma += notas[i];
    }
    let media = soma / 4;

    // Exibe as notas e a média
    alert("Notas: " + notas.join(", ") +"\nMédia: " + media);
}

// Chama a função
lerNotas();











