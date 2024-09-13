//  Crie um algoritmo usando funções que faça uma leitura de 10 letras em um vetor,
// e após verificar quantas vogais foram lidas e mostre somente consoantes no alerta.



//função retorna falso ou verdadeiro



function ehVogal(letra) {
    const vogais = ['a', 'e', 'i', 'o', 'u'];
    return vogais.includes(letra.toLowerCase()); // Verifica se a letra é uma vogal (ignora maiúsculas/minúsculas)
}

function lerLetras() {
    let letras = [];
    let consoantes = [];
    let vogais = 0;

    for (let i = 0; i < 10; i++) {
        let letra = prompt(`Digite a ${i + 1}ª letra:`);

        if (letra && letra.length === 1 && /[a-zA-Z]/.test(letra)) {
            letras.push(letra);

            // Verifica se é vogal ou consoante
            if (ehVogal(letra)) {
                vogais++;
            } else {
                consoantes.push(letra);
            }
        } else {
            alert("Inválido: Digite uma letra válida.");
            i--; // Repetir a leitura se for inválido
        }
    }

    // Mostra a quantidade de vogais e as consoantes
    alert(`Número de vogais lidas: ${vogais}`);
    alert(`Consoantes: ${consoantes.join(", ")}`);
}

// Chama a função
lerLetras();
