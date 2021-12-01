// 1. Faça um programa que pergunta ao usuário qual a idade dele e imprima no console se ele/ela pode dirigir (apenas maiores de idade).
    
 if (idade >= 18) {
   console.log("Você pode dirigir.");
 } else {
   console.log("Você não pode dirigir.");
}

 
// 2. Agora faça um programa que verifica que turno do dia um aluno estuda. Peça para digitar **M** (matutino) ou **V** (Vespertino) ou **N** (Noturno). Imprima no console a mensagem "Bom Dia!",
//     "Boa Tarde!" ou "Boa Noite!". Utilize o bloco `if/else`
// const periodo = prompt("Escolha seu período: M (matutino) ou V (Vespertino) ou N (Noturno)")

 if (periodo === "M"){
   console.log("Bom dia!")
 } else if (periodo === "V"){
   console.log("Boa tarde!")
 } else if (periodo === "N"){
   console.log("Boa noite!")
 } else {
   console.log("Erro!")
 }

// 3. Repita o exercício anterior, mas utilizando a estrutura de `switch case` agora.

  const periodo = prompt(
   "Escolha seu período: M (matutino) ou V (Vespertino) ou N (Noturno)"
  );

     switch (periodo) {
    case "M":
     console.log("Bom dia!");
     break;
   case "V":
     console.log("Boa tarde!");
     break;
   case "N":
     console.log("Boa noite!");
     break;
   default:
     console.log("Erro");
     break;
 }

//  4.Considere a situação: você vai ao cinema com um amigo ou amiga, porém ele/ela só assistirá a um filme com você se ele for do gênero fantasia e se o ingresso está abaixo de 15 reais.
//  Faça um código que pergunta ao usuário qual o gênero de filme que vão assistir e outra pergunta sobre o preço do ingresso, então verifique se seu amigo ou amiga vai topar assistir o filme. 
//  Caso positivo, imprima no console a mensagem: "Bom filme!", caso contrário, imprima "Escolha outro filme :("
   
 const genero = prompt("Qual o gênero do filme?");
 const preco = prompt("Qual o preço do ingresso?");

 if (genero === "fantasia" && preco <= 15) {
   console.log("Bom filme!");
 } else {
   console.log("Escolha outro filme :(");
 }