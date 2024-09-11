//  Crie um algoritmo usando funções que faça uma leitura de 10 letras em um vetor,
// e após verificar quantas vogais foram lidas e mostre somente consoantes no alerta.



//função retorna falso ou verdadeiro
function ehVogal(letra) {
    const vogais = ['a', 'e', 'i', 'o', 'u'];
    return vogais.includes(letra.toLowerCase());
}

// Faz a verificação de letras digitadas, numeros ou caracteres especiais, negando se não for letras
function lerLetras() {
    let letras = [];
    while (letras.length < 10) {
        let letra = prompt(`Digite a ${letras.length + 1}ª letra:`);

        if (letra && letra.length === 1 && /[a-zA-Z]/.test(letra)) {
            letras.push(letra.toLowerCase());
        } else {
            alert("Erro: Você deve digitar uma única letra. Tente novamente.");
        }
    }
    return letras;
}
// contar vogais no parametro letras everificar
function contarVogais(letras) {
    let vogais = letras.filter(letra => ehVogal(letra));
    return vogais.length;
}
// verifica letras no parametro
function mostrarConsoantes(letras) {
    let consoantes = letras.filter(letra => !ehVogal(letra));

    //junta todos os elementos de um array e retorna na função consoantes 

    alert("As consoantes são: " + consoantes.join(", "));
}

function main() {
    let letras = lerLetras();
    let qtdVogais = contarVogais(letras);
    alert("Número de vogais lidas: " + qtdVogais);
    mostrarConsoantes(letras);
}

// Chama a função principal
main();
