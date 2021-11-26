// Exercicios de escrita

// 1. Faça um programa que:
    
// a) Pergunte a idade do usuário

 const minhaIdade = Number(prompt("Digite sua idade"));
 
    
// b) Pergunte a idade do seu melhor amigo ou da sua melhor amiga

const idadeAmigo = Number(prompt("Digite a idade do seu melhor amigo"));

// c) **Imprima na console** a seguinte mensagem: "Sua idade é maior do que a do seu melhor amigo?", seguido pela resposta (`true` ou `false`)

const comparaIdades = minhaIdade > idadeAmigo;
console.log("Sua idade é maior do que a do seu melhor amigo?", comparaIdades);

// d) **Imprima na console** a diferença de idade (não tem problema se sair um número negativo)

 const diferencaIdade = minhaIdade - idadeAmigo;
 console.log("Diferença entre as idades:", diferencaIdade);


2. Faça um programa que:

// a) Peça ao usuário que insira um número **par**
const numero = prompt("Insira um número par");

// b) Imprima na console **o resto da divisão** desse número por 2.
console.log("Resto da divisão por 2", Number(numero) % 2);

// c) Teste o programa com diversos números pares. Você notou um padrão? Escreva em um comentário de código.
O padrão é que o resto da divisão de um número par por 2 sempre será 0

// d) O que acontece se o usuário inserir um número ímpar? Escreva em um comentário de código
Quando o número ímpar é inserido, o resto da divisão dele por 2 é sempre 1


//3. Faça um programa que pergunte ao usuário sua idade em anos. Depois, imprima no console 
const idade = Number(prompt("Digite sua idade"))
//a) A idade do usuário em meses
console.log("a. Idade em meses", idade*12)
//b) A idade do usuário em dias
console.log("b. Idade em dias", idade*365)
//c) A idade do usuário em horas
console.log("c. Idade em horas", idade*365*24)
//4. Faça um programa que pergunte ao usuário dois números. Em seguida, faça as operações e imprima no console as seguintes mensagens seguidas pelo `true` ou `false`:

O primeiro numero é maior que segundo? true
O primeiro numero é igual ao segundo? false
O primeiro numero é divisível pelo segundo? true
O segundo numero é divisível pelo primeiro? true

obs: O true ou false vai depender dos números inseridos e do resultado das operações.

const num1 = Number(prompt("Digite um número"))
const num2 = Number(prompt("Digite outro número"))

console.log("O primeiro numero é maior que segundo?", num1 > num2);
console.log("O primeiro numero é igual ao segundo?", num1 === num2);
console.log("O primeiro numero é divisível pelo segundo?", num1 % num2 === 0);
console.log("O segundo numero é divisível pelo primeiro?", num2 % num1 === 0);