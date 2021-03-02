import React, { useState, useEffect } from 'react';
import './App.css';
import 'fontsource-roboto';
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles'
import Grid from '@material-ui/core/Grid';
import ResultsCount from './components/ResultsCount';
import SearchButton from './components/SearchButton';
import useStyles from './useStyles.js'
import PaperContainer from './components/PaperContainer';
import TextField from '@material-ui/core/TextField';
import {FormControl, InputLabel, Select, MenuItem} from '@material-ui/core';

function App() {
  let startingCategories = ["Any","animal","career","celebrity","dev","explicit","fashion","food","history","money","movie","music","political","religion","science","sport","travel"]
  const classes = useStyles();
  const [isLoaded, setIsLoaded] = useState(false);
  const [items, setItems] = useState([]);
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

  function PaperGrid() {
    if (resultsArray.length === 1){
      return (
        <div>
          <PaperContainer paperClass={classes.Paper} text={resultsArray}/>
        </div>
      );
    }
    else if (resultsArray.length > 1) {
    return (
    <div>
        {resultsArray.map(item => (
          <PaperContainer paperClass={classes.Paper} text={item}/>
        ))}
        {resultsArray.length}
    </div>
    );
    }
    return("");
  }

  function DropdownSearch(props){
    return(
      <Grid item xs={10} md={6}>
      <FormControl className={props.className}>
        <InputLabel>category</InputLabel>
        <Select
          value={category}
          onChange={event => {
            setCategory(event.target.value);
          }}>
          {[...categories].map(item => (
            <MenuItem value={item}>{item}</MenuItem>
          ))}
        </Select>
      </FormControl>
    </Grid>
    );
  }

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
         <DropdownSearch className={classes.FormItem} onChange={setCategory}/>
         {!(resultsArray.length===1) && <SearchButton buttomClass={classes.Button} onClick={consumeApi}/>}
          <ResultsCount/>
          <PaperGrid/>
          {(resultsArray.length===1) && <SearchButton buttomClass={classes.Button} onClick={consumeApi}/>}
        </Grid>
      </ThemeProvider>
    </div>
  );
}

export default App;
