//  Crie um algoritmo usando funções que faça uma leitura de 10 letras em um vetor,
// e após verificar quantas vogais foram lidas e mostre somente consoantes no alerta.



//função retorna falso ou verdadeiro




function Vogal(letra) {
    const vogais = ['a', 'e', 'i', 'o', 'u'];
    return vogais.includes(letra.toLowerCase());
}

// Faz a verificação de letras digitadas, numeros ou caracteres especiais, negando se não for letras

function Letras() {
    let letras = [];
    while (letras.length < 10) {
        let letra = prompt(`Digite a ${letras.length + 1}ª letra:`);

// Test verifica o inicio de uma String, usando o .test para retornar true ou false
        if (letra && letra.length === 1 && /[a-zA-Z]/.test(letra)) {
            letras.push(letra.toLowerCase());
        } else {
            alert("Inválido: Digite uma letra, e tente novamente.");
        }
    }
    return letras;
}

//Filter - chama uma função fornecida em cada elemento array
// contar vogais no parametro letras everificar
function contarVogais(letras) {
    let vogais = letras.filter(letra => Vogal(letra));
    return vogais.length;
}
// verifica letras no parametro
function mostreConsoantes(letras) {
    let consoantes = letras.filter(letra => !Vogal(letra));

    //junta todos os elementos de um array e retorna na função consoantes 

    alert("As consoantes são: " + consoantes.toString(", "));
}

function main() {
    let letras = Letras();
    let qtdVogais = contarVogais(letras);
    alert("Número de vogais lidas: " + qtdVogais);
    mostreConsoantes(letras);
}

// Chama a função principal
main();
