import { PersonagemView } from "./components/personagem-view.js"
import { Mago } from "./modules/mago.js"
import { Arqueiro } from "./modules/arqueiro.js"
import { ArqueiroMago } from "./modules/arqueiro-mago.js"
import { Personagem } from "./modules/personagem.js"
import { Guerreiro } from "./modules/guerreiro.js"

const magoMerlinusSábio = new Mago('Merlinus Sábio', 4, 'fogo', 4, 3)
const magaZephyrTempestade = new Mago('Zephyr Tempestade', 8, 'gelo', 7, 10)

const ArqueiroMagoGeremias = new ArqueiroMago('Geremias', 7 , 10, 'ar', 4, 8)

const arqueiroEldrinFlechaVeloz = new Arqueiro('Eldrin Flecha Veloz', 4, 6)
const arqueiroLyriaOlhodeÁguia = new Arqueiro('Joao', 10, 4)


const guerreiroBjornMachadodeSangue = new Guerreiro('Bjorn Machado de Sangue', 10)
const guerreiroGutz = new Guerreiro('Gutz', 10)





const personagens = [magoMerlinusSábio, magaZephyrTempestade, arqueiroEldrinFlechaVeloz, arqueiroLyriaOlhodeÁguia, ArqueiroMagoGeremias, guerreiroGutz, guerreiroBjornMachadodeSangue]

new PersonagemView(personagens).render()
//console.log(Personagem.verificarVencedor(arqueiroJoao, ArqueiroMagoGeremias))

