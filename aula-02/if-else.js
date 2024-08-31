// if esle

const number = 78;

if (number % 2 == 0) {
    console.log(`O número ${number} é PAR `);
} else {
    console.log(`O número ${number} é IMPAR`);
}

// if else if

const idade = 1;

if (idade < 3) {
    console.log('Você é bebê');
} else if (idade < 12) {
    console.log('Você é criança');
} else if (idade < 18) {
    console.log('Você é adolescente');
} else if (idade < 60) {
    console.log('Você é adulto');
} else if (idade < 80) {
    console.log('Você é idoso');
} else {
    console.log('Imortal ou está fazendo hora extra');
}