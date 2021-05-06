import React, { useState } from 'react';

import consumeApi from './util/consumeApi'
import useStyles from './useStyles.js'

import { CircularProgress, Grid, TextField  } from '@material-ui/core';
import SearchButton from './components/SearchButton';
import DropdownSearch from './components/DropdownSearch';
import ResultCards from './components/ResultCards';
import ResultCount from './components/ResultCount';

const categories = ["Any","animal","career","celebrity","dev","explicit","fashion","food","history","money","movie","music","political","religion","science","sport","travel"]

function App() {
  const classes = useStyles();
  const [loading, setLoading] = useState(false);
  const [query, setQuery] = useState('');
  const [category, setCategory] = useState('');
  const [resultsArray, setResultsArray] = useState([]);

  const handleSearch = () => {
    setLoading(true)
    consumeApi(query, category)
      .then(setResultsArray)
      .finally(() => {
        setLoading(false)
      })
  }

  return (
    <div className={classes.container}>
      <Grid
        container
        direction="row"
        justify="center"
        alignItems="center"
        spacing={2}
      >
        <Grid item xs={12} md={6}>
          <TextField
            value={query}
            onChange={event => setQuery(event.target.value)}
            label="Search"
            fullWidth
          />
        </Grid>
        <Grid item xs={12} md={6}>
        <DropdownSearch
          label="Category"
          onChange={setCategory}
          category={category}
          categories={categories}
        />
        </Grid>
        <Grid item xs={12} md={12}>
        <ResultCount resultsLength={resultsArray.length} />
        </Grid>
        <Grid item xs={12} md={12}>
        <SearchButton
          buttomClass={classes.Button}
          onClick={handleSearch}
        />
        </Grid>
        {loading ? (
          <CircularProgress size={32} style={{ marginTop: 48 }} />
        ) : (
          <ResultCards resultsArray={resultsArray} />
        )}
      </Grid>
    </div>
  );
}

export default App;
