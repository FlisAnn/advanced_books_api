// const = require('')

const booksController = {
  index(request, response) {
    const collection = {
      books: [
        { 
          title: "Jag, Jag, Jag", 
          author: "Unni Drougge" 
        },
        { 
          title: "Andra sidan Alex", 
          author: "Unni Drougge" 
        }
      ]
    }
    response.json(collection)
  }
}

module.exports = booksController