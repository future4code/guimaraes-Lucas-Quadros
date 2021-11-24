
// exercicios Interpretação //

// (1)

    
    // Vai ser impresso o primeiro nome pois Matheus Nachtergaele na linha 0 (zero)
    // Vai retornar o ultimo nome, Virginia Cavendish
    // Vai retornar  Globo 14H pois ela é a 2 apartir do 0


    //(2)
    //  Vai retornar  Juca Juba e Jubo, pois na tartaruga ela pede pra trocar todo "a" por  "o"
    // copia o objeto anterior

    //(3)
    //(a)false  e undefined
    //
    //(b) ... , propriedade altura não existe


    //exercicios escrita de código//

    //(1)
    
    //(a)
    const pessoa = {
        nome: "João", 
        apelidos: ["Joe","Jonas","Jojo"]
        }
        function meuapelido(frase) {
             frase = `Meu nome é ${frase.nome} , mas pode me chamar de ${frase.apelidos}`
            return frase
          }

                 
          console.log(meuapelido(pessoa))
        
    //(2)


