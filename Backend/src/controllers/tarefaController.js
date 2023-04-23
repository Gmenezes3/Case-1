import tarefaDAO from "../DAO/tarefaDAO.js"

class tarefaController {
  static rotas(app){
    app.get('/tarefas', tarefaController.listar)
    app.post('/tarefas', tarefaController.inserir)
    app.delete('/tarefas/:id', tarefaController.deletar)  }

  static async listar(req, res){
    const tarefa = await tarefaDAO.listar()

    res.send(tarefa)
  }

  static async inserir(req, res){
    const tarefa = {
        id:req.body.id,
      hora_data:req.body.hora_data,
      descricao: req.body.descricao,
    }

    const result = await tarefaDAO.inserir(tarefa)

    if(result.erro) {
      res.status(500).send(result)
    } 

    res.send(result)
  }

  static async deletar(req, res){
    const tarefa = await tarefaDAO.deletar(req.params.id)

    if(tarefa.erro){
        res.status(500).send('Erro ao deletar o tarefa')
    }

    res.send({mensagem: 'Tarefa removido com sucesso'})
  }

}

export default tarefaController