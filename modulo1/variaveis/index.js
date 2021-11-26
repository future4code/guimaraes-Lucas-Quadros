//. 1. Construa um programa, seguindo os seguintes passos:
    
//    a) Declare uma variável para armazenar um nome, sem atribuir um valor.
    
let nome

//    b) Declare uma variável para armazenar uma idade, sem atribuir um valor.
let idade
    
//    c) Imprima na tela o tipo dessas variáveis que acabou de criar, usando o comando `typeof`.
    let nome 
    let idade 
    
    console.log(typeof nome)
    console.log(typeof idade)

//    d) Reflita: por que esse tipo foi impresso? Escreva a resposta em um comentário de código.

 // Como não demos nenhum valo as variaveis elas estão como indefinidas ou seja imprimiu undefined

//    e) Pergunte ao usuário seu nome e sua idade, atribuindo esses dois valores às variáveis que acabou de criar.

    nome = prompt("Digite seu nome")
    idade = prompt("digite sua idade")

//    f) Novamente, imprima na tela o tipo dessas variáveis. O que você notou? Escreva em um comentário de código.
    
    console.log(nome, idade);
     console.log(typeof nome);
     console.log(typeof idade);

     // // Tudo que sai do prompt é uma string
    
    


//    g) Para finalizar, imprima na tela a mensagem: "Olá `nome`,  você tem `idade` anos". Onde `nome` e `idade` são os valores que o usuário inseriu

console.log("Olá", nome, "você tem", idade, "anos")


//. 2.Escreva um programa que faça 3 perguntas de Sim ou Não, armazenado em uma variável. Por exemplo: "Você está usando uma roupa azul hoje?". Depois, siga os passos:

const pergunta1 = "Você está usando azul hoje?";
const pergunta2 = "Você está com calor?";
const pergunta3 = "Você gosta da Labenu?";


a) Crie três novas variáveis, contendo as respostas

const resposta1 = prompt(pergunta1);
const resposta2 = prompt(pergunta2);
const resposta3 = prompt(pergunta3);

b) Imprima na tela todas as perguntas seguidas por suas respectivas respostas. Por exemplo:

 console.log(pergunta1, "-", resposta1);
 console.log(pergunta2, "-", resposta2);
 console.log(pergunta3, "-", resposta3);


 // 3)

let a = 10
let b = 25


// Agora, queremos trocar os valores delas, de forma que `a` passe a ter o valor de `b` e `b` passe a ter o valor de `a`. 
// Ou seja, no caso desse exemplo acima, `a` passaria a ser 25 e `b` passaria a ser 10.

let a = 10
let b = 25

// Aqui faremos uma lógica para trocar os valores

// Depois de trocados, teremos o seguinte resultado:
console.log("O novo valor de a é", a) // O novo valor de a é 25
console.log("O novo valor de b é", b) // O novo valor de b é 10


//Crie a lógica que deve ser inserida no código para que os valores de a e b sejam trocados, independente de qual valor essas variáveis assumam inicialmente 
//(ou seja: não basta dizer que `a = 25` e `b = 10` porque se os valores iniciais mudarem, a lógica do seu programa teria que mudar também).

 c = a; 
 c = 10
 a = b; 
 a = 25
 b = c; 
 b = 10

console.log("a", a);
console.log("b", b);