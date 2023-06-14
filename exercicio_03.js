class NerdIF {
  constructor(estudante, cosplay, nota_cosplay) {
    this.estudante = estudante;
    this.cosplay = cosplay;
    this.nota_cosplay = nota_cosplay;
  }

  mostrarAtributos() {
    try{
      return this.atributos();
  } catch (erro) { 
      console.log(erro.stack)
  }
  
}

  atributos() {
    if (this.estudante != "" && this.cosplay !="" && this.nota_cosplay != ""){
      return this.estudante + this.cosplay + this.nota_cosplay
    }
    else {
      throw new Error ("Ta errado, ta faltando o nome, idade ou turma")
 }
  
  }
}

const aluno = new NerdIF("", "Homem-Aranha", 9.5);
const atributos = aluno.mostrarAtributos();
console.log(atributos);
//console.log(atributos.estudante); 
//console.log(atributos.cosplay);   
//console.log(atributos.nota_cosplay);

