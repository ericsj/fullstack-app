import React, { useState, useEffect } from 'react';
import './App.css';
import 'fontsource-roboto';
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles'
import Grid from '@material-ui/core/Grid';
import ResultsCount from './components/ResultsCount';
import SearchButton from './components/SearchButton';
import PaperContainer from './components/PaperContainer';
import TextField from '@material-ui/core/TextField';
import {FormControl, InputLabel, Select, MenuItem} from '@material-ui/core';

function App() {
  let startingCategories = ["animal","career","celebrity","dev","explicit","fashion","food","history","money","movie","music","political","religion","science","sport","travel"]
  const classes = useStyles();
  const [isLoaded, setIsLoaded] = useState(false);
  const [items, setItems] = useState([]);
  const [query, setQuery] = useState('');
  const [category, setCategory] = useState('');
  const [categories, setCategories] = useState(startingCategories);
  const [resultsArray, setResultsArray] = useState([]);
  return (
  );
}

export default App;
