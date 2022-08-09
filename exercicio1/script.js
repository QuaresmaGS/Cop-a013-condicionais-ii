//aninhado
const num = Number(prompt("Escreva um número aqui"))

if(num%2==0){
    if(num%3==0){
    console.log(`O ${num} é divisível por 2 e por 3`);
    }else{
    console.log(`O ${num} não é divisível por 3.`);
}
}

//lógico

if(num%2==0 && num%3==0){
    console.log(`O ${num} é divisível por 2 e 3.`);
}else{
    console.log(`O ${num} não é divisível por nenhum deles`)
}
