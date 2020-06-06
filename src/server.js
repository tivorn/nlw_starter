const express = require("express")
const server = express()

// pegar o banco de dados

const db = require("./database/db")

//configurar pasta public
server.use(express.static("public"))

server.use(express.urlencoded({ extended: true })) // habilita o uso do req.body

//template-engine

const nunjucks = require("nunjucks")
nunjucks.configure("src/views", {
    express: server,
    noCache: true
})


//configurar caminhos da aplicação
//pagina inicial
server.get("/", (req, res) => { // verbo HTTP: get
    return res.render("index.html")
})

server.get("/create-point", (req, res) => {
    console.log(req.query)
    return res.render("create-point.html")
})

server.post("/savepoint", (req, res) => {

    const query = `
    INSERT INTO places (
        image, 
        name,
        address,
        address2,
        state,
        city,
        items
    ) VALUES (?,?,?,?,?,?,?);
`

    const values = [
        req.body.image,
        req.body.name,
        req.body.address,
        req.body.address2,
        req.body.state,
        req.body.city,
        req.body.items
    ]

    function afterInsertData(err) {
        if (err) {
            return res.send("Erro no cadastro")
        }
        
        console.log("cadastrado com sucesso")
        console.log(this)

        return res.render("create-point.html", { saved: true })
    }

    db.run(query, values, afterInsertData)


    
})

server.get("/search", (req, res) => {

    const search = req.query.search

    if(search == ""){
        return res.render("search_ouput.html", { total:0 })
    }
    
    
    // pegar os dados do banco de dados 
    db.all(`SELECT * FROM places WHERE city LIKE '%${search}%'`, function (err, rows) {
        if (err) {
            return console.log(err)
        }
        console.log("Aqui estão seus registros")

        const total = rows.length

        // mostrar html com os dados do banco de dados
        return res.render("search_ouput.html", { places: rows, total })
    })


})

//ligar o servidor
server.listen(3000)

