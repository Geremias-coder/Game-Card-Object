import { Personagem } from "./personagem.js";

export class Guerreiro extends Personagem{

    static tipo = 'Guerreiro'
    static descricao = 'MEU MACHADO É PESADO!'
    forca

    constructor(nome,forca){
        super(nome)
        this.forca = forca
    }
    obterInsignia() { 
        if(this.forca >= 5 && this.level >= 7) { 
            return `SEGURA ESSA MACHADADA!!`
        }
        return super.obterInsignia()
    }
    
}