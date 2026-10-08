import filmes from '../model/filme.js'

class ServiceFilme {
    Listar(){
        return filmes
    }

    BuscarId(id) {
        if(!id || isNaN(id)) {
            throw new Error("Favor informar somente números")
        }

        return filmes.BuscarId(id)
    }

    Criar(titulo, classificacaoIndicativa, descricao, lancado){
        if(!titulo){
            throw new Error("Favor informar o titulo do filme")
        }
        filmes.Criar(titulo, classificacaoIndicativa, descricao, lancado)
    }

    Alterar(id, titulo, classificacaoIndicativa,descricao,lancado){
         if(!id || isNaN(id) || !filmes){
            throw new Error("Favor informar todos os dados")
        }
        filmes.Alterar(id,titulo,classificacaoIndicativa,descricao,lancado)
    }

    Deletar(id){
        if(!id || isNaN(id)) {
            throw new Error("Favor informar o Id corretamente")
    }
    filmes.Deletar(id)
}



//Listar, BuscarId, Criar, Alterar, Deletar
