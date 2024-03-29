/*
  Os atributos nomes, idade e especie são todos necessários. Assim, usando Try e Catch trate os erros e apresente uma mensagem de erro quando houve atributos vazios.
*/

class Animal {
  constructor(nome, idade, especie) {
    this.nome = nome;
    this.idade = idade;
    this.especie = especie;
  }

  mostrarAtributos(){
    try{
      return this.atributos();
  } catch (erro) { 
      console.log(erro.stack)
  }
  
}

  atributos() {
    if (this.nome != "" && this.idade !="" && this.especie != ""){
      return this.nome + this.idade + this.especie
  }
  else {
      throw new Error ("Ta errado, ta faltando o nome, idade ou especie")
  }

}

}


const meuAnimal = new Animal("", 3, "cachorro");
const atributos = meuAnimal.mostrarAtributos();

console.log(atributos);
// Imprimindo os atributos
//console.log(atributos."");   
//console.log(atributos.idade);  
//console.log(atributos.especie); 