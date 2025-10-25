const express = require('express')
const cors = require('cors')
const app = express()
app.use(cors())
const port = 3000

const produtos = [
  { id: 1, nome: 'Smartphone Motorola G85', marca: 'Motorola', preco: 1800.00, quantidade: 50, descricao: 'Smartphone com tela de 6.8", 128GB e câmera tripla.' }, 
  { id: 2, nome: 'TV LG 42 polegadas', marca: 'LG', preco: 1499.99, quantidade: 12, descricao: 'TV LED Full HD com Smart TV e conectividade Wi-Fi.' },
  { id: 3, nome: 'Notebook Dell XPS 15', marca: 'Dell', preco: 7500.00, quantidade: 20, descricao: 'Notebook de alto desempenho com processador Intel i7 e tela 15" 4K.' },
  { id: 4, nome: 'Fone de Ouvido Gamer', marca: 'HyperSound', preco: 299.90, quantidade: 35, descricao: 'Fone com som surround, microfone removível e RGB.' },
  { id: 5, nome: 'Teclado Mecânico RGB', marca: 'KeyMaster', preco: 499.90, quantidade: 40, descricao: 'Teclado mecânico com switches azuis e iluminação RGB personalizável.' },
  { id: 6, nome: 'Mouse Gamer Óptico', marca: 'SpeedMouse', preco: 199.90, quantidade: 60, descricao: 'Mouse ergonômico com sensor de alta precisão e botões programáveis.' }
];

/** Ponto de entrada raíz da aplicação 
 * @param req objeto com os dados da requisição HTTP
 * @param res objeto para tratar a resposta HTTP
*/
app.get('/', (req, res) => {
  res.json({})
})

app.get('/produtos', (req, res) => {
    res.json(produtos)
})

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
