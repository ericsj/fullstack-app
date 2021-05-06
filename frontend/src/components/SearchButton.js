import React from 'react';
import Button from '@material-ui/core/Button';

function SearchButton({ onClick }) {
    return(
      <Button
        onClick={onClick}
        style={{ marginTop: 32, marginBottom: 32 }}
        color='primary'
        variant='contained'>
        Get a new random fact!
      </Button>
    );
}

export default SearchButton;