import http from "node:http"
import { json } from "./middlewares/json.js"
import { Database} from "./database.js"


const database = new Database()

const sever = http.createServer(async (req, res) => {
    const { method, url } = req
    
    
    await json(req, res)

    if ( method === 'GET' && url === '/computers') {
        const computers = database.select('computers')

        return res.end(JSON.stringify(computers))
    }

    if ( method === 'POST' && url === '/computers') {

        const { 
            codigo, 
            quantidade, 
            patrimonio, 
            marca, 
            nome 
        } = req.body

        const computer = {
            codigo,
            quantidade,
            patrimonio,
            marca,
            nome
        }
        
        database.insert('computers', computer)

        return res.writeHead(201).end()
    }


    return res.writeHead(404).end()
})


sever.listen(3333)