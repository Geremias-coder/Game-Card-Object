import { Arqueiro } from "./arqueiro.js";
import { Mago } from "./mago.js";
import { Personagem } from "./personagem.js";

export class ArqueiroMago extends Personagem{   /* Herança com extends da classe pai ( Personagem ) */
    ladoArqueiro
    ladoMago
    static tipo = 'ArqueiroMago'
    static descricao = 'Detentor de lanças e flechas mágicas!'

    constructor(nome,destreza, elementoMagico, levelMagico, inteligencia ){
        super(nome) /* Herança da classe pai */
        this.ladoArqueiro = new Arqueiro(nome,destreza)      /* Instancia de Arqueiro */
        this.ladoMago = new Mago(nome,elementoMagico,levelMagico,inteligencia)  /* Instancia de Mago */
    }
    obterInsignia(){   /* Polimorfismo, pois une a obterInsignia da classe Arqueiro e Mago */ 
        return `${this.ladoArqueiro.obterInsignia()} e ${this.ladoMago.obterInsignia()}`
    }
}