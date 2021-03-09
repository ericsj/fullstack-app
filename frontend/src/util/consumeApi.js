function consumeApi(query, category, setResultsArray){
  let url = 'http://localhost:8000';
  if(query){
    url = `http://localhost:8000?query=${query}`;
  } else if (category && category !== 'Any'){
    url = `http://localhost:8000?category=${category}`;
  }
  fetch(url)
  .then((response) => {
      return response.json();
  })
  .then((data) => {
    setResultsArray(data);
  })
}
export default consumeApi;