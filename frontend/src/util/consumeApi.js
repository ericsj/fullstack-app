function consumeApi(query, category, setResultsArray, setIsLoaded){
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
    setIsLoaded(true);
  })
}
export default consumeApi;