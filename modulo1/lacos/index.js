//=========Exercicios de implementação  de código=============

//EXERCICIOS DE IMPLEMENTAÇÂO
// 1)
 const bichinhos = Number(prompt("quantos bichinhos de estimação você tem?"));
    console.log(bichinhos);

//a)

   if(bichinhos === 0) { console.log("Que pena! Você pode adotar um pet!")}

//b)

 if(bichinhos > 0){
   let arrayBichinhos = []
   for(let i = 0; i < bichinhos; i++){

     arrayBichinhos.push(prompt("diga o nome do seu bichinho"))
   }
   console.log(arrayBichinhos)//c) Por fim, imprima o array com os nomes dos bichinhos no console
 }

// 2)
//a) 
 function imprimirValorDoArrayOriginal (arrayOriginal) {
   for(let valor of arrayOriginal){
     console.log(valor)
   }
 }
 imprimirValorDoArrayOriginal(arrayOriginal)

//b)


 function imprimirValorDoArrayOriginal (arrayOriginal) {
   for(let valor of arrayOriginal){
     console.log(valor/10)
   }
 }
 imprimirValorDoArrayOriginal(arrayOriginal)

//c)
function imprimirValoresPares (arrayOriginal) {
   let arrayNumerosPares = []
   for(let valor of arrayOriginal){
     if(valor % 2 === 0){
      arrayNumerosPares.push(valor)
    }

   }
   console.log(arrayNumerosPares)
 }
 imprimirValoresPares(arrayOriginal)

//d)
 function imprimirArrayDeStrings (arrayOriginal){
   let arrayDeStrings = []
   let i = 0
   for(let valor of arrayOriginal){
     arrayDeStrings.push(`O elemento do índex ${i} é: ${valor}`)
     i++
   }
   console.log(arrayDeStrings)
 }
 imprimirArrayDeStrings (arrayOriginal)

//e)
 function pegarMaiorOuMenorNumero (arrayOriginal){
   let maiorNumero = 0;
   let menorNumero = Infinity;
   for(let i = 0; i < arrayOriginal.length; i++){

     if(arrayOriginal[i] < menorNumero){
       menorNumero = arrayOriginal[i]
     }else if(arrayOriginal[i] > maiorNumero){
       maiorNumero = arrayOriginal[i]
     }
   }
   console.log("O maior numero é:", maiorNumero)
   console.log("O menor numero é:", menorNumero)
 }
 pegarMaiorOuMenorNumero (arrayOriginal)
