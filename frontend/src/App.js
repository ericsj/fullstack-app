import React, { useState, useEffect } from 'react';
import './App.css';
import 'fontsource-roboto';
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles'
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import SearchButton from './components/SearchButton';
import DropdownSearch from './components/DropdownSearch';
import PaperContainer from './components/PaperContainer';
import PaperGrid from './components/PaperGrid';
import ResultCount from './components/ResultCount';
import useStyles from './useStyles.js'
import Paper from '@material-ui/core/Paper';
import TextField from '@material-ui/core/TextField';

function App() {
  let startingCategories = ["Any","animal","career","celebrity","dev","explicit","fashion","food","history","money","movie","music","political","religion","science","sport","travel"]
  const classes = useStyles();
  const [isLoaded, setIsLoaded] = useState(false);
  const [query, setQuery] = useState('');
  const [category, setCategory] = useState('');
  const [categories, setCategories] = useState(startingCategories);
  const [resultsArray, setResultsArray] = useState([]);

  const theme = createMuiTheme({
    palette: {
      primary: {
        main: '#25EFA1',
      },
    },
  });

  function consumeApi(){
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

  return (
    <div className="App">
      <ThemeProvider theme={theme}>
        <Grid container
          className={classes.container}
          direction="row"
          justify="center"
          alignItems="center"
          spacing={2}>
          <Grid item xs={10} md={6}>
            <TextField
              className={classes.FormItem}
              onChange={event => {
                const value = event.target.value;
                setQuery(value);
              }}
              placeholder="Search"
            />
         </Grid>
         <DropdownSearch
            setCategory={setCategory}
            className={classes.FormItem}
            category={category}
            categories={categories}/>
         <ResultCount resultsArray={resultsArray}/>
         {!(resultsArray.length===1) && <SearchButton buttomClass={classes.Button} onClick={consumeApi}/>}
          <PaperGrid resultsArray={resultsArray} paperClass={classes.Paper}/>
          {(resultsArray.length===1) && <SearchButton buttomClass={classes.Button} onClick={consumeApi}/>}
        </Grid>
      </ThemeProvider>
    </div>
  );
}

export default App;
