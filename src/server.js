import http from "node:http"
import { json } from "./middlewares/json.js"
import { knex } from "./knex.js"


const sever = http.createServer(async (req, res) => {
    const { method, url } = req


    await json(req, res)

    if (method === 'GET' && url === '/computers') {

        const data = await knex('computers').select()

        return res.end(JSON.stringify(data))
    }

    if (method === 'POST' && url === '/computers') {

        const {
            quantidade,
            patrimonio,
            marca,
            nome
        } = req.body

        await knex('computers').insert({quantidade, patrimonio, marca, nome})

        return res.writeHead(201).end()
    }


    return res.writeHead(404).end()
})


sever.listen(3333)