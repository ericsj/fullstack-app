import React, { useState, useEffect } from 'react';
import './App.css';
import 'fontsource-roboto';
import { ThemeProvider } from '@material-ui/core/styles';
import theme from './themes/theme';
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
import consumeApi from './util/consumeApi'

function App() {
  let startingCategories = ["Any","animal","career","celebrity","dev","explicit","fashion","food","history","money","movie","music","political","religion","science","sport","travel"]
  const classes = useStyles();
  const [isLoaded, setIsLoaded] = useState(false);
  const [query, setQuery] = useState('');
  const [category, setCategory] = useState('');
  const [categories, setCategories] = useState(startingCategories);
  const [resultsArray, setResultsArray] = useState([]);

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
         <SearchButton
            buttomClass={classes.Button}
            onClick={() => {
              consumeApi(query, category, setResultsArray, setIsLoaded)
            }
            }
          />
          <PaperGrid resultsArray={resultsArray} paperClass={classes.Paper}/>
        </Grid>
      </ThemeProvider>
    </div>
  );
}

export default App;
