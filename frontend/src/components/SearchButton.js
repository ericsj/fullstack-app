import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import React, { Component } from 'react';

class SearchButton extends Component{
  render() {
    return(
      <Grid item xs={10} md={12}>
        <Button
          onClick={this.props.onClick}
          className={this.props.buttomClass}
          color='primary'
          variant='contained'>
          Get a new random fact!
        </Button>
      </Grid>
    );
  }
}

export default SearchButton;