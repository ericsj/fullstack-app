import Grid from '@material-ui/core/Grid';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';
import Select from '@material-ui/core/Select';
import React from 'react';

function DropdownSearch(props){
  return(
    <Grid item xs={10} md={6}>
    <FormControl className={props.className}>
      <InputLabel>category</InputLabel>
      <Select
        value={props.category}
        onChange={event => {
          props.setCategory(event.target.value);
        }}>
        {[...props.categories].map(item => (
          <MenuItem value={item}>{item}</MenuItem>
        ))}
      </Select>
    </FormControl>
  </Grid>
  );
}

export default DropdownSearch;