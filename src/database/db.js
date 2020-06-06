// a importar a dependência do sqlite3

const sqlite3 = require("sqlite3").verbose() // funções que são acompanhadas de objetos são ditas métodos 

// criar o objeto que fará operações no banco de dados 
const db = new sqlite3.Database("./src/database/database.db") // new cria um objeto desde que satisfaça certa condição

module.exports = db

// utilizar o objeto para suas operações

//db.serialize(() => {
//     // Criar uma tabela chamada places com comandos SQL
//     db.run(`
//         CREATE TABLE IF NOT EXISTS places (
//             id INTEGER PRIMARY KEY AUTOINCREMENT,
//             image TEXT, 
//             name TEXT,
//             address TEXT,
//             address2 TEXT,
//             state TEXT,
//             city TEXT,
//             items TEXT
//         );
//     `) // Duas aspas: template string litereal 
    
//     // Inserir dados na tabela
//     const query = `
//     INSERT INTO places (
//         image, 
//         name,
//         address,
//         address2,
//         state,
//         city,
//         items
//     ) VALUES (?,?,?,?,?,?,?);
// `
    
//     const values = [
//         "https://images.unsplash.com/photo-1516992654410-9309d4587e94?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80",
//         "Colectoria",
//         "Guilherme Gemballa, Jardim América",
//         "N° 270",
//         "Santa Catarina",
//         "Rio do Sul",
//         "Resíduos Eletrônicos, Lampâdas"
//     ]
    
//     function afterInsertData(err){
//         if(err) {
//             return console.log(err)
//         }
        
//         console.log("cadastrado com sucesso")
//         console.log(this)
//     }
    
//     db.run(query, values, afterInsertData ) 
    
//     //Consultar os dados da tabela
    // db.all(`SELECT * FROM places`,function(err, rows) {
    //     if(err) {
    //     return console.log(err)
    // }

    //     console.log("Aqui estão seus registros")
    //     console.log(rows)
    // })

//     // Deletar um dados da tabela
    // db.run(`DELETE FROM places WHERE id = ?`, [9], function(err){
    //     if(err){
    //         return console.log(err)
    // }
    
    //         console.log("Registro deletado com sucesso")
    // })
    


 // }) //serialize irá rodar uma série de códigos dentro de uma função anônima


