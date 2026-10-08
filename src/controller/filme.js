import ServiceFilme from '../service/filme.js'

//Listar, BuscarId, Criar, Alterar, Deletar
class ControllerFilme {

    Listar(req, res){
        try{
            const filmes = ServiceFilme.Listar()

            res.send({filmes})
        } catch (e){
            res.send({message: e.message})
        }
    }  

    BuscarId(req, res){

        try{
        const id = req.params.id
        const filme = ServiceFilme.BuscarId(id)

        res.send({filme})
    } catch (error){

    res.send({message: error.message})
    }
}
    
    Criar(req, res) {
    try{
        const titulo = req.body.titulo
        const classificacaoIndicativa = req.body.classificacaoIndicativa
        const descricao = req.body.descricao
        const lancado = req.body.lancado
        Service.filme.Criar( titulo, classificacaoIndicativa, descricao, lancado)
        
        res.send({message: "Criado com sucesso!"})
    } catch (error){

    res.send({message: error.message})
    }

    Alterar(req, res){
        try {
        const titulo = req.body.titulo
        const classificacaoIndicativa = req.body.classificacaoIndicativa
        const descricao = req.body.descricao
        const lancado = req.body.lancado
            ServicePessoa.Alterar(titulo, classificacaoIndicativa, descricao, lancado)

            res.send({ message: "Alterado com sucesso!" })
        } catch (error) {
            res.send({ message: error.message })
        }
    }

    Excluir(req, res){
        try{
            const id = req.params.id
            ServiceFilme.Excluir(id)

            res.send({message: "Excluído com sucesso!"})
        } catch (error){
            res.send({ message: error.message })
        }
    }

} 


}  
