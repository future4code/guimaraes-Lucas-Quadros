// Exercicios de escrita


//1. Faça um programa que pergunte ao usuário seu nome e seu e-mail. Em seguida, Imprima no console a seguinte mensagem:
    
    //O e-mail `emailDoUsuario` foi cadastrado com sucesso. Seja bem-vinda(o), `nomeDoUsuario`!
   
    const emailDoUsuario = prompt("Qual seu email?")
    const nomeDoUsuario = prompt("Qual seu nome?")

    console.log(`O email ${emailDoUsuario} foi cadastrado com sucesso. Seja bem-vinda(o) ${nomeDoUsuario}`)

//2. Faça um programa que contenha um array com 5 das suas comidas preferidas, armazenado em uma variável. Em seguida, siga os passos:

    const comidasPreferidas = [
        "batata-frita",
        "nuggets",
        "hamburguer",
        "sushi",
        "Pizza"
    ];
    
    //a) Imprima no console o array completo
    console.log(comidasPreferidas)
    
    //b) Imprima no console a mensagem "Essas são as minhas comidas preferidas: ", seguida por cada uma das comidas, **uma embaixo da outra**.
    console.log("Essas são as minhas comidas preferidas: ")
        console.log(comidasPreferidas[0])
        console.log(comidasPreferidas[1])
        console.log(comidasPreferidas[2])
        console.log(comidasPreferidas[3])
        console.log(comidasPreferidas[4])
    
    
    //c) Aqui vai um desafio: pergunte ao usuário uma comida preferida. Troque a segunda comida da sua lista pela inserida pelo usuário. Imprima no consolea nova lista

     const novaComida = prompt("Diga uma comida que voce gosta!")
        comidasPreferidas[1] = novaComida
        console.log(comidasPreferidas)
    
//3. Faça um programa, seguindo os passos:
    
    //a) Crie um array vazio e guarde-o em uma variável, chamada `listaDeTarefas`
    
    const listaDeTarefas = []
    
    //b) Pergunte ao usuário 3 tarefas que ele precise realizar no dia e armazene-as, uma por uma, no array
    const primeiraTarefa = prompt("Digite uma tarefa") 
    const segundaTarefa = prompt("Digite uma tarefa")
    const terceiraTarefa = prompt("Digite uma tarefa")
        listaDeTarefas.push(primeiraTarefa)
        listaDeTarefas.push(segundaTarefa)
        listaDeTarefas.push(terceiraTarefa)
    //c) Imprima o array no console

    console.log(listaDeTarefas)
    
    //d) Peça ao usuário que digite o **índice** de uma tarefa que ele já realizou: 0, 1 ou 2   
    const tarefaRealizada = prompt("Digite o índice de uma tarefa que já realizou: 0, 1 ou 2")
    
    //e) Remova da lista o item de índice que o usuário escolheu.
    
    listaDeTarefas.splice(Number(tarefaRealizada), 1)
    
    //f) Imprima o array no console.
    
    console.log(listaDeTarefas)
   