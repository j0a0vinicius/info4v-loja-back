const express = require('express')
const cors = require('cors')
const app = express()
app.use(cors())
const port = 3000

const produtos = [
    { id: 1, nome: 'Smartphone Motorola G85', marca: 'Motorola', preco: 1800.00, quantidade: 50 }, 
    { id: 2, nome: 'TV Lg 42 polegadas', marca: 'Motorola', preco: 1499.99, quantidade: 12 }
]
/** Ponto de entrada raíz da aplicação 
 * @param req objeto com os dados da requisição HTTP
 * @param res objeto para tratar a resposta HTTP
*/
app.get('/', (req, res) => {
  res.json({})
})
/** Devolve a lista de todos os produtos */
app.get('/produtos', (req, res) => {
    res.json(produtos)
})
/** Devolve um produto específico pelo seu id */
app.get('/produtos/:id', (req, res) => {
    const id = +req.params.id
    if (req.params.id && id >= 0) {
        const prod = produtos.find(p => p.id === id)
        if (prod) { res.json(prod) }
    }
    res.json({})
})
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})