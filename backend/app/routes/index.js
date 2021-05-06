const http = require('request');

const baseUrl = `https://api.chucknorris.io/jokes`;

const getUrl = (query, category) => {
  if (category) {
    return `${baseUrl}/random?category=${category}`;
  }

  if (query) {
    return `${baseUrl}/search?query=${query}`;
  }

  return `${baseUrl}/random`
}

exports.routes = function(app) {
  app.get('/', (request, response) => {
    response.header({"Access-Control-Allow-Origin": "*"})
    const query = request.query.query;
    const category = request.query.category;
    const url = getUrl(query, category)

    http(url, { json: true }, (err, res, body) => {
      if (err) { return console.log(err); }
      const result = body.result;
      const value = body.value;

      if (result){
        const array = Object.keys(result).map(key => result[key].value)
        return response.json(array)
      }
      
      if (value){
        return response.json([value])
      }
    })
  })
}
