const baseUrl = 'http://localhost:8085'

function consumeApi (query, category) {
  const url = `${baseUrl}?query=${query || ''}&category=${category || ''}`
  return fetch(url).then((response) => response.json())
}
export default consumeApi;