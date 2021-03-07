import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import React from 'react';

function SearchButton(props) {
    return(
      <Grid item xs={10} md={12}>
        <Button
          onClick={props.onClick}
          className={props.buttomClass}
          color='primary'
          variant='contained'>
          Get a new random fact!
        </Button>
      </Grid>
    );
}

export default SearchButton;