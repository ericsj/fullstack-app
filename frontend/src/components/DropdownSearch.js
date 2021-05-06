import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';
import Select from '@material-ui/core/Select';
import React from 'react';

function DropdownSearch({ label, category, onChange, categories }){
  return(
    <FormControl fullWidth>
      <InputLabel>{label}</InputLabel>
      <Select
        value={category}
        onChange={event => onChange(event.target.value)}>
        {categories.map((item, i) => (
          <MenuItem key={i} value={item}>{item}</MenuItem>
        ))}
      </Select>
    </FormControl>
  );
}

export default DropdownSearch;