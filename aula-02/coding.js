const nota1 = 10;
const nota2 = 7;
const nota3 = 9.2;

const media = (nota1 + nota2 + nota3) / 3

if (media < 3) {
    console.log(`Sua média é ${media.toFixed(2)}. Você está reprovado!`);
} else if (media > 3 && media < 6 ) {
    console.log(`Sua média é ${media.toFixed(2)}. Você está de recuperação!`);
} else if (media > 6) {
    console.log(`Parabéns, sua média é ${media.toFixed(2)}. Você está aprovado! Next!`);
}