let produtos =["Base", "Corretivo","Po Compacto" ,"Blush,Iluminador",
 "Rimel", "Paleta de Sombras","Delineador","Gloss","Bruma"];
 
//  Adicionar produtos novos 
 produtos.push("primer Facial");
 produtos.push("gel")

 // Verifica se o produto existe
 if (produtos.includes("Delineador")) {
    console.log("Blush esta cadastrado!");
 }

  else {
    console.log("Blush nao esta cadastrado!");
}
// Filtra produtos com mais de 5 letras
let filtrados = produtos.filter(produto => produto.length >5);


console.log("todos os produtos:",produtos)
console.log("produtos filtrados:",filtrados)
