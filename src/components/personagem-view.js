/* ViewModel: expõe os fluxos de dados que são relevantes para a View. 

Além disso, funciona como um elo entre o Modelo e a Visão. Exemplo: classe ***PersonagemView a baixo.*** */
import { Personagem } from '../modules/personagem.js'
import { mostrarModal } from './modal.js'

export class PersonagemView {
    personagens /* Propriedade que armazenará um array de personagens ( Instâncias de algum modelo) */
    personagensSelecionados
    constructor(personagens){ /* O construtor é chamado quando uma nova instância de PersonagemView é criada. Ele faz duas coisas:*/

        this.ulPersonagens = document.querySelector('ul#personagens')  /* Esse comando busca a <ul> no HTML e a salva na propriedade ulPersonagens, a qual será utilizada pela render().*/
        
        this.personagens = personagens /* atribui o array de personagens passado como argumento à propriedade personagens, que será usada para renderizar os elementos na lista. 
        propriedade personagens será um arranjo que conterá todos os objetos ou instâncias que estamos criando.*/
        this.personagensSelecionados = []
        this.escutarEventoDuelo()
    }

    /* Preenche o conteúdo interno de uma ul com varias li (objetos, instancias)    */
    render() {
        this.ulPersonagens.innerHTML = ''
        this.personagens.forEach(personagem => {
            const personagemLI = this.criaPersonagem(personagem)
            this.ulPersonagens.appendChild(personagemLI)
        })
    }

    /* adiciona classe a essa li, e monta um html para ela que posteriormente vai ser preenchido com os dados e valores das propriedades gerados na criação das instancias (objetos) */
    criaPersonagem = (personagem) => {
        const personagemLI = document.createElement('li')
        personagemLI.classList.add('personagem', personagem.constructor.tipo)

        const estaSelecionado = this.personagensSelecionados.indexOf(personagem) !== -1 //sintaxe para quando encontra no array
        if (estaSelecionado) personagemLI.classList.add('selecionado')





        /** View: o objetivo desta camada é informar a ViewModel sobre a ação do usuário. 
        Esta camada é encapsulada pela ViewModel e representa tudo o que o usuário irá ver e interagir na tela. Exemplo: Código HTML que está sendo injetado na variável personagemLi. 
        
        /* Salva esse html nessa váriavel */
        personagemLI.innerHTML =

            `
    <div class="container-superior">
        <div class="cabecalho">
            <div class="combate"></div>
            <div class="level">
                <button class="diminuir-level">-</button>
                <p class="level-texto">Level ${personagem.level} </p>
                <button class="aumentar-level">+</button>
            </div>
        </div>
        <div class="container-imagem">
            <div class="imagem"></div>
            <div class="container-tipo">
                <h2 class="tipo">${personagem.constructor.tipo}</h2>
            </div>
        </div>
        <div class="container-nome">
            <h3 class="nome">${personagem.nome}</h3>
        </div>
        <div class="container-descricao">
            <p class="descricao">${ personagem.constructor.descricao}</p>
        </div>
    </div>
    <div class="container-inferior">
        <img src="./src/assets/img/icone-mana.png" class="icone-mana">
        <p class="insignia">${personagem.obterInsignia()}</p>
        <img src="./src/assets/img/icone-vida.png" class="icone-vida">
        <h4 class="mana">${personagem.mana}</h4>
        <h4 class="vida">${personagem.vida}</h4>
    </div>
    `

        const containerLevel = personagemLI.querySelector('.level')
        containerLevel.onclick = (evt) => {
            evt.stopPropagation()

            if (evt.target.classList.contains('diminuir-level')) personagem.diminuirLevel()

            if (evt.target.classList.contains('aumentar-level')) personagem.aumentarLevel()

            this.render()
        }

        /* função que permite clicar na carta */
        personagemLI.onclick = () => {
            const jaTem2Selecionados = this.personagensSelecionados.length === 2
            if (!jaTem2Selecionados || estaSelecionado) {
                personagemLI.classList.toggle('selecionado')

                if (!estaSelecionado) return this.adicionaSelecao(personagem)

                this.removeSelecao(personagem)
            }
        }

        return personagemLI
    }

    /* Adiciona a carta clicada no array de personagem selecionado */
    adicionaSelecao = (personagem) => {
        this.personagensSelecionados.push(personagem)
        this.render()
    }


    removeSelecao = (personagem) => {
        const indexDoPersonagemNoArray = this.personagensSelecionados.indexOf(personagem)
        this.personagensSelecionados.splice(indexDoPersonagemNoArray, 1)
        this.render()
    }

    escutarEventoDuelo() {
        const botaoDuelar = document.querySelector('.botao-duelar')

        botaoDuelar.addEventListener('click', () => {
            if (this.personagensSelecionados.length < 2) return mostrarModal('Selecione 2 personagens')

            const resultadoDuelo = Personagem.verificarVencedor(this.personagensSelecionados[0], this.personagensSelecionados[1])

            mostrarModal(resultadoDuelo)

            this.personagensSelecionados.splice(0, this.personagensSelecionados.length)

            this.render() 
        })
    }
}