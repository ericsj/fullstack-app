var http = require('request');

exports.routes = function(app) {
  app.get('/', (request, response) => {
    response.header({"Access-Control-Allow-Origin": "*"})
    let query = request.query.query;
    let category = request.query.category;
    let url = `https://api.chucknorris.io/jokes/random`;
    if(category !== undefined){
      url = `https://api.chucknorris.io/jokes/random?category=${category}`;
    }
    else if (query !== undefined){
      url = `https://api.chucknorris.io/jokes/search?query=${query}`;
    }
    let newArray = []
    http(url, { json: true }, (err, res, body) => {
      if (err) { return console.log(err); }
      let result = body.result;
      let value = body.value;
      if (result){
        Object.keys(result).map(key=>{
          newArray.push(result[key].value);
        })
        response.json(newArray)
      }
      else if (value){
        response.json([value])
      }
    })
  })
}
