import http from "node:http"
import { json } from "./middlewares/json.js"
import { rotas } from "./rotas.js"


const sever = http.createServer(async (req, res) => {
    const { method, url } = req

    console.log(req)

    res.setHeader('Access-Control-Allow-Origin', '*'); 
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS'); 
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type'); 

    if (method === 'OPTIONS') {
        res.writeHead(204); // No Content
        return res.end();
    }


    await json(req, res)

/*     // ROTAS EQUIPAMENTOS

    if (method === 'GET' && url === '/equipamentos') {

        const data = await knex('equipamentos').select()

        return res.end(JSON.stringify(data))
    }

    if (method === 'POST' && url === '/equipamentos') {

        const {
            patrim_equipamento,
            nome_equipamento,
            marca_equipamento,
            model_equipamento,
            dataCompra_equipamento,
        } = req.body

        await knex('equipamentos').insert(
            {
                patrim_equipamento, 
                nome_equipamento, 
                marca_equipamento, 
                model_equipamento,
                dataCompra_equipamento, 
            }
        )

        return res.writeHead(201).end()
    }
    // ROTAS DEPARTAMENTOS

    if (method === 'GET' && url === '/departamentos') {

        const data = await knex('departamentos').select()

        return res.end(JSON.stringify(data))
    }

    if (method === 'POST' && url === '/departamentos') {

        const {
            sigla_dp,
            cod_sede
        } = req.body

        await knex('departamentos').insert(
            {
                sigla_dp,
                cod_sede
            }
        )

        return res.writeHead(201).end()
    }
    // ROTAS FUNCIONARIOS

    if (method === 'GET' && url === '/funcionarios') {

        const data = await knex('funcionarios').select()

        return res.end(JSON.stringify(data))
    }

    if (method === 'POST' && url === '/funcionarios') {

        const {
            nome_funcionario,
            sobrenome_funcionario,
            email_funcionario,
            cod_dp
        } = req.body

        await knex('funcionarios').insert(
            {
                nome_funcionario,
                sobrenome_funcionario,
                email_funcionario,
                cod_dp
            }
        )

        return res.writeHead(201).end()
    }
    // ROTAS SEDE

    if (method === 'GET' && url === '/sede') {

        const data = await knex('sede').select()

        return res.end(JSON.stringify(data))
    }

    if (method === 'POST' && url === '/sede') {

        const {
            nome_sede,
            sigla_sede
        } = req.body

        await knex('sede').insert(
            {
                nome_sede,
                sigla_sede
            }
        )

        return res.writeHead(201).end()
    }
 */


    const rota = rotas.find( rota => {
        return rota.method === method && rota.url === url
    })

    if (rota) {
        return rota.handler(req, res)
    }


    return res.writeHead(404).end()
})


sever.listen(3333)