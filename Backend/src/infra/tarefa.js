/*
Esse arquivo deve ser executado apenas uma vez para que a o banco seja criado e populado
*/
import db from "./db.js";

//==== TAREFAS
const CONTENTS_SCHEMA = `
CREATE TABLE IF NOT EXISTS "tarefas" (
  "id" INTEGER PRIMARY KEY AUTOINCREMENT,
  "hora_data" TEXT DEFAULT (strftime('%Y-%m-%d %H:%M:%S', 'now')),
  "descricao" TEXT
);`;

function createTableContents() {
    db.run(CONTENTS_SCHEMA, (error) => {
        if (error) console.log("Erro ao criar tabela de tarefas");
    });
}

db.serialize(() => {
    createTableContents();
});