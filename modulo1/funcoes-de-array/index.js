//1)
 const pets = [
   { nome: "Lupin", raca: "Salsicha" },
   { nome: "Polly", raca: "Lhasa Apso" },
   { nome: "Madame", raca: "Poodle" },
   { nome: "Quentinho", raca: "Salsicha" },
   { nome: "Fluffy", raca: "Poodle" },
   { nome: "Caramelo", raca: "Vira-lata" }
 ];

 //a)
 const nomeDosPets = pets.map((pet) => {
   return pet.nome;
 });

 console.log("item a", nomeDosPets);
//b)
 const cachorrosSalsicha = pets.filter((cachorro) => {
   return cachorro.raca === "Salsicha";
 });

 console.log("item b", cachorrosSalsicha);
//c)
 const poodles = pets.filter((dog) => {
   return dog.raca === "Poodle";
 });

 const cuponsPoodles = poodles.map((poodle) => {
   return `Você ganhou um cupom de desconto de 10% para tosar o/a ${poodle.nome}!`;
 });
 console.log("item c", cuponsPoodles);

//2)
 const produtos = [
   { nome: "Alface Lavada", categoria: "Hortifruti", preco: 2.5 },
   { nome: "Guaraná 2l", categoria: "Bebidas", preco: 7.8 },
   { nome: "Veja Multiuso", categoria: "Limpeza", preco: 12.6 },
   { nome: "Dúzia de Banana", categoria: "Hortifruti", preco: 5.7 },
   { nome: "Leite", categoria: "Bebidas", preco: 2.99 },
   { nome: "Cândida", categoria: "Limpeza", preco: 3.3 },
   { nome: "Detergente Ypê", categoria: "Limpeza", preco: 2.2 },
   { nome: "Vinho Tinto", categoria: "Bebidas", preco: 55 },
   { nome: "Berinjela kg", categoria: "Hortifruti", preco: 8.99 },
   { nome: "Sabão em Pó Ypê", categoria: "Limpeza", preco: 10.8 }
 ];
//a)
 const nomesProdutos = produtos.map((prod) => {
   return prod.nome;
 });

 console.log("item a", nomesProdutos);
//b)
 const produtosComDesconto = produtos.map((prod) => {
   return { nome: prod.nome, preco: (prod.preco * 0.95).toFixed(2) };
 });

 console.log("item b", produtosComDesconto);
//c)
 const bebidas = produtos.filter((prod) => {
   return prod.categoria === "Bebidas";
 });

 console.log("item c", bebidas);
//d)
 const produtosYpe = produtos.filter((prod) => {
   return prod.nome.includes("Ypê");
 });

 console.log("item d", produtosYpe);

 //d)
 const compreYpe = produtosYpe.map((prod) => {
   return `Compre ${prod.nome} por ${prod.preco}`;
 });

 console.log("item e", compreYpe);

