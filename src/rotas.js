import { knex } from "./knex.js"

export const rotas = [
    //  ROTAS EQUIPAMENTOS
    {
        method: 'GET',
        url: '/equipamentos',
        handler: async (req, res) => {
            const data = await knex('equipamentos').select()

            return res.end(JSON.stringify(data))
        }
    },
    {
        method: 'POST',
        url: '/equipamentos',
        handler: async (req, res) => {
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
    },
    // ROTAS DEPARTAMENTOS
    {
        method: 'GET',
        url: '/departamentos',
        handler: async (req, res) => {
            const data = await knex('departamentos').select()

            return res.end(JSON.stringify(data))
        }
    },
    {
        method: 'POST',
        url: '/departamentos',
        handler: async (req, res) => {
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
    },
    // ROTAS FUNCIONARIOS
    {
        method: 'GET',
        url: '/funcionarios',
        handler: async (req, res) => {
            const data = await knex('funcionarios').select()

            return res.end(JSON.stringify(data))
        }
    },
    {
        method: 'POST',
        url: '/funcionarios',
        handler: async (req, res) => {

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
    },
    // ROTAS SEDE
    {
        method: 'GET',
        url: '/sede',
        handler: async (req, res) => {
            const data = await knex('sede').select()

            return res.end(JSON.stringify(data))
        }
    },
    {
        method: 'POST',
        url: '/sede',
        handler: async (req, res) => {
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
    }
]