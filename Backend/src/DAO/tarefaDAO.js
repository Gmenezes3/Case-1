import db from '../infra/db.js'

class tarefaDAO {
    static listar() {
        const query = 'SELECT * FROM TAREFAS';
        return new Promise((resolve, reject) => {
            db.all(query, (err, rows) => {
                if (err) {
                    reject(err);
                }

                resolve(rows)
            });
        });
    }

    static inserir(tarefa) {
        const query = 'INSERT INTO TAREFAS (hora_data, descricao) VALUES (strftime("%Y-%m-%d %H:%M:%S", "now"), ?)';
        return new Promise((resolve, reject) => {
          db.run(query, [tarefa.hora_data, tarefa.descricao], function (err) {
            if (err) {
              reject({
                mensagem: 'Erro ao inserir o registro',
                erro: err
              })
            }
      
            resolve({
              mensagem: 'Registro criado com sucesso',
              contentId: this.lastID
            })
          });
        });
      }
      

    static deletar(id) {
      const query = 'DELETE FROM TAREFAS WHERE id = ?';
      return new Promise((resolve, reject) => {
          db.run(query, [id], (err) => {
              if (err) {
                  reject({
                      mensagem: 'Erro ao deletar o registro',
                      erro: err
                  })
              }

              resolve({ mensagem: 'Registro deletado com sucesso' })
          });
      });
    }
      
}

export default tarefaDAO;