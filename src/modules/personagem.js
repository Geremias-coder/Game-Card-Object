/* Modelo: Esta camada é responsável pela abstração das fontes de dados. 
Model e ViewModel trabalham juntos para obter e salvar os dados. Exemplo: classe Personagem. */

/* Definição da classe */

export class Personagem {
    /* estrutura  da classe */
    nome
    vida = 100
    mana = 100 
    #level
    tipo
    descricao
          


    /* Um constructor é um método especial em uma classe que é chamado automaticamente quando um objeto dessa classe é criado. 
    Ele é usado para inicializar o objeto. */
   constructor(nome) {                              
        this.nome=nome
        this.#level= 1
    }
        aumentarLevel() {
            this.level += 1
        }
        diminuirLevel() {
            this.level -= 1
        }
   

   // get - retorna valor de uma propriedade privada ( Encapsulada )
    get level() {
        return this.#level
    }
   // set - cria a lógica de negócio
    set level(novoLevel) {
        if(novoLevel >= 1 && novoLevel <=10){
            this.#level = novoLevel
        }
    }

    /* Método  'obterInsignia' */
    obterInsignia() {    
        if (this.#level >= 5) { 
            return `Implacavel ${ this.constructor.tipo }` 
        }
        return `${ this.constructor.tipo } iniciante`
    }

    static verificarVencedor(personagem1, personagem2) {
        if(personagem1.level === personagem2.level) {
            return 'Empate'
        }
        if(personagem1.level > personagem2.level) {
            return `${personagem1.constructor.tipo} ${personagem1.nome} é o Vencedor!`
        }
        return `${personagem2.constructor.tipo} ${personagem2.nome} é o Vencedor!`
    }
}

