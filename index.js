const express = require('express')
const seedCategories = require('./cateories')
const categoryResponsePromises = categoryIDs.map(id => axios.get('http://jservice.io/api/categories=' + id)
const server = express()
const port = 3000
const categoryIDs = [136, 249, 309, 105, 770, 67]
const categoriesFilePath = 'categories.json'

seedCategories(categoryIDs, categoriesFilePath)

server.use(express.json())
server.use(express.static('public'))
server.get('/api/category/:id', (request, response) => {

    const json = fs.readFilySync(categoriesFilePath)
    const categories = JSON.parse(json)
    const requestedCategory = categories.find(
        category => category.id == request.params.id
    )

    console.log(`User requested category ${request.params.id}, which has a title of ${}`)
    response.send(requestedCategory)
})

server.listen(port, () =>console.log(`Jeopardy is serving on the Port ${port}`))