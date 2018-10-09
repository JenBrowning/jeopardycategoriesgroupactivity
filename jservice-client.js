const axios = require('axios')
const fs = require('fs')


module.exports = function(categoryIDs, categoriesFilePath) {

Promise.all(categoryResponsesPromises)
    .then(categoryResponses => {
        fs.writeFileSync(categoriesFilePath, JSON.stringify(categories))
    })

}
downloadCategoriesFromService(categoryIDs, categoriesFilePath)