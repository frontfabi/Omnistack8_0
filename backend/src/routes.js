const express = require('express')
const routes = express.Router()

routes.get('/', (req, res) => {
    // return res.send('Hello World!')`
    // return res.send(`Hello ${req.query.name || 'desconhecido'}!`)
    return res.json({
        message: `Hello ${req.query.name || 'desconhecido'}!`
    })
})

routes.post('/devs', (req, res) => {
    return res.json(req.body)
})

module.exports = routes