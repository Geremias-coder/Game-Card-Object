import { Personagem } from "./personagem.js"

export class Mago extends Personagem {

    /* estrutura da classe */

    elementoMagico /* Propriedade */
    levelMagico    /* Propriedade */
    inteligencia    /* Ṕropriedade */ 
    static tipo = 'Mago'
    static descricao = 'O mago é implacavel!'


    constructor(nome,elementoMagico, levelMagico, inteligencia) { /* Propriedades da classe solicitada nos paramêtros do construtor */
        /* Uso do --> this <-- se referindo a instância 
        atual do objeto, Ele permite que você acesse as propriedades e métodos daquela instância específica dentro da classe */
        super(nome)
        this.elementoMagico = elementoMagico        
        this.levelMagico = levelMagico
        this.inteligencia = inteligencia
    }

    obterInsignia() { 
        if(this.llMeveagico >= 5 && this.inteligencia >= 5) { 
            return `Mestre do ${this.elementoMagico}`
        }
        return super.obterInsignia()
    }
}
