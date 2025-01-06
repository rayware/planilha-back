import http from "node:http"
import { json } from "./middlewares/json.js"
import { Database } from "./database.js"
import { tknex } from "./knex.js"


const database = new Database()

const db = {}

const sever = http.createServer(async (req, res) => {
    const { method, url } = req


    await json(req, res)

    if (method === 'GET' && url === '/computers') {
/*         const computers = database.select('computers')

        const data = db['computers'] ?? [] */

        const data = await tknex('computers').select()

        return res.end(JSON.stringify(data))
    }

    if (method === 'POST' && url === '/computers') {

        const {
            quantidade,
            patrimonio,
            marca,
            nome
        } = req.body

        const computer = {
            quantidade,
            patrimonio,
            marca,
            nome
        }

        const table = 'computers'

        await tknex(table).insert(computer)

        /* 
                if (Array.isArray(db[table])) {
                    db[table].push(computer)
                } else {
                    db[table] = [computer]
                }
        
        
                database.insert('computers', computer) */

        return res.writeHead(201).end()
    }


    return res.writeHead(404).end()
})


sever.listen(3333)