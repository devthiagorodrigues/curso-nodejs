const numero = 5;

if (numero > 1 && numero < 3) {
    console.log('Verdadeiro');
} else {
    console.log('Falso');
}

// Nesta festa só pode entrar quem tem de 16 a 18 anos

const idade = 19;

if (idade >= 16 && idade <=18) {
    console.log(`Você tem ${idade}, pode entrar. Curta a festa!`);
} else if (idade > 0 && idade < 16 ) {
    console.log(`Você tem apenas ${idade} e ainda não pode entrar. Volte para casa!`);
} else if (idade > 18) {
    console.log(`Você tem ${idade} anos, procure um trabalho.`);
} else {
    console.log('Idade inválida.');
}