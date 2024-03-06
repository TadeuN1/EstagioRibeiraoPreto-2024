let fib1 = 0;
let fib2 = 1;

let num = 14; // Atribuir valor na variável num.

while(fib2 < num){
    [fib1, fib2] = [fib2, fib1 + fib2];
}

if(num === 0 || num === 1){
    console.log('Valor atribuído já estabelecido pelo padrão Fibonacci.')
} else if(fib2 === num){
    console.log(`Valor ${num} pertence à sequência Fibonacci.`)
} else {
    console.log(`Valor ${num} não pertence à sequência Fibonacci.`)
}
